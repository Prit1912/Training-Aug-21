const express = require('express');
const router = express.Router();
const CourseDomain = require('../../domains/course.domain');
const {auth,permit} = require('../../middleware/auth.middleware')
const role = require('../../config/roles')

class courseController{
    
    static async get(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getAllCourses(req,res);
    }

    static async getById(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getCategorywiseCourse(req,res);
    }

    static async getBySubId(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getSubCategorywiseCourse(req,res);
    }

    static async getByCourseId(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getCourseById(req,res);
    }

    static async addToCart(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.addCourseToCart(req,res);
    }

    static async addToWishlist(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.addCourseToWishlist(req,res);
    }

}

// get all course
router.get('/',courseController.get)

// get categorywise course
router.get('/courses/:cId', courseController.getById)

// get subcategorywise courses
router.get('/courses/:cId/:sId', courseController.getBySubId)

// get one course
router.get('/courses/:cId/:sId/:courseId', courseController.getByCourseId)

// add to wishlist
router.post('/courses/:cId/:courseId/addtowishlist', [auth, permit(role.user)], courseController.addToWishlist);

// add to wishlist
router.post('/courses/:cId/:sId/:courseId/addtowishlist', [auth, permit(role.user)], courseController.addToWishlist);

// add to cart
router.post('/courses/:cId/:courseId/addtocart', [auth, permit(role.user)], courseController.addToCart);

// add to cart
router.post('/courses/:cId/:sId/:courseId/addtocart', [auth, permit(role.user)], courseController.addToCart);

module.exports = router;