const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');

const categoryRouter = require('./controllers/category.controller')
const courseRouter = require('./controllers/course.controller')
const buyerRouter = require('./controllers/buyer.controller')
const userRouter = require('./controllers/user.controller')

mongoose.connect('mongodb://localhost/udemy')
    .then(()=>{console.log('connection successful')})
    .catch((err)=>{console.log('error occured ',err)})


app.use('/categories',categoryRouter);
app.use('/courses',courseRouter);
app.use('/buyers',buyerRouter);
app.use('/users',userRouter);

const port = 8000;
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})