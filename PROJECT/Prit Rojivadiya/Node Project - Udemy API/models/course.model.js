const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 1000
    },
    courseImage: {
        type: Object,
        required: true,
    },
    videos: {
        type: [Object],
        required: true
    },
    resources: {
        type: Object,
        required: true
    },
    category: {
        type: Number,
        ref: 'category',
        required: true
    },
    subcategory: {
        type: Number,
        ref: 'subcategory'
    },
    isPaid: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: function(){return this.isPaid}
    },
    offerPrice: {
        type: Number
    },
    isActive: {
        type: Boolean,
        default: true
    },
    instructor: {
        type: Number,
        ref: 'user'
    },
    rating: {
        type: Number,
        default: 0
    }
}))

const courses = mongoose.model('course',courseSchema);

module.exports = {courses}