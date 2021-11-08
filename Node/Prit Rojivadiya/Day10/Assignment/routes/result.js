const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authentication')
const {results} = require('../config/dbConnect')

router.get('/result',verifyToken,(req,res,next)=>{
    results.find({},(err,doc)=>{
        res.send(doc);
    })
})

router.get('/:id/result',verifyToken,(req,res,next)=>{
    results.find({ID: req.params.id},(err,doc)=>{
        res.send(doc);
    })
})


router.post('/result',verifyToken,(req,res,next)=>{
    results.insertMany(req.body);
    results.find({},(err,doc)=>{
        console.log(doc)
        res.send(doc);
    })
})

router.put('/:id/result',verifyToken,(req,res,next)=>{
    results.updateOne({ID: req.params.id},req.body,(err,doc)=>{
        console.log('updated');
    })
    results.find({},(err,doc)=>{
        res.send(doc);
    })
})

router.delete('/:id/result',verifyToken,(req,res,next)=>{
    results.deleteOne({ID: req.params.id}).then(()=>{
        console.log('deleted');
    }).catch((err)=>{
        console.log(err)
    })
    results.find({},(err,doc)=>{
        res.send(doc);
    })
})

module.exports = router;