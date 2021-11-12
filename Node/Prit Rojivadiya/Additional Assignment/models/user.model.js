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
        lowercase: true
    },
    phone: {
        type: Number,
        required: true
    }
}))

const users = mongoose.model('user',userSchema);

function validateUser(user){
    const schema = Joi.object({
        _id: Joi.number(),
        name: Joi.string().min(2),
        email: Joi.string().email(),
        phone: Joi.number()
    })
    return schema.validate(user);
}

module.exports = {users, validateUser}