const express = require('express');
const UserDomain = require('../domains/user.domain')
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

}

router.get('/',userController.get);
router.post('/',userController.add);
router.put('/:id',userController.edit);
router.delete('/:id',userController.delete);
router.get('/:id',userController.getById);

module.exports = router