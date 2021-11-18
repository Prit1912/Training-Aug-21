const express = require('express');
const router = express.Router();
const UserDomain = require('../../domains/user.domain')
const auth = require('../../middleware/auth.middleware')
const instAuth = require('../../middleware/instructor.middleware')
const instCourse = require('./courses/course.controller')

class userController{

    static async getMyInfo(req,res){
        const userDomain = new UserDomain();
        userDomain.getInfo(req,res);
    }

    static async updateProfile(req,res){
        const userDomain = new UserDomain();
        userDomain.updateMyProfile(req,res);
    }

}

router.use([auth,instAuth]);
router.use('/courses',instCourse)

router.get('/',(req,res)=>{
    res.send('instructor home page')
})

// see profile
router.get('/profile',userController.getMyInfo)

// update profile
router.put('/profile/update',userController.updateProfile)

module.exports = router;