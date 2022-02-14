const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema(({
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
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String, 
        enum : ['user','admin','instructor'], 
        default: 'user',
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}))


const users = mongoose.model('user',userSchema);

function validateUser(user){
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        email: Joi.string().email().required(),
        phone: Joi.number().required(),
        password: Joi.string().min(4),
        role: Joi.string(),
        isActive: Joi.boolean()
    })
    return schema.validate(user);
}

module.exports = {users, validateUser}