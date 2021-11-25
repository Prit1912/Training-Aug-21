const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: {
        type: Number,
        ref: 'user'
    },
    courses: {
        type: [Number],
        ref: 'course'
    }
})

const cartitems = mongoose.model('cart',cartSchema);

module.exports = {cartitems};