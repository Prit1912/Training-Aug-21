const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/radix')
.then(()=>{
    console.log('connected to mongodb...')
}).catch((err)=>{
    console.log('could not connect ',err)
})

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
})

const Course = mongoose.model('Course',courseSchema);

async function createCourse(){
    const course = new Course({
        name: "ReactJs Course",
        author: "Prit",
        tags: ['react','fr0ntend'],
        isPublished: true
    })
    
    const result = await course.save();
    console.log(result);
}

async function getCourses(){
    const courses = await Course.find({author: "Prit",isPublished: true})
                                .limit(10)
                                .sort({name: 1}) // 1 for ascending, -1 for descending
                                // .select({name:1,author:1,isPublished:1})
                                .select({tags: 0}) // tags will not included
    console.log(courses);
}

getCourses();

// Course.findOne({author:"Prit"},(err,doc)=>{
//     console.log(doc);
// });