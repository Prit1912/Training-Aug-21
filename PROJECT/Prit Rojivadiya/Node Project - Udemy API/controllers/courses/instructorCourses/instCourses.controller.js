const express = require('express');
const CourseDomain = require('../../../domains/course.domain')
const router = express.Router({ mergeParams: true });
const multer = require('multer');
const path = require('path');
const { auth,permit } = require('../../../middleware/auth.middleware');
const role = require('../../../config/roles')
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      if(file.fieldname == 'videos'){
        cb(null,'./public/videos/')
      }else if(file.fieldname == 'image'){
        cb(null, './public/images/');
      } else if(file.fieldname == "resources"){
        cb(null, "./public/resources/");
      }
    },
    filename: (req, file, cb) => {
      console.log(file);
      var filetype = '';
      if(file.fieldname == 'videos'){
        if(file.mimetype === 'video/mp4') {
          filetype = 'mp4';
          cb(null,Date.now() + '.' + filetype);
        }else{
          cb(new Error('file type is invalid'),false)
        }
      }else if(file.fieldname == 'image'){
        if(file.mimetype === 'image/png') {
          filetype = 'png';
          cb(null,Date.now() + '.' + filetype);
        }
        else if(file.mimetype === 'image/jpeg') {
          filetype = 'jpg';
          cb(null,Date.now() + '.' + filetype);
        }else{
            cb(new Error('file type is invalid'),false)
        }
      } else if (file.fieldname == "resources") {
        if (file.mimetype === "application/zip") {
          filetype = "zip";
          cb(null, Date.now() + "." + filetype);
        } else {
          cb(new Error("file type is invalid"), false);
        }
      }
    }
  });
  var upload = multer({storage: storage});


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

    static async seeReview(req,res){
      const courseDomain = new CourseDomain();
      courseDomain.seeCourseReview(req,res);
    }
}

router.use(auth,permit(role.instructor))

// get courses
router.get('/',courseController.getInstCourses);

// add course
// router.post('/',/*upload.single('courseImage'),*/ videoUpload.array('video',4),courseController.addInstCourse)
router.post('/', upload.fields([{name: 'image',maxCount: 1},{name: 'videos',maxCount: 8}, { name: "resources", maxCount: 1 }]),courseController.addInstCourse)

// check who buy the course
router.get('/:id/summary', courseController.buyersSummary)

// see reviews
router.get('/:id/reviews', courseController.seeReview);

// get course by id
router.get('/:id',courseController.getInstCourseById);

// update specific course by id
router.put('/:id',courseController.updateInstCourse)

// remove specific course by id
router.delete('/:id',courseController.deleteInstCourse)

module.exports = router