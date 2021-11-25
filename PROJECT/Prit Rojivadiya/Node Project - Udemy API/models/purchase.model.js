const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    user: {
        type: Number,
        ref: 'user'
    },
    courses: {
        type: [Number],
        ref: 'course'
    }
})

const purchases = mongoose.model('purchase',purchaseSchema);

module.exports = {purchases};