const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: './images/thai-restaurant.jpg'
       // Photo by <a href="https://unsplash.com/@amseaman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andrew Seaman</a> on <a href="https://unsplash.com/s/photos/thai-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: './images/coding-cat.jpg'
         // Photo by <a href="https://unsplash.com/@agforlclassic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tai Bui</a> on <a href="https://unsplash.com/s/photos/coding-cats?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
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

router.post('/places/:id/rant', (req, res) => {
})

router.delete('/places/:id/rant/:rantId', (req, res) => {
})

router.get('*', (req, res) => {
    res.send('haloWorld')
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if(isNaN(id)) {
        res.render('error404')
    } else if (!places[id]) {
        res.render('error404')
    } else {
        res.render('places/show', {place: places[id] })
    }
})

module.exports = router