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
    category: {
        type: Number,
        ref: 'categorie',
        required: true
    },
    isPaid: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: function(){return this.isPaid}
    }
}))

const courses = mongoose.model('course',courseSchema);

module.exports = {courses}