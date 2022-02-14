const Joi = require('joi');
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
        maxlength: 100
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

function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        description: Joi.string().min(2).required(),
        category: Joi.number().required(),
        subcategory: Joi.number(),
        isPaid: Joi.string().required(),
        price: Joi.number(),
        image: Joi.string(),
        resources: Joi.string(),
        videos: Joi.string()
    })
    return schema.validate(course);
}


module.exports = {courses, validateCourse}