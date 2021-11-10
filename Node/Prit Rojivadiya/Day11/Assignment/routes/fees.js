const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authentication')
const {fees} = require('../config/dbConnect')

router.get('/fees',(req,res,next)=>{
    fees.find({$or: [{"Fees.Amount": {$gt:11000}},{Name: "Reena"}]},(err,doc)=>{
    // fees.find({"Fees.Amount": {$gt: 11000}},{Name: 1},(err,doc)=>{
        res.send(doc);
    })
})

router.get('/:id/fees',(req,res,next)=>{
    fees.find({$and: [{ID: req.params.id},{"Fees.Amount": {$lt:11000}}]},(err,doc)=>{
        res.send(doc);
    })
})

router.post('/fees',verifyToken,(req,res,next)=>{
        fees.insertMany(req.body).then(()=>{console.log('inserted successfully')}).catch(err=>console.log(err));
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
    fees.deleteOne({$and: [{ID: req.params.id},{Name: "Prit"}]}).then((doc)=>{
        console.log(doc);
    }).catch((err)=>{
        console.log(err)
    })
    fees.find({},(err,doc)=>{
        res.send(doc);
    })
})

module.exports = router;