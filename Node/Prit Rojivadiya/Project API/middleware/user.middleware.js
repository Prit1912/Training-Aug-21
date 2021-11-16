const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    // console.log(req.user)
    if(req.user.role === 'user'){
        next();
    }else{
        return res.status(403).send('forbidden access')
    }
})

module.exports = router