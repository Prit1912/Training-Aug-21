const {users, validateUser} = require('../models/user.model')
const config = require('../config/config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

class UserDomain{

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

        const { error } = validateUser(req.body);
        if(error) return res.status(500).send(error.details[0].message)

        const id = req.params.id;
        const datas = await users.find();
        const c = datas.find((e)=>{
            return e._id == id;
        })

        if(!c) return res.status(404).send('user not found');

        try{
            const user = await users.findByIdAndUpdate(id, {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                    isActive: req.body.isActive
                }
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

}

module.exports = UserDomain;