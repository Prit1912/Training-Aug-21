const data = require('./data.json');
const Joi = require('joi');
const express = require("express");
const app = express();
app.use(express.json())
const router = express.Router();

// run on every http request 
router.use((req,res,next)=>{
    console.log("Url: ",req.originalUrl);
    console.log("Method Name: ",req.method)
    next()
})

// get all employees detail
router.get('/employees',(req,res)=>{
    res.send(data)
})


// get particulare employee detail
router.get('/employees/:id',(req,res,next)=>{
    const d = data.find((i)=>{
        return i.empId == parseInt(req.params.id);
    })
    if(!d){
        next();
    }
    res.send(d);
},(req,res,next)=>{
    res.send('No such employee data found')
})


// update particular employee
router.put('/employees/:id',(req,res,next)=>{
    const d = data.find((i)=>{
        return i.empId == parseInt(req.params.id);
    })
    if(!d){
        next();
    }
    const schema = Joi.object( {
        empId: Joi.number().required(),
        addressline1: Joi.string().required(),
        addressline2: Joi.string().required(),
        assignments: Joi.array().required(),
        City: Joi.string().required(),
        Country: Joi.string().required(),
        DOB: Joi.date().required(),
        DLid: Joi.number().required(),
        directReports: Joi.array().required()
    } )
    const result = schema.validate(req.body);

    if(result.error){
        console.log(result.error.details[0].message)
        res.send('not valid data');
        return;
    }

    const index = data.indexOf(d);
    data.splice(index,1,req.body);
    res.send(data);

},(req,res,next)=>{
    res.send('No such employee data found')
})



// add employee detail
router.post('/employees',(req,res)=>{
    const schema = Joi.object( {
        empId: Joi.number().required(),
        addressline1: Joi.string().required(),
        addressline2: Joi.string().required(),
        assignments: Joi.array().required(),
        City: Joi.string().required(),
        Country: Joi.string().required(),
        DOB: Joi.date().required(),
        DLid: Joi.number().required(),
        directReports: Joi.array().required()
    } )
    const result = schema.validate(req.body);

    if(result.error){
        console.log(result.error.details[0].message)
        res.send('not valid data');
        return;
    }

    data.push(req.body);
    res.send(data);

})

app.use('/',router);




// routing for assignments
const router1 = express.Router();
router1.use((req,res,next)=>{
    console.log("Url: ",req.originalUrl);
    console.log("Method Name: ",req.method);
    next()
})

// get all assignments
router1.get('/assignments',(req,res)=>{
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
router1.get('/assignments/:assignId',(req,res)=>{
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
router1.put('/assignments/:assignId',(req,res)=>{
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
router1.post('/assignments',(req,res)=>{

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

app.use("/employees/:id/child/",router1);


app.listen(8000,()=>{console.log('listening at port 8000')});