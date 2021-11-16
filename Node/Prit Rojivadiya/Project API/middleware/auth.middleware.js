const jwt = require('jsonwebtoken');
const config = require('config');

function auth(req,res,next){
    const token = req.header('x-access-token');
    if(!token) return res.status(401).send('access denied. No token provided')

    try{
        const decoded = jwt.verify(token,config.get('jwtPrivateKey'));
        req.user = decoded;
        // console.log(req.user)
        next(); 
    }catch(err){
        res.status(400).send('invalid token')
    }    
}

module.exports = auth;