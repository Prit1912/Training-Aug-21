const express = require('express');
const CourseDomain = require('../domains/course.domain')
const router = express.Router();

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

}

router.get('/',courseController.get);
router.post('/',courseController.add);
router.put('/:id',courseController.edit);
router.delete('/:id',courseController.delete);
router.get('/:id',courseController.getById);
router.get('/all/summary',courseController.fullCourses);
router.get('/:id/summary',courseController.oneCourseSummary);

module.exports = router