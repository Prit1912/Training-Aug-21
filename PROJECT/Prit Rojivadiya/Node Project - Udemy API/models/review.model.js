const Joi = require('joi');
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

function validateReview(review){
    const schema = Joi.object({
        rating: Joi.number().min(1).max(5),
        review: Joi.string().required('review is required')
    })
    return schema.validate(review);
}


module.exports = {reviews, validateReview};