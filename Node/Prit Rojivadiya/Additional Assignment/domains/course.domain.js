const { courses } = require('../models/course.model')
const Joi = require('joi');

class CourseDomain{

    // get all courses
    async getCourses(req,res){
        const allCourses = await courses.find();
        if(allCourses.length == 0) return res.status(404).send('There are no courses added yet');
        res.send(allCourses);
    }

    // get course by id
    async getCourse(req,res){
        const course = await courses.findById(req.params.id);
        if(!course) return res.status(404).send('course not found');
        res.send(course)
    }

    // add course
    async addCourse(req,res){

        let course = new courses(req.body)
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
            if(req.body.pride === undefined){
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
        const user = await courses.findByIdAndDelete(id);
        if(!user) return res.status(404).send('course not found')
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