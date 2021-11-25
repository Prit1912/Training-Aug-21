const express = require('express');
const CourseDomain = require('../../../../domains/course.domain')
const router = express.Router({ mergeParams: true });

class courseController{

    static async get(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getEnrolledCourses(req,res);
    }

    static async getById(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getEnrolledCourseById(req,res);
    }
}

// get enrolled courses
router.get('/',courseController.get);

// get course by id
router.get('/:id',courseController.getById);

module.exports = router