const mongoose = require('mongoose');
const genres = require('./routes/genres');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/radix')
    .then(()=>{console.log('connected to mongodb')})
    .catch((err)=>{console.log('error occured ',err)})

app.use(express.json());
app.use('/api/genres', genres);

app.listen(8000, () => console.log(`Listening on port 8000...`));