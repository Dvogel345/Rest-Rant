const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.get('/places', (req, res) => {
    res.send('GET /places')
})

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

router.get('/places/new', (req, res) => {
    res.render('GET /places/new')
})

router.get('/places/:id', (req, res) => {
    res.send('GET /places/id')
})

router.put('/places/:id', (req, res) => {
})

router.delete('/places/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    } else if (!places[id]) {
        res.render('error404')
    } else {
        places.splice(i, 1)
        res.redirect('/places')
    }
})

router.get('/places/:id/edit', (req, res) => {
    res.send('GET /places/id/edit')
})

router.post('/places/:id/rant', (req, res) => {
})

router.delete('/places/:id/rant/:rantId', (req, res) => {
})

router.get('*', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    } else if (!places[id]) {
        res.render('error404')
    } else {
        res.render('places/show', {place: places[id] })
    }
})

module.exports = router