const express = require('express');
const app = express();
const mongoose = require('mongoose');

const courseRouter = require('./controllers/courses/course.controller')
const userRouter = require('./controllers/users/user.controller');
const adminRouter = require('./controllers/admin/admin.controller');

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

app.use('/api/courses',courseRouter);
app.use('/api/users',userRouter);
app.use('/api/admin',adminRouter);



app.listen(port,(err)=>{
    if(err){
        console.error('something went wrong', err);
    }
    console.log(`listenig to port ${port}`)
})