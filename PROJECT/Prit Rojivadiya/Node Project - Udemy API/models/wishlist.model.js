const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    user: {
        type: Number,
        ref: 'user'
    },
    courses: {
        type: [Number],
        ref: 'course'
    }
})

const wishlistItems = mongoose.model('wishlist',wishlistSchema);

module.exports = {wishlistItems};