const express = require('express');
const UserDomain = require('../../../domains/user.domain')
const router = express.Router();

class userController{

    static async get(req,res){
        const userDomain = new UserDomain();
        userDomain.getUsers(req,res);
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

    static async restore(req,res){
        const userDomain = new UserDomain();
        userDomain.restoreUser(req,res);
    }

}

// get all users
router.get('/',userController.get);

// add user
router.post('/',userController.add);

// restore/unblock user
router.put('/:id/restore', userController.restore);

// update user info by admin
router.put('/:id',userController.edit);

// remove/block user
router.delete('/:id',userController.delete);

// ger particular user
router.get('/:id',userController.getById);


module.exports = router