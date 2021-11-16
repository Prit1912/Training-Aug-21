const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    _id: Number,
    addressline1: String,
    addressline2: String,
    assignments: [{
        ActionCode: String,
        ActionCategory: String,
        assignmentDFF: [Number],
        AssignmentId: Number,
        AssingmentName: String,
        AssingmentNumber: String,
        EffectiveStartDate: Date,
        EffectiveEndDate: Date,
        LocationId: Number,
        ManagerId: Number
    }],
    City: String,
    Country: String,
    DOB: Date,
    DLid: Number,
    directReports:[Number]
});

const Employees = mongoose.model('employeeassignment',empSchema)

module.exports = {Employees};
