const mongoose = require("mongoose");

const stuSchema = new mongoose.Schema({
  _id: {type: Number, required: true},
  name: {type: String, required: true},
  address: {type: String, required: true},
  fees: [
    {
      Amount: {type: Number, required: true},
      PaymentDate: {type: Date, required: true},
      Status: {type: Boolean, required: true},
    }
  ],
  result: [
    {
      Hindi: {type: Number, min: 0, max: 100, required: true},
      Eng: {type: Number, min: 0, max: 100, required: true},
      Math: {type: Number, min: 0, max: 100, required: true},
      Total: {type: Number, min: 0, max: 300, required: true},
      Grade: {type: String, enum: ['A','B','C','D'], required: true},
    }
  ]
});

const Students = mongoose.model('student',stuSchema)

module.exports = {Students};
