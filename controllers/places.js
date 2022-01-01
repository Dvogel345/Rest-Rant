const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
    }]
    res.render('places/index', {places})
})

router.get('/places', (req, res) => {
    res.send('GET /placesPlaces')
})

router.post('/places', (req, res) => {
})

router.get('/places/new', (req, res) => {
    res.send('GET /places/new')
})

router.get('/places/:id', (req, res) => {
    res.send('GET /places/id')
})

router.put('/places/:id', (req, res) => {
})

router.get('/places/:id/edit', (req, res) => {
    res.send('GET /places/id/eidt')
})

router.delete('/places/:id', (req, res) => {
})

router.post('/places/:id/rant', (req, res) => {
})

router.delete('/places/:id/rant/:rantId', (req, res) => {
})

router.get('*', (req, res) => {
    res.send('haloWorld')
})

module.exports = router