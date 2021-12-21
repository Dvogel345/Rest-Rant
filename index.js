// environment variables
require('dotenv').config()
const express = require('express')

// require needed node modules
const app = express()

// Declare routes that people can visit 
app.use('/places', require('./'))

app.listen(3002, () => console.log('listening to port 3002'))