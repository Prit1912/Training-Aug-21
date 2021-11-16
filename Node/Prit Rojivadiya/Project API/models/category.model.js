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
    }
}))

const categories = mongoose.model('categorie',categorySchema);

module.exports = {categories}