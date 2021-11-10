var express = require('express');
var router = express.Router();
const {credentials} = require('../config/dbConnect');
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

  credentials.find({$and: [{id:userData.username},{password:userData.password}]},(err,doc)=>{

    if(doc.length == 0){
      res.json({
        messasge: "login Failed",
      })
      return;
    }

    console.log(doc);

    let token = jwt.sign(userData,global.config.secretKey,{
      algorithm: global.config.algorithm,
      expiresIn: '5m' 
    })
    res.json({
      messasge: "login successful",
      jwtoken: token
    })
  })
})

module.exports = router;
