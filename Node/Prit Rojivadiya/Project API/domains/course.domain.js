const { courses } = require('../models/course.model')
const Joi = require('joi');
const {categories} = require('../models/category.model')
const {cartitems} = require('../models/cart.model')
const { buyers } = require('../models/buyer.model');

class CourseDomain{

    // get all courses
    async getCourses(req,res){
        const buyer = await buyers.find({userId: req.user._id}).populate('courseId','-_id');
        if(buyer.length == 0) return res.status(404).send('you have not purchase any course');
        res.send(buyer)
    }

    // add instructor course
    async addInstructorCourses(req,res){
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
            category: req.body.category,
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

    // get course by id
    async getCourse(req,res){
        const id = req.params.id;
        const buyer = await buyers.findOne({userId: req.user._id});
        // console.log(buyer.courseId);
        let Courses = buyer.courseId;
        for(let i of Courses){
            console.log(i);
            if(i == id){
                const course = await courses.find({_id: id})
                return res.send(course)
            }
        }
        res.send('you have not puchase this course')
    }

    // get instructor courses
    async getInstructorCourses(req,res){
        const id = req.user._id;
        const course = await courses.find({instructor:id});
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
        const course = await courses.find({instructor: req.user._id}).select('_id')
        let cid = [];
        course.forEach((e)=>{
            cid.push(e._id);
        })
        const buyer = buyers.find({courseId: { $in: cid}})
        res.send(buyer)
    }

    // get all course no authentication required
    async getAllCourses(req,res){
        const course = await courses.find({isActive: true});
        res.send(course);
    }

    // get course by id
    async getCourseById(req,res){
        const course = await courses.findOne({isActive: true, _id: req.params.id});
        // console.log(course);
        if(!course){ return res.status(404).send('course not found')}
        res.send(course);
    }

    // get courses by category
    async getCourseByCategory(req,res){
        const cName = req.query.category;
        const c = await categories.findOne({name: cName});
        if(!c){
            return res.status(404).send(`no courses available for ${cName} category`)
        }
        const crs = await courses.find({category: c._id}).populate('instructor',"name -_id").sort({name:1})
        // console.log(crs);
        res.send(crs);
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

    // add course
    async addCourse(req,res){
        
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
            category: req.body.category,
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

    // edit course
    async editCourse(req,res){

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

    // delete course
    async deleteCourse(req,res){
        const id = req.params.id;
        // const course = await courses.findByIdAndDelete(id);
        const course = await courses.findByIdAndUpdate(id,{isActive: false});
        if(!course) return res.status(404).send('course not found')
        else{
            res.send('deleted successfully');
        }
    }

     // add course to cart
     async addCourseToCart(req,res){
        const id = req.user._id
        let user = await cartitems.find({userId: id})
        if(user.length == 0){
            const buyer = new cartitems({
                userId: id,
                courseId: req.params.courseid
            })
            try {
                const result = await buyer.save();
                res.send(result);
              } catch (e) {
                res.send(e.message);
              }
        }else{
            try{
                const b = await cartitems.findOneAndUpdate({userId: id},{
                    $addToSet: {"courseId": req.params.courseid}
                },{new: true})
                await b.save();
                res.send(b);
            }catch(err){
                console.log(err.message)
                res.status(500).send('something wrong')
            }
        }
    }

    // summary of courses
    async showCourseSummary(req,res){
        const datas = await courses.find().populate('category','name -_id').populate('instructor')
        res.send(datas);
    }

    // summary of course
    async showOneCourseSummary(req,res){
        const datas = await courses.findOne({_id: req.params.id}).populate('category').populate('instructor')
        res.send(datas);
    }

    // summary of course with buyers
    async showBuyers(req,res){
        const course = await courses.findOne({_id: req.params.id})
        // console.log(course._id)
        const users = await buyers.find({courseId: course._id}).select('userId -_id').populate('userId')
        res.send(users);
    }

    // buyer summary for instructor
    async buyerSummary(req,res){
        const course = await courses.findOne({_id: req.params.id})
        // console.log(course._id)
        const users = await buyers.find({courseId: course._id}).select('userId -_id').populate('userId')
        res.send(users);
    }

}

module.exports = CourseDomain;