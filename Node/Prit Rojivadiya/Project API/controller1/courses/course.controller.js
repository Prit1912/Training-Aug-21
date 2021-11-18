const express = require('express');
const CourseDomain = require('../../domains/course.domain')
const router = express.Router({ mergeParams: true });
const auth = require('../../middleware/auth.middleware')
const userAuth = require('../../middleware/user.middleware')


class courseController{

    static async get(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getAllCourses(req,res);
    }

    static async getById(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getCourseById(req,res);
    }

    static async add(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.addCourse(req,res);
    }

    static async edit(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.editCourse(req,res);
    }   

    static async delete(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.deleteCourse(req,res);
    }

    static async fullCourses(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.coursesSummary(req,res);
    }

    static async oneCourseSummary(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.courseSummary(req,res);
    }

    static async getbyCategory(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getCourseByCategory(req,res);
    }

    static async addToCart(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.addCourseToCart(req,res);
    }
}

// get all courses
router.get('/',courseController.get);

// get categorywise courses
router.get('/search',courseController.getbyCategory)

// get course by id
router.get('/:id',courseController.getById);

// add course to cart
router.post('/:courseid/addtocart',[auth,userAuth],courseController.addToCart);

module.exports = router