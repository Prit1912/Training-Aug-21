const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/radix')
.then(()=>{
    console.log('connected to mongodb...')
}).catch((err)=>{
    console.log('could not connect ',err)
})

const credentialSchema = mongoose.Schema({
    id: String,
    password: String
})

const credentials = mongoose.model('credential',credentialSchema);

const feeSchema = mongoose.Schema({
    ID: Number,
    Name: String,
    Address: String,
    Fees: Object
})

const fees = mongoose.model('fee',feeSchema);

const resultSchema = mongoose.Schema({
    ID: Number,
    Name: String,
    Address: String,
    Result: Object
})

const results = mongoose.model('result',resultSchema);

const employeeSchema = mongoose.Schema({
    empId: String,
    addressline1: String,
    addressline2: String,
    assignments: [Object],
    City: String,
    Country: String,
    DOB:String,
    DLid: Number,
    directReports:[Number]
})

const empAssignments = mongoose.model('empAssignment',employeeSchema);

module.exports = {credentials,fees,results,empAssignments}