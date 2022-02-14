const { courses, validateCourse } = require("../models/course.model");
const Joi = require("joi");
const { reviews, validateReview } = require("../models/review.model");
const { cartitems } = require("../models/cart.model");
const { purchases } = require("../models/purchase.model");
const { wishlistItems } = require("../models/wishlist.model");
// const path = require("path");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
require('dotenv').config();
// console.log(process.env)

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.cloud_api_key,
  api_secret: process.env.cloud_api_secret,
  secure: true,
});

// image upload
async function uploadToCloudinary(locaFilePath, instId) {
  var mainFolderName = "udemy";

  var filePathOnCloudinary =
    mainFolderName + `/instructor${instId}/images` + locaFilePath;

  return cloudinary.uploader
    .upload(locaFilePath, { public_id: filePathOnCloudinary })
    .then((result) => {
      fs.unlinkSync(locaFilePath);
      // fs.unlink(locaFilePath);

      return {
        message: "Success",
        url: result.url,
      };
    })
    .catch((error) => {
      console.log(error);
      fs.unlinkSync(locaFilePath);
      // fs.unlink(locaFilePath);
      return { message: "Fail" };
    });
}

// upload videos
async function uploadVideosToCloudinary(locaFilePath, instId) {
  var mainFolderName = "udemy";

  var filePathOnCloudinary =
    mainFolderName + `/instructor${instId}/videos` + locaFilePath;

  return cloudinary.uploader
    .upload(locaFilePath, {
      resource_type: "video",
      public_id: filePathOnCloudinary,
    })
    .then((result) => {
      fs.unlinkSync(locaFilePath);
      // fs.unlink(locaFilePath);

      return {
        message: "Success",
        url: result.url,
      };
    })
    .catch((error) => {
      console.log(error);
      fs.unlinkSync(locaFilePath);
      // fs.unlink(locaFilePath);
      return { message: "Fail" };
    });
}

// upload resources
async function uploadResourcesToCloudinary(locaFilePath, instId) {
  var mainFolderName = "udemy";

  var filePathOnCloudinary =
    mainFolderName + `/instructor${instId}/resources` + locaFilePath;

  return cloudinary.uploader
    .upload(locaFilePath, {
      resource_type: "raw",
      public_id: filePathOnCloudinary,
    })
    .then((result) => {
      fs.unlinkSync(locaFilePath);

      return {
        message: "Success",
        url: result.url,
      };
    })
    .catch((error) => {
      console.log(error);
      fs.unlinkSync(locaFilePath);
      return { message: "Fail" };
    });
}

class CourseDomain {
  // get all courses
  async getAllCourses(req, res) {
    // const course = await courses.find({ isActive: true }).select('name price courseImage rating');
    const course = await courses.find({ isActive: true }).select('-videos').populate('category').populate('subcategory').sort({rating: -1});
    if (course.length == 0) return res.send("no courses found");
    res.send(course);
  }

  // get categorywise course
  async getCategorywiseCourse(req, res) {
    const course = await courses.find({ category: req.params.cId, isActive: true }).select('-videos').populate('category').populate('subcategory');
    if (course.length == 0) return res.send("no course found");
    res.send(course);
  }

  // filter courses
  async filterCourses(req,res){
    let minPrice = req.query.min;
    let maxPrice = req.query.max;
    const course = await courses.find({});
    let newArr = course.filter((c)=>{
      return (c.price > minPrice && c.price < maxPrice);
    })
    if(newArr.length == 0){
      res.send('no courses found');
      return;
    }
    res.send(newArr);
  }

  // sort courses according to name, price, popularity
  async sortCourses(req, res) {
    let queryParam = req.query.sortby;
    if (queryParam == "name" || queryParam == "price") {
      const course = await courses
        .find({ category: req.params.cId })
        .sort(`${queryParam}`);
      res.send(course);
    } else if (queryParam == "rating") {
      const course = await courses
        .find({ category: req.params.cId })
        .sort(`-${queryParam}`);
      res.send(course);
    }
  }

  // get subcategorywise course
  async getSubCategorywiseCourse(req, res) {
    const course = await courses.find({
      category: req.params.cId,
      subcategory: req.params.sId,
      isActive: true
    }).select('-videos').populate('category').populate('subcategory');
    if (course.length == 0) return res.send("no courses found");
    res.send(course);
  }

  // sort courses of sub category
  async sortSubcategoryCourses(req, res) {
    let queryParam = req.query.sortby;
    if (queryParam == "name" || queryParam == "price") {
      const course = await courses
        .find({ category: req.params.cId, subcategory: req.params.sId })
        .sort(`${queryParam}`);
      res.send(course);
    } else if (queryParam == "rating") {
      const course = await courses
        .find({ category: req.params.cId, subcategory: req.params.sId })
        .sort(`-${queryParam}`);
      res.send(course);
    }
  }

  // get course by id
  async getCourseById(req, res) {
    const course = await courses.findOne({
      _id: req.params.courseId,
      // category: req.params.cId,
      // subcategory: req.params.sId,
    }).populate('instructor', '-password -phone');
    if (!course) return res.status(404).send("course not found");
    res.send(course);
  }

  // add to cart
  async addCourseToCart(req, res) {
    const id = req.user._id;
    let item = await cartitems.find({ user: id });
    if (item.length == 0) {
      const ci = new cartitems({
        user: id,
        courses: req.params.courseId,
      });
      try {
        const result = await ci.save();
        res.send(result);
      } catch (e) {
        res.send(e.message);
      }
    } else {
      try {
        const b = await cartitems.findOneAndUpdate(
          { user: id },
          {
            $addToSet: { courses: req.params.courseId },
          },
          { new: true }
        );
        await b.save();
        res.send(b);
      } catch (err) {
        console.log(err.message);
        res.status(500).send("something wrong");
      }
    }
  }

  // add course to wishlist
  async addCourseToWishlist(req, res) {
    const userid = req.user._id;
    const item = await wishlistItems.find({ user: userid });
    if (item.length == 0) {
      const wi = new wishlistItems({
        user: userid,
        courses: req.params.courseId,
      });
      try {
        const result = await wi.save();
        res.send(result);
      } catch (err) {
        res.send(err.message);
      }
    } else {
      try {
        const b = await wishlistItems.findOneAndUpdate(
          { user: userid },
          {
            $addToSet: { courses: req.params.courseId },
          },
          { new: true }
        );
        await b.save();
        res.send(b);
      } catch (err) {
        console.log(err.message);
        res.status(500).send("something wrong");
      }
    }
  }

  // get enrolled courses by user
  async getEnrolledCourses(req, res) {
    const course = await purchases
      .find({ user: req.user._id })
      .select("courses")
      .populate("courses");
    if (course.length == 0) {
      return res.status(500).send("not enrolled in any course");
    }
    res.send(course);
  }

  // get enrolled course by id
  async getEnrolledCourseById(req, res) {
    const course = await purchases
      .find({ user: req.user._id ,courses: req.params.id })
      .populate("courses")
      .select({courses: req.params.id})
    if (course.length == 0) return res.send("you have not enrolled in course");
    res.send(course);
  }

  // update video watched progress
  async updateProgress(req,res){
    console.log(req.body);
    console.log(req.params.id)
    const course = await purchases
      .find({ user: req.user._id ,courses: req.params.id })
      .populate("courses")
      .select({courses: req.params.id})
      course[0].courses[0].videos = req.body;
      res.send(course)
  }

  // rate & give review course
  async rateCourse(req, res) {
    let r;
    try{
      r = await reviews.findOne({
        user: req.user._id,
        course: req.params.id,
      });
    }catch(err){
      console.log(err)
    }
    if (r) {
      return res.status(500).send("already reviewed");
    }

    let {error} = validateReview(req.body);
    if(error){
      return res.send(error.details[0].message);
    }

    const courseID = req.params.id;
    const userID = req.user._id;
    const review = new reviews({
      user: userID,
      course: courseID,
      rating: req.body.rating,
      review: req.body.review,
    });

    const course = await courses.findOne({ _id: courseID });
    let rate;
    if (course.rating == 0) {
      rate = req.body.rating;
    } else {
      rate = (course.rating + req.body.rating) / 2;
    }
    const rateCourse = await courses.findOneAndUpdate(
      { _id: courseID },
      {
        $set: {
          rating: rate.toFixed(2),
        },
      }
    );

    try {
      const result = await review.save();
      res.send(result);
    } catch (err) {
      res.send(err.message);
    }
  }

  // add instructor course
  /*async addInstructorCourses(req,res){
        // console.log(req.files);
        // console.log(`${req.files['image'][0].path}`);
        let videosPaths = [];
        const videos = req.files['videos'];
        for(let i = 0;i<videos.length;i++){
            videosPaths.push(videos[i].path);
        }

        if(req.body.isPaid === "false"){
            if(req.body.price){
                return res.status(500).send('price is not required');
            }
        }else{
            if(req.body.price === undefined){
                return res.status(500).send('price is required');
            }
        }

        const c = await courses.find().sort({_id:-1});
        let id;
        if(c.length == 0){
            id = 1;
        }else{
            id = c[0]._id + 1
        }

        if(req.body.isPaid){
            let course = new courses({
                _id: id,
                name: req.body.name,
                description: req.body.description,
                category: req.body.category,
                courseImage: req.files['image'][0].path,
                videos: videosPaths,
                subcategory: req.body.subcategory,
                isPaid: req.body.isPaid,
                price: req.body.price,
                instructor: req.user._id
            })
            try {
                const result = await course.save();
                res.send(result);
              } catch (e) {
                res.send(e.message);
              } 
        }else{
            let course = new courses({
                _id: id,
                name: req.body.name,
                description: req.body.description,
                category: req.body.category,
                courseImage: req.files['image'][0].path,
                videos: videosPaths,
                subcategory: req.body.subcategory,
                isPaid: req.body.isPaid,
                instructor: req.user._id
            })
            try {
                const result = await course.save();
                res.send(result);
              } catch (e) {
                res.send(e.message);
              } 
        }  
    }*/

  // add insturctor course
  async addInstructorCourses(req, res) {
    console.log(req.body);
    console.log(req.files);
    // console.log(`${req.files['image'][0].path}`);

    if (req.body.isPaid === "false" ) {
      if (req.body.price) {
        return res.status(500).send("price is not required");
      }
    } else {
      // if (req.body.price === undefined) {
      if (!req.body.price) {
        return res.status(500).send("price is required");
      }
    }

    // let {error} = validateCourse(req.body)
    // if(error){
    //   return res.status(500).send(error.details[0].message)
    // }

    const c = await courses.find().sort({ _id: -1 });
    let id;
    if (c.length == 0) {
      id = 1;
    } else {
      id = c[0]._id + 1;
    }

    if(!req.files["image"]){
      res.status(500).send('image is required');
      return;
    }else if(!req.files["videos"]){
      return res.status(500).send('videos are required');
    }else if(!req.files["resources"]){
      return res.status(500).send('resource file is required');
    }

    var locaFilePath = req.files["image"][0].path;
    console.log(locaFilePath);
    const newPath = locaFilePath.replace(/\\/g, "/");
    var imgresult = await uploadToCloudinary(newPath, req.user._id);
    console.log(imgresult);

    var videoUrlList = [];

    for (var i = 0; i < req.files["videos"].length; i++) {
      var locaFilePath = req.files["videos"][i].path;
      var orgName = req.files["videos"][i].originalname;
      console.log(locaFilePath);
      const newPath = locaFilePath.replace(/\\/g, "/");
      console.log(newPath);
      var result = await uploadVideosToCloudinary(newPath, req.user._id);
      console.log(result);
      videoUrlList.push({
        name: orgName,
        url: result.url,
      });
      console.log(videoUrlList);
    }



    var resourcePath = req.files["resources"][0].path;
    console.log(resourcePath);
    const newResourcePath = resourcePath.replace(/\\/g, "/");
    var resourceResult = await uploadResourcesToCloudinary(
      newResourcePath,
      req.user._id
    );
    console.log(resourceResult);

    if (req.body.isPaid) {
      let course = new courses({
        _id: id,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        courseImage: {
          name: req.files["image"][0].originalname,
          url: imgresult.url,
        },
        videos: videoUrlList,
        resources: {
          name: req.files["resources"][0].originalname,
          url: resourceResult.url,
        },
        subcategory: req.body.subcategory,
        isPaid: req.body.isPaid,
        price: req.body.price,
        instructor: req.user._id,
      });
      try {
        const result = await course.save();
        res.send(result);
      } catch (e) {
        res.send(e.message);
      }
    } else {
      let course = new courses({
        _id: id,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        courseImage: {
          name: req.files["image"][0].originalname,
          url: imgresult.url,
        },
        videos: videoUrlList,
        resources: {
          name: req.files["resources"][0].originalname,
          url: resourceResult.url,
        },
        subcategory: req.body.subcategory,
        isPaid: req.body.isPaid,
        instructor: req.user._id,
      });
      try {
        const result = await course.save();
        res.send(result);
      } catch (e) {
        res.send(e.message);
      }
    }
  }

  // get instructor courses
  async getInstructorCourses(req, res) {
    const id = req.user._id;
    const course = await courses.find({ instructor: id });
    if (course.length == 0)
      return res.status(500).send("not published any course");
    res.send(course);
  }

  // get instructor course
  async getInstructorCourse(req, res) {
    const id = req.user._id;
    const courseid = req.params.id;
    if(req.user.role == 'admin'){
      let course = await courses.findOne({_id:courseid});
      res.send(course);
      return;
    }
    const course = await courses.findOne({ instructor: id, _id: courseid });
    console.log(course);
    if (!course) {
      return res.status(404).send("this course is not uploaded by you");
    }
    res.send(course);
  }

  // see course review
  async seeCourseReview(req, res) {
  //   if(req.user.role == 'instructor'){
  //   const course = await courses.findOne({ instructor: req.user._id, _id: req.params.id });
  //   if (!course) {
  //     return res.status(404).send("this course is not uploaded by you");
  //   }
  // }
    const review = await reviews.find({ course: req.params.id }).populate('user');
    if (review.length == 0) {
      return res.status(404).send("no reviews");
    }
    res.send(review);
  }

  // update instructor course
  async updateInstructorCourse(req, res) {
    console.log(req.body)
    const id = req.params.id;
    const datas = await courses.find();
    const c = datas.find((e) => {
      return e._id == id;
    });

    if (!c) return res.status(404).send("course not found");

    if (req.body.isPaid == 'false' || req.body.isPaid == false) {
      const course = await courses.findByIdAndUpdate(
        id,
        { $unset: {price: null} },
        { new: true }
      );
      if (req.body.price) {
        return res.status(500).send("price is not required");
      }
    } else {
      if (!req.body.price) {
        return res.status(500).send("price is required");
      }
    }

    if(req.body.isPaid == 'true' || req.body.isPaid == true){
      try {
        const course = await courses.findByIdAndUpdate(
          id,
          {
            $set: {
              name: req.body.name,
              description: req.body.description,
              category: req.body.category,
              subcategory: req.body.subcategory,
              isPaid: req.body.isPaid,
              price: req.body.price
            },
          },
          { new: true }
        );
        res.send(course);
      } catch (e) {
        console.log(e);
      }
    }else if(req.body.isPaid == 'false'){
      try {
        const course = await courses.findByIdAndUpdate(
          id,
          {
            $set: {
              name: req.body.name,
              description: req.body.description,
              category: req.body.category,
              subcategory: req.body.subcategory,
              isPaid: req.body.isPaid,
            },
          },
          { new: true }
        );
        res.send(course);
      } catch (e) {
        console.log(e);
      }
    }

  }

  // update course image
  async changeCourseImage(req,res){
    console.log(req.files)
    const id = req.params.id;
    const datas = await courses.find();
    const c = datas.find((e) => {
      return e._id == id;
    });

    if (!c) return res.status(404).send("course not found");

    var locaFilePath = req.files["image"][0].path;
    console.log(locaFilePath);
    const newPath = locaFilePath.replace(/\\/g, "/");
    var imgresult = await uploadToCloudinary(newPath, req.user._id);
    console.log(imgresult);

    let course = await courses.findByIdAndUpdate(id,{
      $set:{
        courseImage: {
          name: req.files["image"][0].originalname,
          url: imgresult.url,
        }
      }
    },{new:true})

    res.send(course)
  }


  // change resources file
  async changeCourseResources(req,res){
    // console.log(req.files)
    // const id = req.params.id;
    // const datas = await courses.find();
    // const c = datas.find((e) => {
    //   return e._id == id;
    // });

    // if (!c) return res.status(404).send("course not found");

    var locaFilePath = req.files["resources"][0].path;
    console.log(locaFilePath);
    const newPath = locaFilePath.replace(/\\/g, "/");
    var resourceResult = await uploadResourcesToCloudinary(newPath, req.user._id);
    console.log(resourceResult);

    // let course = await courses.findOneAndUpdate(id,{
    //   $set:{
    //     resources : {
    //       name: req.files["resources"][0].originalname,
    //       url: resourceResult.url,
    //     },
    //   }
    // },{new:true})

    // res.send(course)
    let course = await courses.findByIdAndUpdate(req.params.id,{
      $set:{
        resources : {
                name: req.files["resources"][0].originalname,
                url: resourceResult.url,
              },
      }
    },{new: true});
    res.send(course)
  }


  // change videos files
  async changeCourseVideos(req,res){
    console.log(req.files);
    let oldVideosArr = [];
    if(req.body.oldVideos){
    for(let i = 0;i<req.body.oldVideos.length;i++){
      req.body.oldVideos[i] = JSON.parse(req.body.oldVideos[i])
    }
    console.log(req.body.oldVideos);
    oldVideosArr = req.body.oldVideos
  }
    if(!req.files['videos']){
      let course = await courses.findByIdAndUpdate(req.params.id,{
        $set:{
          videos: oldVideosArr,
        }
      },{new: true})
      res.send(course);
      return;
    }
 
    console.log(req.body.position);

    var videoUrlList = [];

    for (var i = 0; i < req.files["videos"].length; i++) {
      var locaFilePath = req.files["videos"][i].path;
      var orgName = req.files["videos"][i].originalname;
      console.log(locaFilePath);
      const newPath = locaFilePath.replace(/\\/g, "/");
      console.log(newPath);
      var result = await uploadVideosToCloudinary(newPath, req.user._id);
      console.log(result);
      videoUrlList.push({
        name: orgName,
        url: result.url,
      });
      console.log(videoUrlList);
    }

    oldVideosArr.splice(req.body.position-1,0,...videoUrlList)
    console.log(oldVideosArr);

    let course = await courses.findByIdAndUpdate(req.params.id,{
      $set:{
        videos: oldVideosArr,
      }
    },{new: true})

    res.send(course)
  }


  // delete instructor course
  async deleteInstructorCourse(req, res) {
    const id = req.params.id;
    const course = await courses.findOneAndUpdate(
      {_id:id,instructor:req.user._id},
      {
        $set: {
          isActive: false,
        },
      },
      { new: true }
    );
    if (!course) return res.send("course not uploaded by you");
    res.send(course);
  }

  // restore instructor course
  async restoreCourse(req, res) {
    const id = req.params.id;
    const course = await courses.findByIdAndUpdate(
      id,
      {
        $set: {
          isActive: true,
        },
      },
      { new: true }
    );
    if (!course) return res.send("course not found");
    res.send(course);
  }

  // buyers summary for instructor
  async buyerSummary(req, res) {
    if(req.user.role != 'admin'){
    const course = await courses.findOne({ instructor: req.user._id, _id: req.params.id });
    if (!course) {
      return res.status(404).send("this course is not uploaded by you");
    }
  }
    const courseId = req.params.id;
    const buyer = await purchases
      .find({ courses: courseId })
      .select("user")
      .populate("user", "-password");
    if (buyer.length == 0) return res.status(404).send("no buyers");
    res.send(buyer);
  }

  // show all courses to admin
  async showCoursesAdmin(req, res) {
    const course = await courses.find().populate('category').populate('instructor');
    if (course.length == 0) return res.send("no courses are there");
    res.send(course);
  }

  // show course by id admin
  async showCourseByIdAdmin(req, res) {
    const course = await courses.findOne({ _id: req.params.id });
    if (!course) return res.status(404).send("course not available");
    res.send(course);
  }

  // update course by admin
  async updateCourseByAdmin(req, res) {
    const id = req.params.id;
    const datas = await courses.find();
    const c = datas.find((e) => {
      return e._id == id;
    });

    if (!c) return res.status(404).send("course not found");

    if (req.body.isPaid == false) {
      const course = await courses.findByIdAndUpdate(
        id,
        { $unset: { price: "" } },
        { new: true }
      );
      if (req.body.price) {
        return res.status(500).send("price is not required");
      }
    } else {
      if (req.body.price === undefined) {
        return res.status(500).send("price is required");
      }
    }

    try {
      const course = await courses.findByIdAndUpdate(
        id,
        {
          $set: {
            name: req.body.name,
            category: req.body.category,
            isPaid: req.body.isPaid,
            price: req.body.price,
            isActive: req.body.isActive,
          },
        },
        { new: true }
      );
      res.send(course);
    } catch (e) {
      console.log(e);
    }
  }

  // remove course by admin
  async deleteCourseAdmin(req, res) {
    const id = req.params.id;
    const course = await courses.findByIdAndUpdate(id, { isActive: false });
    if (!course) return res.status(404).send("course not found");
    else {
      res.send("deleted successfully");
    }
  }

  // summary of all courses
  async showCourseSummary(req, res) {
    const datas = await courses
      .find()
      .populate("category", "name -_id")
      .populate("instructor");
    res.send(datas);
  }

  // summary of course
  async showOneCourseSummary(req, res) {
    const datas = await courses
      .findOne({ _id: req.params.id })
      .populate("category", "name")
      .populate("instructor")
      .populate("subcategory", "name");
    res.send(datas);
  }

  // summary of course with buyers
  async showBuyers(req, res) {
    const course = await courses.findOne({ _id: req.params.id });
    // console.log(course._id)
    const users = await purchases
      .find({ courses: course._id })
      .select("user -_id")
      .populate("user");
    if (users.length == 0) {
      return res.status(404).send("no one has purchased this course yet");
    }
    res.send(users);
  }
}

module.exports = CourseDomain;
