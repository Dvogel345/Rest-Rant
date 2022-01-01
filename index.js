// environment variables
require('dotenv').config()
const express = require('express')

// require needed node modules
const app = express()

// Declare routes that people can visit 
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.render('404 Page')
})

app.listen(process.env.PORT)