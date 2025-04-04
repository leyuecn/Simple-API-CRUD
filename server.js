const express = require('express')
const { readdirSync } = require('fs')
const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')
const connectdb = require('./config/db')

require('dotenv').config()

const app = express()
connectdb()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({limit:'10mb'}))

// route 3
readdirSync('./routes').map((r) => app.use('/api',require('./routes/' + r)))

// run server
app.listen(5000,() => console.log('Server running port 5000'))