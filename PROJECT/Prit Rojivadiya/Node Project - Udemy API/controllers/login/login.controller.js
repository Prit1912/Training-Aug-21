const express = require('express');
const config = require('../../config/config');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const Joi = require('joi');
const {users} = require('../../models/user.model')
const router = express.Router();
const nodemailer = require('nodemailer');

if(!config.secretKey){
    console.error('jwtPrivateKey is not defined')
}

router.post('/',async (req,res)=>{
    const c = req.body
    const { error } = validateUser(c);
    if(error) return res.status(400).send(error.details[0].message)

    const user = await users.findOne({email: c.email})
    if(!user) return res.status(400).send('invalid user or password')

    if(user.isActive == false){
        return res.status(403).send('acount cannot be accessed')
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('invalid user or password')

    const token = jwt.sign({_id: user._id, role: user.role},config.secretKey,{
        algorithm: config.algorithm,
        expiresIn: "1h"
    })
    console.log(token)
    res.send(token);
    console.log(user.role)
    // console.log(req.protocol + '://' + req.get('host') + '/courses')
    // res.redirect(req.protocol + '://' + req.get('host')+ '/user')
    
})


// forgot password
router.post('/forgot-password',async (req,res)=>{
    const userEmail = req.body.email;
    const user = await users.findOne({email: userEmail});
    if(!user) return res.status(404).send('user not found');

    const token = jwt.sign({email: userEmail},config.secretKey,{expiresIn: "15m"})
    const link = `http://localhost:8000/login/reset-password/${token}`;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'pritrojivadiya@gmail.com',
          pass: xxxxxx
        }
      });
      
      var mailOptions = {
        from: 'pritrojivadiya@gmail.com',
        to: userEmail,
        // to: 'manrojivadiya@gmail.com',
        subject: 'Sending Email using Node.js',
        html: `<a href = ${link}>Click here to reset password</a>`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    res.send(link);
})


// reset password
router.post('/reset-password/:token', async (req,res)=>{
    const token = req.params.token;
    const decoded = jwt.verify(token,config.secretKey);
    req.user = decoded;
    const salt = await bcrypt.genSalt(10);
    let newPassword = await bcrypt.hash(req.body.password,salt)
    try{
        let user = await users.findOneAndUpdate({email: req.user.email},{
            $set: {password: newPassword}
        },{new: true});
        res.send(user);
    }catch(err){
        res.send(err);
    }
})

function validateUser(user){
    const schema = Joi.object({
        email: Joi.string().email(),
        password: Joi.string().min(4)
    })
    return schema.validate(user);
}


module.exports = router;