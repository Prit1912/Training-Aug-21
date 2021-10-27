const Joi = require('joi');
const helmet = require('helmet');
const morgan = require('morgan');
const mw = require('./middleware')
console.log(mw);
const express = require('express');
const app = express();
require("dotenv").config({path: '../.env'});

console.log(process.env.PORT)

// in built middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('../public'));

// custom middleware
app.use(mw.log) 
app.use(mw.auth)

// third party middleware
app.use(helmet());

// setting environment variable -> $env:NODE_ENV='development'
if(process.env.NODE_ENV == 'development'){
    app.use(morgan('tiny'));
}

let courses = [
    {"id":1,"name":"course1"},
    {"id":2,"name":"course2"},
    {"id":3,"name":"course3"}
]

app.get('/',(req,res)=>{
    res.send('hello')
})

app.get('/api/courses',(req,res)=>{
    res.send(courses);
})

app.get('/api/courses/:id',(req,res,next)=>{
    const course = courses.find((c)=>{
        return c.id === parseInt(req.params.id);
    })
    if(!course){
        next()
    }
    res.status(200).send(course);
},(req,res,next)=>{
    console.log('error');
    res.status(404).send('Something not found!')
})

// to set environment variable write command set VarName=Value // $env:PORT=5000
let port = process.env.PORT || 8000;
app.listen(port,()=>console.log(`listening to port ${port}`));