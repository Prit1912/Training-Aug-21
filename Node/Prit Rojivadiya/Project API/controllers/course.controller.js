const express = require('express');
const CourseDomain = require('../domains/course.domain')
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const adminAuth = require('../middleware/admin.middleware')
const instAuth = require('../middleware/instructor.middleware')

class courseController{

    static async get(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getCourses(req,res);
    }

    static async getById(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getCourse(req,res);
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
}

// get all courses
router.get('/',courseController.get);

// add course
router.post('/',[auth,instAuth],courseController.add);

// get categorywise courses
router.get('/search',courseController.getbyCategory)

// update course
router.put('/:id',[auth,instAuth],courseController.edit);

// remove course
router.delete('/:id',[auth,adminAuth],courseController.delete);

// get course by id
router.get('/:id',courseController.getById);

// get all courses summary
router.get('/all/summary',[auth,adminAuth],courseController.fullCourses);

// get particular course summary
router.get('/:id/summary',[auth,adminAuth],courseController.oneCourseSummary);


module.exports = router