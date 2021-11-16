const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    // console.log(req.user);
    if(req.user.role === 'instructor'){
        next();
    }else{
        return res.status(500).send('forbidden access')
    }
})

module.exports = router