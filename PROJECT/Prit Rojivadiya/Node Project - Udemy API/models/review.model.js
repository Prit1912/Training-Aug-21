const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: {
        type: Number,
        ref: 'user'
    },
    course: {
        type: Number,
        ref: 'course'
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    review: {
        type: String,
        required: true
    }
})

const reviews = mongoose.model('review',reviewSchema);

module.exports = {reviews};