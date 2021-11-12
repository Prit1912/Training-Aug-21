const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
    userId: {
        type: Number,
        ref: 'user'
    },
    courseId: {
        type: [Number],
        ref: 'course'
    }
})

const buyers = mongoose.model('buyer',buyerSchema);

module.exports = {buyers};