const express = require('express');
const router = express.Router();
const resultData = require('../JSON/result.json')
const verifyToken = require('../middleware/authentication')

router.get('/result',verifyToken,(req,res,next)=>{
    res.send(resultData);
})

router.get('/:id/result',verifyToken,(req,res,next)=>{
    const rdata = resultData.find((r)=>{
        return r.ID == parseInt(req.params.id);
    })
    if(!rdata){
        res.status(404).send('<h1>Student not found</h1>')
        return;
    }
    res.send(rdata.Result);
})


router.post('/result',verifyToken,(req,res,next)=>{
    resultData.push(req.body);
    res.send(resultData);
})

router.put('/:id/result',verifyToken,(req,res,next)=>{
    const fdata = resultData.find((f)=>{
        return f.ID == parseInt(req.params.id);
    })
    if(!fdata){
        res.status(404).send('<h1>Student not found</h1>')
        return;
    }
    const index = resultData.indexOf(fdata);
    resultData.splice(index,1,req.body);
    res.send(resultData);
})

router.delete('/:id/result',verifyToken,(req,res,next)=>{
    const fdata = resultData.find((f)=>{
        return f.ID == parseInt(req.params.id);
    })
    if(!fdata){
        res.status(404).send('<h1>Student not found</h1>')
        return;
    }
    const index = resultData.indexOf(fdata);
    resultData.splice(index,1);
    res.send(resultData);
})

module.exports = router;