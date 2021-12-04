const mongoose = require('mongoose');

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

module.exports = {offers};