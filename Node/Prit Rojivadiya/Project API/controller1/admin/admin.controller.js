const express = require('express');
const router = express.Router();
const UserDomain = require('../../domains/user.domain')
const auth = require('../../middleware/auth.middleware')
const adminAuth = require('../../middleware/admin.middleware')
const categoryRoute = require('./category/category.controller')
const userRoute = require('./users/user.controller')
const courseRoute = require('./courses/course.controller')

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

router.use([auth,adminAuth]);

router.use('/category',categoryRoute)
router.use('/users',userRoute)
router.use('/courses',courseRoute)

router.get('/',(req,res)=>{
    res.send('admin home page')
})

// see profile
router.get('/profile',userController.getMyInfo)

// update profile
router.put('/profile/update',userController.updateProfile)

module.exports = router;