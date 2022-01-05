const mongoose = require('mongoose');
const Joi = require('joi');

const offerSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    offerName: {
        type: String,
        required: true
    },
    courses: {
        type: [Number],
        ref: 'course',
        required: true
    },
    discount: {
        type: Number,
        min: 10,
        max: 100,
        required: true
    },
    isLive: {
        type: Boolean,
        default: false
    }
})

const offers = mongoose.model('offer',offerSchema);

function validateOffer(offer){
    const schema = Joi.object({
        offerName: Joi.string().min(2).required(),
        courses: Joi.array().required(),
        discount: Joi.number().min(10).max(90).required(),
        isLive: Joi.boolean()
    })
    return schema.validate(offer);
}

module.exports = {offers, validateOffer};