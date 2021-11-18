const { users, validateUser } = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const {courses} = require('../models/course.model')
const {cartitems} = require('../models/cart.model')

class UserDomain{

    // get all users
    async getUsers(req,res){
        const allUser = await users.find();
        if(allUser.length == 0) return res.status(404).send('There are no users added yet');
        res.send(allUser);
    }

    // get current user info
    async getInfo(req,res){
        console.log(req.user)
        const user = await users.findById(req.user._id).select('-password');
        console.log(req.user)
        console.log(user);
        res.send(user);
    }

    // get user by id
    async getUser(req,res){
        const user = await users.findById(req.params.id);
        if(!user) return res.status(404).send('user not found');
        res.send(user)
    }

    // get instructor's uploaded courses
    async getMyCourses(req,res){
        const user = await users.findById(req.user._id).select('_id');
        const c = await courses.find({instructor: user._id});
        console.log(c);
        res.send(c)
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
            const token = jwt.sign({_id: user._id, role: user.role},config.get("jwtPrivateKey"),{expiresIn: "1h"})
            console.log(token)
            // const token = users.generateAuthToken();
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


    // update personal info
    async updateMyProfile(req,res){

        const { error } = validateUser(req.body);
        if(error) return res.status(500).send(error.details[0].message)

        try{
            const user = await users.findByIdAndUpdate(req.user._id, {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone
                }
            },{new: true}).select('-password')
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

     // get list of user/instructor/admin
     async getFullList(req,res){
       const data = req.query.usertype;
       const datas = await users.find({role:data});
       res.send(datas);
    }

     // list of cart item of user
     async getMyCart(req,res){
        const id = req.user._id;
        const items = await cartitems.findOne({userId: id})
            .select('courseId -_id')
            .populate('courseId','name price -_id')
        res.send(items);
     }

}

module.exports = UserDomain;