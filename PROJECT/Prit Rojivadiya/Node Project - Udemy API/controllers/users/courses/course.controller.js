const express = require('express');
const CourseDomain = require('../../../domains/course.domain')
const router = express.Router({ mergeParams: true });
const {auth,permit} = require('../../../middleware/auth.middleware')
const role = require('../../../config/roles')

class courseController{

    static async get(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getEnrolledCourses(req,res);
    }

    static async getById(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getEnrolledCourseById(req,res);
    }

    static async setVideoProgress(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.setVideoProgress(req,res);
    }

    static async getProgress(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.getVideoProgress(req,res);
    }

    static async update(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.updateProgress(req,res);
    }

    static async rate(req,res){
        const courseDomain = new CourseDomain();
        courseDomain.rateCourse(req,res);
    }
}

router.use([auth,permit(role.user)])

// get enrolled courses
router.get('/',courseController.get);

// get course by id
router.get('/:id',courseController.getById);

// get video progress of course
router.get('/:id/getProgress', courseController.getProgress)

// set video progress of course
router.post('/:id/setProgress', courseController.setVideoProgress)

// update course video progress of course
router.put('/:id',courseController.update)

// rate course
router.post('/:id/review',courseController.rate);

module.exports = router