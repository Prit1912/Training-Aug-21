const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(({
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
        required: true,
        ref: 'category'
    }
}))

const subcategories = mongoose.model('subcategory',categorySchema);

module.exports = {subcategories}