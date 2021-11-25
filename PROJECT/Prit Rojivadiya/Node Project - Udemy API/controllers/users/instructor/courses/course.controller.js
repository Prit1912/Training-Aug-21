const express = require('express');
const CourseDomain = require('../../../../domains/course.domain')
const router = express.Router({ mergeParams: true });
const multer = require('multer');
const path = require('path');

// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, './public/images');
//     },
//     filename: (req, file, cb) => {
//       console.log(file);
//       var filetype = '';
//       if(file.mimetype === 'image/gif') {
//         filetype = 'gif';
//       }
//       if(file.mimetype === 'image/png') {
//         filetype = 'png';
//       }
//       if(file.mimetype === 'image/jpeg') {
//         filetype = 'jpg';
//       }
//       cb(null, 'image-' + Date.now() + '.' + filetype);
//     }
//   });
//   var upload = multer({storage: storage});


// // Video Upload

// const videoStorage = multer.diskStorage({
//   destination: './public/videos/', // Destination to store video 
//   filename: (req, file1, cb) => {
//       cb(null, file1.fieldname + '_' + Date.now() 
//        + path.extname(file1.originalname))
//   }
// });

// const videoUpload = multer({
//   storage: videoStorage,
//   limits: {
//   fileSize: 100000000 // 10000000 Bytes = 10 MB
//   },
//   fileFilter(req, file1, cb) {
//     // upload only mp4 and mkv format
//     if (!file1.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) { 
//        return cb(new Error('Please upload a video'))
//     }
//     cb(undefined, true)
//  }
// })

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      if(file.fieldname == 'videos'){
        cb(null,'./public/videos/')
      }else if(file.fieldname == 'image'){
        cb(null, './public/images/');
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
          cb(new Error('file type is invalid'))
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
            cb(new Error('file type is invalid'))
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
}

// get courses
router.get('/',courseController.getInstCourses);

// add course
// router.post('/',/*upload.single('courseImage'),*/ videoUpload.array('video',4),courseController.addInstCourse)
router.post('/', upload.fields([{name: 'image',maxCount: 1},{name: 'videos',maxCount: 8}]),courseController.addInstCourse)

// check who buy the course
router.get('/:id/summary', courseController.buyersSummary)

// get course by id
router.get('/:id',courseController.getInstCourseById);

// update specific course by id
router.put('/:id',courseController.updateInstCourse)

// remove specific course by id
router.delete('/:id',courseController.deleteInstCourse)

module.exports = router