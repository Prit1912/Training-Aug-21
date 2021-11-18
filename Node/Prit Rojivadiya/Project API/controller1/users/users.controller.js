const express = require('express');
const UserDomain = require('../../domains/user.domain')
const router = express.Router();

class usersController{

    static async add(req,res){
        const userDomain = new UserDomain();
        userDomain.addUser(req,res);
    }

}

// add user
router.post('/',usersController.add);


module.exports = router