const express = require('express');
const UserDomain = require('../domains/user.domain')
const router = express.Router();
const auth = require('../middleware/auth.middleware')
const adminAuth = require('../middleware/admin.middleware')
const instAuth = require('../middleware/instructor.middleware')

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

}

// get all users
router.get('/',[auth,adminAuth],userController.get);

// get personal info
router.get('/me',auth,userController.getMyInfo);

// update profile
router.put('/me/update',auth,userController.updateProfile) 

// see uploaded courses
router.get('/me/courses', [auth, instAuth], userController.getCourses)

// add user
router.post('/',userController.add);

// update user info
router.put('/:id',[auth,adminAuth],userController.edit);

// remove user
router.delete('/:id',[auth,adminAuth],userController.delete);

// ger particular user
router.get('/:id',[auth,adminAuth],userController.getById);

module.exports = router