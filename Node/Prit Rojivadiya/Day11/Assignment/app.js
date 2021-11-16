const express = require('express');
const app = express();
const mongoose = require('mongoose');
const empRouter = require('./controller/Employee/employee.controller')
const stuRouter = require('./controller/Student/student.controller')
const loginRouter = require('./controller/login/auth.controller')

mongoose.connect('mongodb://localhost/radix')
    .then(()=>{console.log('connection successful')})
    .catch((err)=>{console.log('error occured ',err)})

app.use(express.json());
app.use('/employees',empRouter);
app.use('/students',stuRouter);
app.use('/login',loginRouter);
app.listen(8000,()=>{
    console.log('listening to port 8000');
})