const express = require('express');
const router = express.Router();
const CourseDomain = require('../../domains/course.domain');
const {auth,permit} = require('../../middleware/auth.middleware')
const role = require('../../config/roles')
const instCoursesrouter = require('./instructorCourses/instCourses.controller');

class courseController{
    
    static async get(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getAllCourses(req,res);
    }

    static async getById(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getCategorywiseCourse(req,res);
    }

    static async sortBy(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.sortCourses(req,res);
    }

    static async filter(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.filterCourses(req,res);
    }

    static async getBySubId(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getSubCategorywiseCourse(req,res);
    }

    static async sortBySub(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.sortSubcategoryCourses(req,res);
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

router.use('/inst-courses',instCoursesrouter)

// get all course
router.get('/',courseController.get)

// get categorywise course
router.get('/:cId', courseController.getById)

// sort by name / price / pouplarity
router.get('/:cId/sort', courseController.sortBy)

// filter by price
router.get('/:cId/filter',courseController.filter)

// get subcategorywise courses
router.get('/:cId/:sId', courseController.getBySubId)

// sorting in subcategory of courses
router.get('/:cId/:sId/sort', courseController.sortBySub)

// get one course
router.get('/:cId/:sId/:courseId', courseController.getByCourseId)

// add to wishlist
router.post('/:courseId/addtowishlist', [auth, permit(role.user)], courseController.addToWishlist);

// add to cart
router.post('/:courseId/addtocart', [auth, permit(role.user)], courseController.addToCart);


module.exports = router;