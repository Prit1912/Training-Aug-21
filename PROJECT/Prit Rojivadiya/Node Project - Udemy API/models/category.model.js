const mongoose = require('mongoose');
const Joi = require('joi');

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

const categories = mongoose.model('category',categorySchema);

function validateCategory(category){
    const schema = Joi.object({
        name: Joi.string().min(2).required()
    })
    return schema.validate(category);
}

module.exports = {categories,validateCategory}