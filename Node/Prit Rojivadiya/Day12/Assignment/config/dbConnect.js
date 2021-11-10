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
    ID: {type: Number, required: true},
    Name: {type: String, required: true, maxlength: 50},
    Address: {type: String, required: true, maxlength: 255},
    Fees: 
        {
            Amount: {
                type: Number,
                required: true
            },
            PaymentDate: {
                type: Date,
                required: true
            },
            Status: {
                type: Boolean,
                required: true
            }
        }
    
})

const fees = mongoose.model('fee',feeSchema);

const resultSchema = mongoose.Schema({
    ID: {type: Number, required: true},
    Name: {type: String, required: true, maxlength: 50},
    Address: {type: String, required: true, maxlength: 255},
    Result: {
        Hindi: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        },
        Eng:{
            type: Number,
            required: true,
            min: 0,
            max: 100
        },
        Math: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        },
        Total: {
            type: Number,
            required: true,
            min: 0,
            max: 300
        },
        Grade: {
            type: String,
            required: true,
            enum: ['A','B','C','D'],
            uppercase: true
        }
    }
})

const results = mongoose.model('result',resultSchema);

const employeeSchema = mongoose.Schema({
    empId: {type: String, required: true},
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
})

const empAssignments = mongoose.model('empAssignment',employeeSchema);

module.exports = {credentials,fees,results,empAssignments}