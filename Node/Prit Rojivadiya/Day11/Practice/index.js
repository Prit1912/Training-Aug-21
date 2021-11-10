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
    isPublished: Boolean,
    price: Number
})

const Course = mongoose.model('Course',courseSchema);



// comparison query operator - lt, lte, gt, gte, in, nin, eq, ne
// logical query operator - and or not nor

async function getCourses1(){
    const courses = await Course
                        //   .find({price: {$gt:4000}})
                        //   .find({price: {$gt:4000, $lt:5500}})
                        //   .find({price: {$in:[4000,5000,6000]}})
                        //   .find({price: {$nin:[4000,5000,6000]}})
                        //   .find({price: {$not: {$gt: 5000}}})
                        //   .find({$nor: [{price: 5000},{isPublished: false}]})
                             .find()
                        //   .or([{author: "Man"},{isPublished: true}])
                             .and([{author: "Man"},{isPublished: true}])
                          
    console.log(courses);
}

getCourses1()



// ----------------------------------------------------------------

// regular expression, count

async function getCourses(){
    const courses = await Course
                        // .find({author: /^P/i}) // start with P
                        // .find({author: /t$/i}) // ends with t
                        .find({author: /.*a.*/i}) // contains a
                        .count()
                          
    console.log(courses);
}

getCourses();