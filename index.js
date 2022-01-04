// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')

// require needed node modules
const app = express()

// Declare routes that people can visit 
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.render('404 Page')
})

app.listen(process.env.PORT)