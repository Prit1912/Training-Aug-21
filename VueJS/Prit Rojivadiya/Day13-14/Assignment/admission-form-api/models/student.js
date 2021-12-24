const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      requied: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dob: {
    type: String,
    required: true,
  },
  placeOfBirth: {
    type: String,
    required: true,
  },
  address: {
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pin: {
      type: Number,
      required: true,
    },
  },
  father: {
    fullName: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    email: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      requied: true,
    },
    profession: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      reuqired: true,
    },
  },
  mother: {
    fullName: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        requied: true,
      },
    },
    email: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      requied: true,
    },
    profession: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      reuqired: true,
    },
  },
  emergencyContact: {
    relation: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
  referenceDetail: {
    referenceThrough: {
      type: String,
      required: true,
    },
    addressWithTel: {
      type: String,
      required: true,
    },
  },
});

const students = mongoose.model("student", studentSchema);

module.exports = { students };
