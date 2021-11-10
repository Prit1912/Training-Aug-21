const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
.then(()=>{
    console.log('connected to mongodb...')
}).catch((err)=>{
    console.log('could not connect ',err)
})

const courseSchema = new mongoose.Schema({
    tags: [String],
    date: Date,
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
})

const Course = mongoose.model('Course',courseSchema);

/*
Course.insertMany([
    {"tags":["express","backend"],"date":"2018-01-24T21:42:27.388Z","name":"Express.js Course","author":"Mosh","isPublished":true,"price":10,"__v":0},
    {"tags":["node","backend"],"date":"2018-01-24T21:42:47.912Z","name":"Node.js Course","author":"Mosh","isPublished":true,"price":20,"__v":0},
    {"tags":["aspnet","backend"],"date":"2018-01-24T21:42:59.605Z","name":"ASP.NET MVC Course","author":"Mosh","isPublished":true,"price":15,"__v":0},
    {"tags":["react","frontend"],"date":"2018-01-24T21:43:21.589Z","name":"React Course","author":"Mosh","isPublished":false,"__v":0},
    {"tags":["node","backend"],"date":"2018-01-24T21:44:01.075Z","name":"Node.js Course by Jack","author":"Jack","isPublished":true,"price":12,"__v":0},
    {"tags":["node","backend"],"date":"2018-01-24T21:47:53.128Z","name":"Node.js Course by Mary","author":"Mary","isPublished":false,"price":12,"__v":0},
    {"tags":["angular","frontend"],"date":"2018-01-24T21:56:15.353Z","name":"Angular Course","author":"Mosh","isPublished":true,"price":15,"__v":0}
  ])
*/

// 1. get all published backend course, sort by name, display only name and author

async function getCourse(){

const courses = await Course
    .find({isPublished: true,tags: 'backend'})
    .select({name: 1,author: 1})
    .sort({name: 1})

    console.log(courses);
}

// getCourse();



// 2. get all published frontend and backend courses, sort them by their price in desc order, display name, author and price

async function getCourse2(){

    const courses = await Course
        .find({isPublished: true,tags: { $in : ['backend','frontend']}})
        // .select({name: 1,author: 1, price: 1})
        .select('name author price')
        // .sort({price: -1})
        .sort('-price')
    
        console.log(courses);
    }
    
    // getCourse2();


// 3. get all published courses that are 15$ or more and have 'by' in their title

async function getCourse3(){

    const courses = await Course
    .find({isPublished: true})
    .or([
        {price: {$gte: 15}},
        {name: /.*by.*/i}
    ])
        console.log(courses);
    }
    
getCourse3();