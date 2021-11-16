const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    _id: {type: Number, required: true},
    addressline1: {type: String, required: true},
    addressline2: {type: String, required: true},
    assignments: [{
        ActionCode: {type: String,required: true},
        ActionCategory: {type: String,required: true},
        assignmentDFF: [{type: Number, required: true}],
        AssignmentId: {type: Number, required: true},
        AssingmentName: {type: String, required: true},
        AssingmentNumber: {type: String, required: true},
        EffectiveStartDate: {type: Date, required: true},
        EffectiveEndDate: {type: Date, required: true},
        LocationId: {type: Number, required: true},
        ManagerId: {type: Number}
    }],
    City: {type: String, required: true},
    Country: {type: String, required: true},
    DOB:{type: Date, required: true},
    DLid: {type: Number, required: true},
    directReports:[{type: Number, required: true}]
});

const Employees = mongoose.model('employeeassignment',empSchema)

module.exports = {Employees};
