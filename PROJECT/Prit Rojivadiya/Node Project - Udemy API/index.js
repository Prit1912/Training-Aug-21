const express = require('express');
const app = express();
const mongoose = require('mongoose');

const signupRouter = require('./controllers/signup/signup.controller')
const loginRouter = require('./controllers/login/login.controller')
const usersRouter = require('./controllers/users/users.controller')
const courseRouter = require('./controllers/courses/course.controller')

// environment vaiables
require('dotenv').config();
const port = process.env.Port;
const host = process.env.Host;
const database = process.env.Database;

// database connection
mongoose.connect(`mongodb://${host}/${database}`)
    .then(()=>{console.log('connected to mongodb')})
    .catch((err)=>{console.log(err)})

app.use(express.json());
app.use('/public',express.static('public'))

app.use('/',courseRouter);
app.use('/users',usersRouter)
app.use('/signup',signupRouter);
app.use('/login',loginRouter);

app.listen(port,(err)=>{
    if(err){
        console.error('something went wrong', err);
    }
    console.log(`listenig to port ${port}`)
})