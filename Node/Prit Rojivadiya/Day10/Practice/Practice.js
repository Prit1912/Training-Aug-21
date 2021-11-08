const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/radix')
.then(()=>{
    console.log('connected to mongodb...')
}).catch((err)=>{
    console.log('could not connect ',err)
})

const empSchema = new mongoose.Schema({
    id: String,
    name: String,
    Address: String,
    skills: [String]
})
    
const Employees = mongoose.model('employee',empSchema);

async function addEmp(){
    const emp = new Employees({
        id: "3",
        name: "Tirth",
        Address: "Gandhinagar, Gujarat",
        skills: ['PHP','laravel']
    })
    const result = await emp.save();
    console.log(result);
}

/*
Employees.insertMany([
    {
        id: "4",
        name: "Krusha",
        Address: "Ahmedabad, Gujarat",
        skills: ['Reactjs','Angularjs']
    },
    {
        id: "5",
        name: "Ronak",
        Address: "Vadodara, Gujarat",
        skills: ['data_mining','blockchain']
    }
])
*/

async function getEmp(){
    const emps = await Employees.find({id:[2,4,5]})
                                .sort({name: -1})
                                .select({name:1,id:1,skills:1})
    console.log(emps);
}

// getEmp();


// find method
Employees.find({name:["Tirth","Krusha"]},(err,docs)=>{
    console.log(docs)
})

// findone method
Employees.findOne({skills:'Reactjs'},(err,doc)=>{
    console.log(doc);
})

// find by id
Employees.findById('617f9a62ce7a021427a090f5',(err,doc)=>{
    console.log(doc);
})

// find by id and delete
Employees.findByIdAndDelete('617f9e694417d8c64331291b',(err,doc)=>{
    console.log('deleted ',doc)
})

// find by id and update
Employees.findByIdAndUpdate('617f9a62ce7a021427a090f5',{name: "Akhil"},(err,doc)=>{
    console.log(doc);
})

// findone and update
Employees.findOneAndUpdate({name:"Akhil"},{name:"Man"},(err,doc)=>{
    console.log(doc);
})

// updateone
Employees.updateOne({},{name:"Prit19"},(err,doc)=>{
    console.log(doc);
})

// delete one
Employees.deleteOne({id: {$gt: 3}}).then(function(){
    console.log('deleted');
}).catch(function(err){
    console.log(err);
})
