const express = require('express');
const UserDomain = require('../../../domains/user.domain')
const router = express.Router();

class userController{

    static async get(req,res){
        const userDomain = new UserDomain();
        userDomain.getUsers(req,res);
    }

    static async getMyInfo(req,res){
        const userDomain = new UserDomain();
        userDomain.getInfo(req,res);
    }

    static async getById(req,res){
        const userDomain = new UserDomain();
        userDomain.getUser(req,res);
    }

    static async add(req,res){
        const userDomain = new UserDomain();
        userDomain.addUser(req,res);
    }

    static async edit(req,res){
        const userDomain = new UserDomain();
        userDomain.editUser(req,res);
    }   

    static async delete(req,res){
        const userDomain = new UserDomain();
        userDomain.deleteUser(req,res);
    }

    static async updateProfile(req,res){
        const userDomain = new UserDomain();
        userDomain.updateMyProfile(req,res);
    }

    static async getCourses(req,res){
        const userDomain = new UserDomain();
        userDomain.getMyCourses(req,res);
    }

    static async getList(req,res){
        const userDomain = new UserDomain();
        userDomain.getFullList(req,res);
    }

    static async myCart(req,res){
        const userDomain = new UserDomain();
        userDomain.getMyCart(req,res);
    }

}

// get all users
router.get('/',userController.get);

// add user
router.post('/',userController.add);

// update user info by admin
router.put('/:id',userController.edit);

// remove user
router.delete('/:id',userController.delete);

// ger particular user
router.get('/:id',userController.getById);


module.exports = router