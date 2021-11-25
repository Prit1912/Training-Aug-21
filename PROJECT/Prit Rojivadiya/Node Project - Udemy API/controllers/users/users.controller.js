const express = require('express');
const UserDomain = require('../../domains/user.domain')
const router = express.Router();
const {auth,permit} = require('../../middleware/auth.middleware')
const role = require('../../config/roles')
const userRoute = require('./user/user.controller')
const instRoute = require('./instructor/instructor.controller');
const adminRoute = require('./admin/admin.controller')

class usersController{

    static async profile(req,res){
        const userDomain = new UserDomain()
        userDomain.getProfile(req,res);
    }

    static async update(req,res){
        const userDomain = new UserDomain()
        userDomain.updateProfile(req,res);
    }

}


router.use('/user',userRoute);
router.use('/instructor',instRoute);
router.use('/admin',adminRoute);

router.use([auth,permit([role.user,role.instructor,role.admin])])

// render page based on user role
router.get('/',(req,res)=>{
    res.send(req.user.role);
})

// display profile
router.get('/profile',usersController.profile)

// update profile
router.put('/profile/update',usersController.update)

module.exports = router