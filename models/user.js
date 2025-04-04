const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    username:String,
    password: {type: String},
},{timestamps:true})

module.exports = mongoose.model('users',userschema)