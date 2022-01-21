const db = require('../models')

// TO use awaitm we need an async function. 
async function seed() {
    //Get the place, H-Thai-ML
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    // Create a faek sample comment.
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply terrible! Highly recommended though!'
    })

    // Add the comment to the place's comment array
    place.Comment.push(comment.id)

    //Exit the program
    process.send()
}

seed()