const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
.then(()=>{
    console.log('connected to mongodb...')
}).catch((err)=>{
    console.log('could not connect ',err)
})

const courseSchema = new mongoose.Schema({
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function(v,callback){
                setTimeout(()=>{
                    // async work
                    const result = v && v.length>0
                    callback(result);
                },4000)
                // return v && v.length>0
            },
            message: 'Course should have atleast 1 tag'
        }
    },
    date: {type: Date, default: Date.now},
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
        // match: /^pattern$/
    },
    category: {
        type: String,
        enum: ['a','b','c'],
        required: true,
        lowercase: true, // automatically converts value to lowercase
        // uppercase: true
        trim: true
    },
    author: String,
    isPublished: Boolean,
    price: {
        type: Number,
        required: function(){ return this.isPublished},
        min: 10,
        max: 200,
        get: p => Math.round(p),
        set: v => Math.round(v)
    }
})

const Course = mongoose.model('Course',courseSchema);

async function createCourse(){
    const course = new Course({
        tags: ['frontend'],
        name: 'angular course',
        category: 'A',
        author: 'Prit',
        isPublished: true,
        price: 25.5
    })

    try{
        // course.validate((err)=>{
        //     if(err){
        //         console.log('validation failed')
        //     }
        // })
        const result = await course.save();
        console.log(result);
    }catch(err){
        for(field in err.errors){
            console.log(field)
            console.log(err.errors[field].message);
        }
        // console.log(err.errors);
    }
}

// createCourse()

// get course

async function getCourse(){
    const course = await Course.find({_id: '618a834e351d9ea4cce45f56'});
    console.log(course[0].price)
}

getCourse();