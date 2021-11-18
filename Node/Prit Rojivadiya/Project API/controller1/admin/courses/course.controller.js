const express = require('express');
const CourseDomain = require('../../../domains/course.domain')
const router = express.Router({ mergeParams: true });

class courseController{

    static async getCoursesAdmin(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.showCoursesAdmin(req,res);
    }

    static async courseSummary(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.showCourseSummary(req,res);
    }

    static async oneCourseSummary(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.showOneCourseSummary(req,res);
    }

    static async getBuyers(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.showBuyers(req,res);
    }

    static async addInstCourse(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.addInstructorCourses(req,res);
    }

    static async getCourseByIdAdmin(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.showCourseByIdAdmin(req,res);
    }

    static async updateCourseByAdmin(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.updateCourseByAdmin(req,res);
    }

    static async deleteCourseAdmin(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.deleteCourseAdmin(req,res);
    }

    static async buyersSummary(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.buyerSummary(req,res);
    }
}

// get courses
router.get('/',courseController.getCoursesAdmin);

// summary of courses
router.get('/summary',courseController.courseSummary)

// summary of course
router.get('/summary/:id',courseController.oneCourseSummary)

// summary of course with user
router.get('/summary/:id/buyers',courseController.getBuyers)

// get course by id
router.get('/:id',courseController.getCourseByIdAdmin);

// update specific course by id
router.put('/:id',courseController.updateCourseByAdmin)

// remove specific course by id
router.delete('/:id',courseController.deleteCourseAdmin)

module.exports = router