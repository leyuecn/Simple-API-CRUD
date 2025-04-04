const model = require('../models/model')

// get
exports.read = async (req,res) => {
    try {
        const id = req.params.id
        const producted = await model.findOne({_id:id}).exec()
        res.send(producted)
    } catch (err) {
        console.log(err)
        res.status(500).send('server err')
    }
}

// get all
exports.list = async (req,res) => {
    try {
        const producted = await model.find({}).exec()
        res.send(producted)
    } catch (err) {
        console.log(err)
        res.status(500).send('server err')
    }
}

// post
exports.create = async (req,res) => {
    try {
        console.log(req.body)
        const producted = await model(req.body).save()
        res.send(producted)
    } catch (err) {
        console.log(err)
        res.status(500).send('server err')
    }
}

// put
exports.update = async (req,res) => {
    try {
        const id = req.params.id
        const updated = await model.findOneAndUpdate({_id:id},req.body,{new:true}).exec()
        res.send(updated)
    } catch (err) {
        console.log(err)
        res.status(500).send('server err')
    }
}

// delete
exports.deleted = async (req,res) => {
    try {
        const id = req.params.id
        const remove = await model.findOneAndDelete({_id:id}).exec()
        res.send(remove)
    } catch (err) {
        console.log(err)
        res.status(500).send('server err')
    }
}