const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');

const courseRouter = require('./controller1/courses/course.controller')
const signupRouter = require('./controller1/users/users.controller')
const authRouter = require('./controller1/login/auth.controller')
const userRouter = require('./controller1/user/user.controller')
const instRouter = require('./controller1/instructor/instructor.controller')
const adminRouter = require('./controller1/admin/admin.controller')

mongoose.connect('mongodb://localhost/udemy')
    .then(()=>{console.log('connection successful')})
    .catch((err)=>{console.log('error occured ',err)})

app.get('/',(req,res)=>{
    res.send('welcome to home page')
})

app.use('/courses',courseRouter);
app.use('/signup',signupRouter);
app.use('/auth',authRouter);
app.use('/user',userRouter);
app.use('/instructor',instRouter);
app.use('/admin',adminRouter);

const port = 8000;
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})