const router = require('express').Router()
const { render } = require('express/lib/response')
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', {places})
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => {
        res.redirect('/places')
        if (!req.body.pic) {
            //Default img if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
    })
    
    
    .catch(err => {
        if (err && err.name == 'ValidationError') {
            let message = 'Validation Error: '
            for (var field in err.errors) {
                message += `${field} was ${err.errors[field].value}. `
                message += `${err.errors[field].message}!`
            }
            console.log('Validation error message', message)
            res.render('places/new', {message})
        } else {
            res.render('error404')
        }
    })
})

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
  router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        console.log(place.comments)
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })
  
  router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
  })
  
  router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})
  
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})
  
  
  router.get('/:id/rant', (req, res) => {
    res.render('places/rant', {'id':req.params.id})
  })
  
  router.post('/:id/rant', (req, res) => {
    console.log(req.body)
    db.Place.findById(req.params.id)
    .then(place => {
        if(req.body.rant === 'on'){
          req.body.rant = 'true'
        }
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
  })
  
  
  
  router.delete('/:id/rant/:rantId', (req, res) => {
      res.send('GET /places/:id/rant/:rantId stub')
  })
  
  
  
  module.exports = router