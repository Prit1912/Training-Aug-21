const express = require('express');
const UserDomain = require('../../domains/user.domain')
const router = express.Router();
const {auth,permit} = require('../../middleware/auth.middleware')
const role = require('../../config/roles')
const cartRouter = require('./cart/cart.controller');
const courseRouter = require('./courses/course.controller');
const wishlistRouter = require('./wishlist/wishlist.controller');

class usersController{

    static async signup(req,res){
        const userDomain = new UserDomain()
        userDomain.signupUser(req,res);
    }

    static async signin(req,res){
        const userDomain = new UserDomain()
        userDomain.signinUser(req,res);
    }

    static async forgotPassword(req,res){
        const userDomain = new UserDomain()
        userDomain.forgotUserPassword(req,res);
    }

    static async resetPassword(req,res){
        const userDomain = new UserDomain()
        userDomain.resetUserPassword(req,res);
    }

    static async profile(req,res){
        const userDomain = new UserDomain()
        userDomain.getProfile(req,res);
    }

    static async update(req,res){
        const userDomain = new UserDomain()
        userDomain.updateProfile(req,res);
    }

}

router.use('/cart',cartRouter);
router.use('/courses', courseRouter);
router.use('/wishlist', wishlistRouter);


// sign up user
router.post('/signup', usersController.signup);

// sign in user
router.post('/login', usersController.signin);
 
// forgot password
router.post('/forgot-password', usersController.forgotPassword);

// reset password
router.post('/reset-password/:token', usersController.resetPassword);

// authenticate and role base authorize
router.use([auth,permit(role.user,role.instructor,role.admin)])

// render page based on user role
router.get('/',(req,res)=>{
    res.send(req.user)
})

// display profile
router.get('/profile',usersController.profile)

// update profile
router.put('/profile/update',usersController.update)

module.exports = router