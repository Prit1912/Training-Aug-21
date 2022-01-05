const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    _id:{
        type: Number,
        required: true
    },
    payment_mode:{
        type: String,
        enum: ['upi','netBanking','creditCard','debitCard'],
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    payment_status:{
        type: String,
        enum: ['Pending','Success','Failed'],
        required: true
    },
    payment_date:{
        type: Date,
        required: true
    },
    user: {
        type: Number,
        ref: 'user'
    },
    courses: {
        type: [Number],
        ref: 'course'
    }
})

const payments = mongoose.model('payment',paymentSchema);

module.exports = {payments};