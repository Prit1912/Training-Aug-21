const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const courseRouter = require('./controllers/courses/course.controller');
const userRouter = require('./controllers/users/user.controller');
const adminRouter = require('./controllers/admin/admin.controller');
const paymentRouter = require('./controllers/payment/payment.controller');

// environment vaiables
require('dotenv').config();
const port = process.env.Port;
const host = process.env.Host;
const database = process.env.Database;

// database connection
mongoose.connect(`mongodb://${host}/${database}`)
    .then(()=>{console.log('connected to mongodb')})
    .catch((err)=>{console.log(err)})


// middlewares
app.use(express.json());
app.use(cors());
app.use('/public',express.static('public'))

//routes
app.use('/api/courses',courseRouter);
app.use('/api/user',userRouter);
app.use('/api/admin',adminRouter);
app.use('/api/payment',paymentRouter)

// starting server
app.listen(port,(err)=>{
    if(err){
        console.error('something went wrong', err);
    }
    console.log(`listenig to port ${port}`)
})