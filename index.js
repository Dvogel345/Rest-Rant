// environment variables
require('dotenv').config()
const express = require('express')

// require needed node modules
const app = express()
// console.log(RANDO)

// Declare routes that people can visit 
app.get('/page1', function(req, res) {
    res.send(`
    <body style="margin: 0;">
        <div style="border: 1px solid black; height: 10vh; backgroudn-color: white;">
            <h2 style="text-align: center;">Route 1</h2>
        </div>    
    <h1>White Page</h1>
    </body>
    `)
})

// Declare routes that people can visit 
app.get('/page2', function(req, res) {
    res.send(`
    <body style="margin: 0;">
        <div style="border: 1px solid black; height: 10vh; backgroudn-color: white;">
            <h2 style="text-align: center;">Route 2</h2>
        </div>    
    <h1>White Page</h1>
    </body>
    `)
})

// Declare routes that people can visit 
app.get('/page3', function(req, res) {
    res.send(`
    <body style="margin: 0;">
        <div style="border: 1px solid black; height: 10vh; backgroudn-color: white;">
            <h2 style="text-align: center;">Route 3</h2>
        </div>    
    <h1>White Page</h1>
    </body>
    `)
})