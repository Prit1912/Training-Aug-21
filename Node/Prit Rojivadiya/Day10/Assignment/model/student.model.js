const mongoose = require("mongoose");

const stuSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  address: String,
  fees: [
    {
      Amount: Number,
      PaymentDate: Date,
      Status: Boolean,
    }
  ],
  result: [
    {
      Hindi: Number,
      Eng: Number,
      Math: Number,
      Total: Number,
      Grade: String,
    }
  ]
});

const Students = mongoose.model('student',stuSchema)

module.exports = {Students};
