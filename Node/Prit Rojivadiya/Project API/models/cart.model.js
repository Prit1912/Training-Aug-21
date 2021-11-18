const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: Number,
        ref: 'user'
    },
    courseId: {
        type: [Number],
        ref: 'course'
    }
})

const cartitems = mongoose.model('cart',cartSchema);

module.exports = {cartitems};