const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        minlength: 2,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const employees = mongoose.model('employee',employeeSchema);

module.exports = {employees};