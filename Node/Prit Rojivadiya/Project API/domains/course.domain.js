const { courses } = require('../models/course.model')
const Joi = require('joi');
const {categories} = require('../models/category.model')

class CourseDomain{

    // get all courses
    async getCourses(req,res){
        const allCourses = await courses.find({isActive: true});
        if(allCourses.length == 0) return res.status(404).send('There are no courses added yet');
        res.send(allCourses);
    }

    // get course by id
    async getCourse(req,res){
        const course = await courses.find({_id: req.params.id,isActive: true});
        if(course.length == 0) return res.status(404).send('course not found');
        res.send(course)
    }

    // get courses by category
    async getCourseByCategory(req,res){
        const cName = req.query.category;
        const c = await categories.findOne({name: cName});
        if(!c){
            return res.status(404).send(`no courses available for ${cName} category`)
        }
        const crs = await courses.find({category: c._id})
        console.log(crs);
        res.send(crs);
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
            price: req.body.price
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
            const course = await courses.findByIdAndUpdate(id, {$set: req.body},{new: true})
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

    // summary of courses
    async coursesSummary(req,res){
        const datas = await courses.find().populate('category','name -_id')
        res.send(datas);
    }

    // summary of course
    async courseSummary(req,res){
        const datas = await courses.find({_id: req.params.id}).populate('category')
        res.send(datas);
    }

}

module.exports = CourseDomain;