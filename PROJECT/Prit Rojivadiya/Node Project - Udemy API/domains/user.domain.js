const {users, validateUser} = require('../models/user.model')
const config = require('../config/config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const Joi = require('joi');
const nodemailer = require('nodemailer');

class UserDomain{

    // sign up
    async signupUser(req,res){
    
        const c = req.body
        const { error } = validateUser(c);
        if(error) return res.status(500).send(error.details[0].message)
    
        const usr = await users.findOne({email: c.email})
        if(usr) return res.status(400).send('email already registered')
    
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
                expiresIn: "7d"
            })
            console.log(token)
            res.header('x-access-token',token).send(result);
        } catch (e) {
            res.send(e.message);
        }
    }


    // signin user
    async signinUser(req,res){
        const c = req.body
        console.log(c)

        const user = await users.findOne({email: c.email})
        if(!user) return res.status(400).send('invalid user or password')
        
        if(user.isActive == false){
            return res.status(403).send('acount cannot be accessed')
        }
        
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).send('invalid user or password')
    
        const token = jwt.sign({_id: user._id, role: user.role},config.secretKey,{
            algorithm: config.algorithm,
            expiresIn: "7d"
        })
        console.log(token)
        res.json({
            token,
            user,
            expiresIn: "7d"
        });
    }

    // validating email and pasword befor login process
    async validateUser(user){
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().min(4)
        })
        return schema.validate(user);
    }

    // fotgot password
    async forgotUserPassword(req,res){
        const userEmail = req.body.email;
        const user = await users.findOne({email: userEmail});
        if(!user) return res.status(404).send('user not found');
    
        const token = jwt.sign({email: userEmail},config.secretKey,{expiresIn: "15m"})
        const link = `http://${process.env.Host}:${process.env.Port}/reset-password/${token}`;
    
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'pritrojivadiya@gmail.com',
              pass: 'cywhubqmgvodibji'
            }
          });
          
          var mailOptions = {
            from: 'pritrojivadiya@gmail.com',
            // to: 'dilipkumavat1807@gmail.com',
            to: userEmail,
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
    }



    // reset password
    async resetUserPassword(req,res){
        const token = req.params.token;
        console.log(req.params)
        console.log(req.body)
        try{
        const decoded = jwt.verify(token,config.secretKey);
        req.user = decoded;
        }catch(err){
            console.log(err)
            return res.send(err)
        }
        
        const salt = await bcrypt.genSalt(10);
        let newPassword = await bcrypt.hash(req.body.password,salt)
        try{
            let user = await users.findOneAndUpdate({email: req.user.email},{
                $set: {password: newPassword}
            },{new: true});
            res.send(user);
        }catch(err){
            res.send('error occured');
        }
    }


    // get profile
    async getProfile(req,res){
        const user = await users.findOne({_id: req.user._id}).select({password: 0});
        res.send(user);
    }

    // update profile
    async updateProfile(req,res){
        
        const { error } = validateUser(req.body);
        if(error) return res.status(500).send(error.details[0].message)

        const user = await users.findOneAndUpdate({_id: req.user._id},{
            $set: {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
            }
        },{new:true})
        try{
            const result = await user.save();
            res.send(result);
        }catch(err){
            res.send(err);
        }
    }

    // get all users
    async getUsers(req,res){
        const allUser = await users.find();
        if(allUser.length == 0) return res.status(404).send('There are no users added yet');
        res.send(allUser);
    }

     // get user by id
     async getUser(req,res){
        const user = await users.findById(req.params.id);
        if(!user) return res.status(404).send('user not found');
        res.send(user)
    }

    // add user
    async addUser(req,res){
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

    // edit user
    async editUser(req,res){

        // const { error } = validateUser(req.body);
        // if(error) return res.status(500).send(error.details[0].message)

        const id = req.params.id;
        const datas = await users.find();
        const c = datas.find((e)=>{
            return e._id == id;
        })

        if(!c) return res.status(404).send('user not found');

        try{
            const user = await users.findByIdAndUpdate(id, {
                $set: req.body
                    // {
                    // name: req.body.name,
                    // email: req.body.email,
                    // phone: req.body.phone,
                    // isActive: req.body.isActive,
                    // role: req.body.role
                    // }
            },{new: true})
            res.send(user);
        }catch(e){
            console.log(e);
        } 
    }
    
     // delete user
     async deleteUser(req,res){
        const id = req.params.id;
        const user = await users.findById(id);
        console.log(user.isActive);
        if(!user) return res.status(404).send('user not found')
        else{
            user.isActive = false;
            await user.save();
            res.send('deleted successfully');
        }
    }

    // restore user
    async restoreUser(req,res){
        const id = req.params.id;
        const user = await users.findById(id);
        if(!user) return res.status(404).send('user not found')
        else{
            user.isActive = true;
            await user.save();
            res.send('restored successfully');
        }
    }

}

module.exports = UserDomain;