const mongoose = require('mongoose')

const productschema = mongoose.Schema({
    username:String,
    password: {type: String},
    price: {type: Number},
    detail: {type: String}
},{timestamps:true})

module.exports = mongoose.model('models',productschema)