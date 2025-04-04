const jwt = require('jsonwebtoken')

exports.auth = async (req,res,next) => {
    try {
        const token = req.headers["authtoken"]
        if (!token) {
            return res.status(401).send('no token!')
        }

        const dc = jwt.verify(token,'jwts')
        req.u = dc.u
        next()

    } catch (err) {
        console.log(err)
        res.send('token invalid!').status(500)
    }
}   