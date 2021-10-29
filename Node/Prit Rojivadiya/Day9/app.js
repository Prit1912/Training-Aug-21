const express = require('express');
const app = express();
const homeRouter = require('./routes/index');
const assignmentRouter = require('./routes/assignment');
const feesRouter = require('./routes/fees');
const resultRouter = require('./routes/result');
const userRouter = require('./routes/users');

app.set('view engine','ejs');

app.use(express.json());
app.use('/',homeRouter);
app.use('/employees/:id/child',assignmentRouter)
const stuRouter = [feesRouter,resultRouter];
app.use('/students',stuRouter);
app.use('/users',userRouter);

app.listen(8000,()=>{
    console.log('listening at port 8000');
})