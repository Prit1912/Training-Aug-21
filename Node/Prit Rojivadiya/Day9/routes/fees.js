const express = require('express');
const router = express.Router();
const feesData = require('../JSON/fees.json');
const verifyToken = require('../middleware/authentication')

router.get('/fees',verifyToken,(req,res,next)=>{
    res.send(feesData);
})

router.get('/:id/fees',verifyToken,(req,res,next)=>{
    const fdata = feesData.find((f)=>{
        return f.ID == parseInt(req.params.id);
    })
    if(!fdata){
        res.status(404).send('<h1>Student not found</h1>')
        return;
    }
    res.send(fdata.Fees);
})

router.post('/fees',verifyToken,(req,res,next)=>{
    feesData.push(req.body);
    res.send(feesData);
})

router.put('/:id/fees',verifyToken,(req,res,next)=>{
    const fdata = feesData.find((f)=>{
        return f.ID == parseInt(req.params.id);
    })
    if(!fdata){
        res.status(404).send('<h1>Student not found</h1>')
        return;
    }
    const index = feesData.indexOf(fdata);
    feesData.splice(index,1,req.body);
    res.send(feesData);
})

router.delete('/:id/fees',verifyToken,(req,res,next)=>{
    const fdata = feesData.find((f)=>{
        return f.ID == parseInt(req.params.id);
    })
    if(!fdata){
        res.status(404).send('<h1>Student not found</h1>')
        return;
    }
    const index = feesData.indexOf(fdata);
    feesData.splice(index,1);
    res.send(feesData);
})

module.exports = router;