const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db1')
    .then(()=>{
        console.log('connected to database')
    })
    .catch(err=>{
        console.log('something went wrong',err);
})


const gradeSchema = mongoose.Schema({
    id: Number,
    grades: [Number]
})

const grades = mongoose.model('grade',gradeSchema);

/*
grades.insertMany([
    { "id" : 1, "grades" : [ 85, 80, 80 ] },
    { "id" : 2, "grades" : [ 88, 90, 92 ] },
    { "id" : 3, "grades" : [ 85, 100, 90 ] }
 ]).then(()=>{
     console.log('successfully inserted')
 })
*/

grades.updateOne({id:1,grades: 80},{$set:{"grades.$": 82}},(err,doc)=>{
    console.log(doc);
})


grades.updateOne({id:4,"grades.grade":85},{
    $set: {"grades.$.std": 5}
},(err,doc)=>{
    console.log(doc);
})


grades.updateOne({id:4, grades: {$elemMatch: { grade: {$lte:90}, mean: {$gte:80} }}},{
    $set: { "grades.$.std" : 6 }
},(err,doc)=>{
    console.log(doc);
})



grades.updateOne({id:4},{
    $inc: { "grades.$[].std" : 2 }
},(err,doc)=>{
    console.log(doc);
})


// insert elements in array
grades.updateOne({id:1},{
    $addToSet: {"grades": 90}
},(err,doc)=>{
    console.log('added successfully')
})


grades.updateOne({id:3},{
    $addToSet: {"grades": [93,97]}
},(err,doc)=>{
    console.log('added successfully')
})


grades.updateOne({id:2},{
    $addToSet: {"grades": {$each: [93,97]}}
},(err,doc)=>{
    console.log('added successfully')
})


// pop method
grades.updateOne({id:3},{
    $pop: {"grades": 1} // here 1 means remove from end, -1 means remove from beginning
},(err,doc)=>{
    console.log('popped successfully')
})


// pull and pullAll method
grades.updateOne({id:3},{
        // $pull: {"grades": {$in : [95,93]}} 
        $pullAll: {"grades": [95,93]} // do not need to specify operator
},(err,doc)=>{
        console.log('pulled successfully')
})

// push operator
grades.updateOne({id:3},{
        $push: {"grades": 93}
},(err,doc)=>{
        console.log('pushed successfully')
})