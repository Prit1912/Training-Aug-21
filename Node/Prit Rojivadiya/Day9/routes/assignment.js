const express = require('express');
const router1 = express.Router();
const Joi = require('joi');
const data = require('../JSON/employee.json');
const verifyToken = require('../middleware/authentication')

router1.get('/',(req,res,next)=>{
    res.send(data);
})


// get all assignments
router1.get('/assignments',verifyToken,(req,res)=>{
    const empid = req.originalUrl.split('/')[2];
    const result = data.find((d)=>{
        return d.empId == parseInt(empid)
    })
    if(!result){
        res.send('not a valid employee id');
    }
    res.send(result.assignments);
})


// get specific assignment
router1.get('/assignments/:assignId',verifyToken,(req,res)=>{
    const empid = req.originalUrl.split('/')[2];
    const result = data.find((d)=>{
        return d.empId == parseInt(empid)
    })
    if(!result){
        res.send('not a valid employee id');
    }
    const assignment = result.assignments.find((i)=>{
        return i.AssignmentId == parseInt(req.params.assignId);
    })
    if(!assignment){
        res.send('not a valid assignment id');
    }
    res.send(assignment)
})



// update specific assignment
router1.put('/assignments/:assignId',verifyToken,(req,res)=>{
    const empid = req.originalUrl.split('/')[2];
    const result = data.find((d)=>{
        return d.empId == parseInt(empid)
    })
    if(!result){
        res.send('not a valid employee id');
        return;
    }
    const assignment = result.assignments.find((i)=>{
        return i.AssignmentId == parseInt(req.params.assignId);
    })
    if(!assignment){
        res.send('not a valid assignment id');
        return;
    }

    const schema = Joi.object({
        ActionCode:Joi.string().required(),
        ActionCategory:Joi.string().required(),
        assignmentDFF: Joi.array().required(),
        AssignmentId: Joi.number().required(),
        AssingmentName: Joi.string().required(),
        AssingmentNumber: Joi.string().required(),
        EffectiveStartDate: Joi.date().required(),
        EffectiveEndDate: Joi.date().required(),
        LocationId: Joi.number().required(),
        ManagerId:Joi.number().required()
    })

    const validity = schema.validate(req.body);

    if(validity.error){
        console.log(validity.error.details[0].message)
        res.send('not valid data');
        return;
    }

    const index = result.assignments.indexOf(assignment);
    result.assignments.splice(index,1,req.body);
    res.send(data);

})




// Add an assignment to specific employee's assignments
router1.post('/assignments',verifyToken,(req,res)=>{

    // check empid is valid or not
    const empid = req.originalUrl.split('/')[2];
    const result = data.find((d)=>{
        return d.empId == parseInt(empid)
    })
    if(!result){
        res.send('not a valid employee id');
        return;
    }

    const schema = Joi.object({
        ActionCode:Joi.string().required(),
        ActionCategory:Joi.string().required(),
        assignmentDFF: Joi.array().required(),
        AssignmentId: Joi.number().required(),
        AssingmentName: Joi.string().required(),
        AssingmentNumber: Joi.string().required(),
        EffectiveStartDate: Joi.date().required(),
        EffectiveEndDate: Joi.date().required(),
        LocationId: Joi.number().required(),
        ManagerId:Joi.number().required()
    })

    const validity = schema.validate(req.body);

    if(validity.error){
        console.log(validity.error.details[0].message)
        res.send('not valid data');
        return;
    }

    result.assignments.push(req.body);
    res.send(data);
})


module.exports = router1;