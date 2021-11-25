const { courses } = require('../models/course.model')
const Joi = require('joi');
const {categories} = require('../models/category.model')
const {cartitems} = require('../models/cart.model')
const { purchases } = require('../models/purchase.model');
const {wishlistItems} = require('../models/wishlist.model')
const path = require('path');

class CourseDomain{

    // get all courses
    async getAllCourses(req,res){
        const course = await courses.find({isActive: true});
        res.send(course);
    }

    // get categorywise course
    async getCategorywiseCourse(req,res){
        const course = await courses.find({category: req.params.cId});
        res.send(course);
    }

    // get subcategorywise course
    async getSubCategorywiseCourse(req,res){
        const course = await courses.find({category: req.params.cId, subcategory: req.params.sId});
        res.send(course);
    }

    // get course by id
    async getCourseById(req,res){
        const course = await courses.findOne({_id: req.params.courseId,category: req.params.cId,subcategory: req.params.sId});
        if(!course) return res.status(404).send('course not found');
        res.send(course);
    }

    // add to cart
    async addCourseToCart(req,res){
        const id = req.user._id
        let item = await cartitems.find({user: id})
        if(item.length == 0){
            const ci = new cartitems({
                user: id,
                courses: req.params.courseId
            })
            try {
                const result = await ci.save();
                res.send(result);
              } catch (e) {
                res.send(e.message);
              }
        }else{
            try{
                const b = await cartitems.findOneAndUpdate({user: id},{
                    $addToSet: {"courses": req.params.courseId}
                },{new: true})
                await b.save();
                res.send(b);
            }catch(err){
                console.log(err.message)
                res.status(500).send('something wrong')
            }
        }
    }

    // add course to wishlist
    async addCourseToWishlist(req,res){
        const userid = req.user._id;
        const item = await wishlistItems.find({user: userid});
        if(item.length == 0){
            const wi = new wishlistItems({
                user: userid,
                courses: req.params.courseId
            })
            try{
                const result = await wi.save();
                res.send(result);
            }catch(err){
                res.send(err.message);
            }
        }else{
            try{
                const b = await wishlistItems.findOneAndUpdate({user: userid},{
                    $addToSet: {"courses": req.params.courseId}
                },{new: true})
                await b.save();
                res.send(b);
            }catch(err){
                console.log(err.message)
                res.status(500).send('something wrong')
            }
        }
    }

    // get enrolled courses by user
    async getEnrolledCourses(req,res){
        const course = await purchases.find({user: req.user._id}).select('courses').populate('courses');
        res.send(course);
    }

    // get enrolled course by id
    async getEnrolledCourseById(req,res){
        const course = await purchases.find({user: req.user._id},{courses: req.params.id}).populate('courses');
        res.send(course);
    }

    // add instructor course
    async addInstructorCourses(req,res){
        console.log(req.files);
        // console.log(`${req.files['image'][0].path}`);
        let videosPaths = [];
        const videos = req.files['videos'];
        for(let i = 0;i<videos.length;i++){
            videosPaths.push(videos[i].path);
        }

        if(req.body.isPaid == false){
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

        let course = new courses({
            _id: id,
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            courseImage: req.files['image'][0].path,
            video: videosPaths,
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
    }

    // get instructor courses
    async getInstructorCourses(req,res){
        const id = req.user._id;
        const course = await courses.find({instructor:id});
        if(course.length == 0) return res.status(500).send('not published any course')
        res.send(course);
    }

    // get instructor course
    async getInstructorCourse(req,res){
        const id = req.user._id;
        const courseid = req.params.id;
        const course = await courses.findOne({instructor:id,_id:courseid});
        console.log(course)
        if(!course){
            return res.status(404).send('this course is not uploaded by you')
        }
        res.send(course);
    }

    // update instructor course
    async updateInstructorCourse(req,res){
       
        const id = req.params.id;
        const datas = await courses.find();
        const c = datas.find((e)=>{
            return e._id == id;
        })

        if(!c) return res.status(404).send('course not found');

        if(req.body.isPaid == false){
            const course = await courses.findByIdAndUpdate(id, {$unset: {"price":""}},{new: true})
            if(req.body.price){
                return res.status(500).send('price is not required');
            }
        }else{
            if(req.body.price === undefined){
                return res.status(500).send('price is required');
            }
        }

        try{
            const course = await courses.findByIdAndUpdate(id, {$set: {
                name:req.body.name,
                category: req.body.category,
                isPaid: req.body.isPaid,
                price: req.body.price,
                isActive: req.body.isActive
            }},{new: true})
            res.send(course);
        }catch(e){
            console.log(e);
        }
    }

    // delete instructor course
    async deleteInstructorCourse(req,res){
        const id = req.params.id;
        const course = await courses.findByIdAndUpdate(id,{
            $set: {
                isActive: false
            }
        },{new: true})
        res.send(course);
    }

    // buyers summary for instructor
    async buyerSummary(req,res){
        const courseId = req.params.id;
        const buyer = await purchases.find({courses: courseId}).select('user').populate('user','-password');
        res.send(buyer);
    }


    // show all courses to admin
    async showCoursesAdmin(req,res){
        const course = await courses.find();
        res.send(course);
    }

    // show course by id admin
    async showCourseByIdAdmin(req,res){
        const course = await courses.findOne({_id: req.params.id});
        res.send(course);
    }

    // update course by admin
    async updateCourseByAdmin(req,res){
        const id = req.params.id;
        const datas = await courses.find();
        const c = datas.find((e)=>{
            return e._id == id;
        })

        if(!c) return res.status(404).send('course not found');

        if(req.body.isPaid == false){
            const course = await courses.findByIdAndUpdate(id, {$unset: {"price":""}},{new: true})
            if(req.body.price){
                return res.status(500).send('price is not required');
            }
        }else{
            if(req.body.price === undefined){
                return res.status(500).send('price is required');
            }
        }

        try{
            const course = await courses.findByIdAndUpdate(id, {$set: {
                name:req.body.name,
                category: req.body.category,
                isPaid: req.body.isPaid,
                price: req.body.price,
                isActive: req.body.isActive
            }},{new: true})
            res.send(course);
        }catch(e){
            console.log(e);
        }
    }

    // remove course by admin
    async deleteCourseAdmin(req,res){
        const id = req.params.id;
        const course = await courses.findByIdAndUpdate(id,{isActive: false});
        if(!course) return res.status(404).send('course not found')
        else{
            res.send('deleted successfully');
        }
    }

    // summary of all courses
    async showCourseSummary(req,res){
        const datas = await courses.find().populate('category','name -_id').populate('instructor')
        res.send(datas);
    }

    // summary of course
    async showOneCourseSummary(req,res){
        const datas = await courses.findOne({_id: req.params.id}).populate('category','name').populate('instructor').populate('subcategory','name')
        res.send(datas);
    }

    // summary of course with buyers
    async showBuyers(req,res){
        const course = await courses.findOne({_id: req.params.id})
        // console.log(course._id)
        const users = await purchases.find({courses: course._id}).select('user -_id').populate('user')
        res.send(users);
    }

}

module.exports = CourseDomain;