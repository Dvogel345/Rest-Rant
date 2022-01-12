const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)

// module.exports = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: './images/thai-restaurant.jpg'
//     // Photo by <a href="https://unsplash.com/@amseaman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andrew Seaman</a> on <a href="https://unsplash.com/s/photos/thai-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

// }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: './images/coding-cat.jpg'
//     // Photo by <a href="https://unsplash.com/@agforlclassic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tai Bui</a> on <a href="https://unsplash.com/s/photos/coding-cats?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//     }]