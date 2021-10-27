const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json())

let courses = [
    {"id":1,"name":"course1"},
    {"id":2,"name":"course2"},
    {"id":3,"name":"course3"}
]

app.get('/',(req,res)=>{
    console.log(req.method,req.originalUrl,req.query);
    res.send('hello')
})

app.get('/api/courses',(req,res)=>{
    res.send(courses);
})

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find((c)=>{
        return c.id === parseInt(req.params.id);
    })
    if(!course) res.status(404).send('<h2>course not found</h2>');
    res.send(course);
})

app.get('/api/posts/:year/:month',(req,res)=>{
    // res.send(req.params);
    res.send(req.query);
})


// adding course
app.post('/api/courses',(req,res)=>{

    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })

    const result = schema.validate(req.body); // returns object
    console.log(result);

    // if(!req.body.name || req.body.name.length < 3){
    if(result.error){
        // 400 bad request
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = {
        "id": courses.length + 1,
        "name": req.body.name
    }
    courses.push(course);
    res.send(course);
})



// updating course
app.put('/api/courses/:id',(req,res)=>{
    let course = courses.find((c)=>{
        return c.id === parseInt(req.params.id);
    })
    if(!course){
        res.status(404).send('<h2>course not found</h2>');
        return;
    }

    const result = validateCourse(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    course.name = req.body.name;
    res.send(course);
})


// deleting course
app.delete('/api/courses/:id',(req,res)=>{
    let course = courses.find((c)=>{
        return c.id === parseInt(req.params.id);
    })
    if(!course) return res.status(404).send('<h2>course not found</h2>');

    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);
})


function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })

    return schema.validate(course); // returns object
}




// to set environment variable write command set VarName=Value // $env:PORT=5000
let port = process.env.PORT || 8000;
app.listen(port,()=>console.log(`listening to port ${port}`));