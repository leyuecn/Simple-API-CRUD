const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const ur = require('../models/user')

// register
exports.register = async (req,res) => {
    try {
        // 1 checkuser
        const {username, password} = req.body
        var u = await ur.findOne({username})
        if (u) {
            return res.send('user already!').status(400)
        }

        // 2 encrypt
        const salt = await bcrypt.genSalt(10)
        u = new ur ({
            username,
            password
        })
        u.password = await bcrypt.hash(password,salt)

        // 3 save
        await u.save()
        res.send('register success!')

    } catch (err) {
        console.log(err)
        res.status(500).send('server err')
    }
}

// login
exports.login = async (req,res) => {
    try {
        // 1 check user
        const {username, password} = req.body
        var u = await ur.findOneAndUpdate({username},{new:true})
        if (u) {
            const isMatch = await bcrypt.compare(password,u.password)
            if (!isMatch) {
                return res.status(400).send('password invalid!')
            }

            // 2 payload
            var payload = {
                u: {
                    username:u.username
                }
            }

            // 3 generate
            jwt.sign(payload,'jwts',{expiresIn:120},(err,token) => {
                if(err) throw err
                res.json({token,payload})
            })
        } else {
            return res.status(400).send('user not fount!')
        }

    } catch (err) {
        console.log(err)
        res.status(500).send('server err')
    }
}