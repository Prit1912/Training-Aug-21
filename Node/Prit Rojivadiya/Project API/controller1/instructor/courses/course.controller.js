const express = require('express');
const CourseDomain = require('../../../domains/course.domain')
const router = express.Router({ mergeParams: true });

class courseController{

    static async getInstCourses(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getInstructorCourses(req,res);
    }

    static async addInstCourse(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.addInstructorCourses(req,res);
    }

    static async getInstCourseById(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getInstructorCourse(req,res);
    }

    static async updateInstCourse(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.updateInstructorCourse(req,res);
    }

    static async deleteInstCourse(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.deleteInstructorCourse(req,res);
    }

    static async buyersSummary(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.buyerSummary(req,res);
    }
}

// get courses
router.get('/',courseController.getInstCourses);

// add course
router.post('/',courseController.addInstCourse)

// check who buy the course
router.get('/:id/summary', courseController.buyersSummary)

// get course by id
router.get('/:id',courseController.getInstCourseById);

// update specific course by id
router.put('/:id',courseController.updateInstCourse)

// remove specific course by id
router.delete('/:id',courseController.deleteInstCourse)

module.exports = router