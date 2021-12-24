const express = require('express');
const app = express();
const mongoose = require('mongoose');
const employeeRoute = require('./routes/employee');
const cors = require('cors')

mongoose.connect('mongodb://localhost/api_call',{ useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex: true},()=>{
    console.log('connected to mongodb')
})


app.use(express.json());
app.use(cors());

app.use('/employees',employeeRoute);

app.get('/',(req,res)=>{
    res.send('welcome to home page')
})

app.listen(8000,()=>{
    console.log('listening to port 8000');
})