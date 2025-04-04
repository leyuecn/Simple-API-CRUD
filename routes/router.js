const express = require('express')
const router = express.Router()
const {read,list,create,update,deleted} = require('../controllers/controller')
const {auth} = require('..//middleware/auth')

// http://localhost:5000/api/product
router.get('/product',auth,list)
router.get('/product/:id',auth,read)
router.post('/product',create)
router.put('/product/:id',auth,update)
router.delete('/product/:id',auth,deleted)

module.exports = router