const jwt = require('jsonwebtoken');
const config = require('../config/config');


function auth(req,res,next){
    const token = req.header('x-access-token');
    if(!token) return res.status(401).send('access denied. No token provided')   
    try{
        const decoded = jwt.verify(token,config.secretKey,{
            algorithm: config.algorithm
        });
        req.user = decoded;
        next();
    }catch(err){
        console.log('err')
        res.status(400).send(err);
    }     
}


function permit(...roles){
    return function(req,res,next){
        if(roles.includes(req.user.role)){
            next();
        }else{
            return res.status(401).json({ message: 'Unauthorized' });
        }
    }
}


module.exports = {auth,permit};