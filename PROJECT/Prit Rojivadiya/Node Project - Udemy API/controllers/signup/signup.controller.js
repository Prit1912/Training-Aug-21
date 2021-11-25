const express = require('express');
const config = require('../../config/config');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const {users, validateUser} = require('../../models/user.model')
const router = express.Router();

if(!config.secretKey){
    console.error('jwtPrivateKey is not defined')
}

// add user
router.post('/',async (req,res)=>{
    const c = req.body
        const { error } = validateUser(c);
        if(error) return res.status(500).send(error.details[0].message)

        const usr = await users.findOne({email: c.email})
        if(usr) return res.status(400).send('user already registered')

        const allUser = await users.find().sort({_id:-1});
        let id;
        if(allUser.length == 0){
            id = 1;
        }else{
            id = allUser[0]._id + 1
        }
        let user = new users({
            _id: id,
            name: c.name,
            email: c.email,
            phone: c.phone,
            password: c.password,
            role: c.role
        })

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password,salt)

        try {
            const result = await user.save();
            const token = jwt.sign({_id: user._id, role: user.role},config.secretKey,{
                algorithm: config.algorithm,
                expiresIn: "1h"
            })
            console.log(token)
            res.header('x-access-token',token).send(result);
        } catch (e) {
            res.send(e.message);
        }
    }
);


module.exports = router