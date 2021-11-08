const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authentication')
const {fees} = require('../config/dbConnect')

router.get('/fees',verifyToken,(req,res,next)=>{
    fees.find({},(err,doc)=>{
        res.send(doc);
    })
})

router.get('/:id/fees',verifyToken,(req,res,next)=>{
    fees.find({ID: req.params.id},(err,doc)=>{
        res.send(doc);
    })
})

router.post('/fees',verifyToken,(req,res,next)=>{
        fees.insertMany(req.body);
        fees.find({},(err,doc)=>{
        console.log(doc)
        res.send(doc);
    })
})

router.put('/:id/fees',verifyToken,(req,res,next)=>{
    fees.updateOne({ID: req.params.id},req.body,(err,doc)=>{
        console.log('updated');
    })
    fees.find({},(err,doc)=>{
        res.send(doc);
    })
})

router.delete('/:id/fees',verifyToken,(req,res,next)=>{
    fees.deleteOne({ID: req.params.id}).then(()=>{
        console.log('deleted');
    }).catch((err)=>{
        console.log(err)
    })
    fees.find({},(err,doc)=>{
        res.send(doc);
    })
})

module.exports = router;