const express = require('express');
const config = require('config');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const Joi = require('joi');
const {users} = require('../models/user.model')
const router = express.Router();

if(!config.get('jwtPrivateKey')){
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

    const token = jwt.sign({_id: user._id, role: user.role},config.get("jwtPrivateKey"),{expiresIn: "1h"})
    console.log(token)
    res.send(token);
})

function validateUser(user){
    const schema = Joi.object({
        email: Joi.string().email(),
        password: Joi.string().min(4)
    })
    return schema.validate(user);
}


module.exports = router;