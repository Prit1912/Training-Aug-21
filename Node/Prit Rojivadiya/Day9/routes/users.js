var express = require('express');
var router = express.Router();
const credentials = require('../JSON/credentials.json');
const jwt = require('jsonwebtoken');
global.config = require('../config/config');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',(req,res,next)=>{

  const userData = {
    username: req.body.uname,
    password: req.body.pwd
  }

  let token = jwt.sign(userData,global.config.secretKey,{
    algorithm: global.config.algorithm,
    expiresIn: '5m' 
  })

  const cred = credentials.find((c)=>{
    return c.id === userData.username;
  })

  if(!cred){
    res.json({
      messasge: "login Failed",
    })
    return;
  }

  if(cred.id == userData.username && cred.password == userData.password){
    res.json({
      messasge: "login successful",
      jwtoken: token
    })
  }else{
    res.json({
      messasge: "login Failed",
    })
    return;
  }
})

module.exports = router;
