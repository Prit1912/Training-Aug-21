const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db2')
    .then(()=>{
        console.log('connected to database')
    })
    .catch(err=>{
        console.log('something went wrong',err);
    })

const biosSchema = mongoose.Schema({
    fname: String,
    lname: String,
    age: Number,
    active: Boolean,
    date: Date
})

const bios = mongoose.model('bio',biosSchema);

bios.find({},(err,doc)=>{
    console.log(doc);
})

// increment operator
bios.updateMany({lanme: "Rojivadiya"},{
    $inc : {age: 2} 
}).then((doc)=>{
    console.log(doc)
})


// mul operator - Multiplies the value of the field by the specified amount.

// min and max operator
bios.updateOne({lname: "Rojivadiya"},{
    $min: {age: 10} // if specified age(20) is less then actual age in database, then 20 will be set to database else no effect
}).then(()=>{
    console.log('updated successfully');
})

bios.updateOne({lname: "Rojivadiya"},{
    $max: {age: 20} 
}).then(()=>{
    console.log('updated successfully');
})

// rename operator
bios.updateMany({},{ $rename : {"lnmea":"lname"}})
.then((doc)=>console.log(doc))

// set operator
bios.updateMany({fname: "Prit"},{
    $set : {lname: "Patel",age: 21}
}).then(()=>{console.log('updated successfully')})



