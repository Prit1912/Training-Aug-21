var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config');

router.use((req,res,next)=>{
    const token = req.headers['x-access-token'];
    jwt.verify(token,config.secretKey,{algorithm: config.algorithm},(err,decoded)=>{
        if(err){
            let errordata = {
                message: err.message,
                expiredAt: err.expiredAt
            };
            console.log(errordata);
            return res.status(401).json(errordata);
        }
        req.decoded = decoded;
        console.log(decoded);
        next();
    })
})

module.exports = router
