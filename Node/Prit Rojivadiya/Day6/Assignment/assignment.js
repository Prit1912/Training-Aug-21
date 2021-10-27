const express = require('express');
const app = express();
app.use(express.json());
const Joi = require('joi');

Students=[
    {"ID":1,"Name":"Reena","Address":"Ahmedabad","Fees":{"Amount":10000,"PaymentDate":"12/12/2020","Status":"true"},"Result":{"Hindi":80,"Eng":70,"Math":60,"Total":210,"Grade":"A"}},
    {"ID":2,"Name":"Rita","Address":"Surat","Fees":{"Amount":12000,"PaymentDate":"12/12/2020","Status":"false"},"Result":{"Hindi":70,"Eng":80,"Math":60,"Total":210,"Grade":"A"}}
]

// 1. Create a RESTFUL API which will return a Studentlist.

app.get('/students',(req,res)=>{
    res.send(Students);
})

// 2. Create RESTFUL API which will return a Particular Student Record

app.get('/students/:id',(req,res)=>{
    const stu = Students.find((c)=>{
        return c.ID == parseInt(req.params.id);
    })
    if(!stu) return res.status(404).send('student not found');
    res.send(stu);
})

// 3. Create a RESTFUL API which return a particular student FEES Record. 
// Fees field are http://localhost:3000/students/1/fees

app.get('/students/:id/fees',(req,res)=>{
    const stu = Students.find((c)=>{
        return c.ID == parseInt(req.params.id);
    })
    if(!stu) return res.status(404).send('student not found');
    res.send(stu.Fees);
})

// 4. Create a RESTFUL API which will return a particular student Exam Result. 
// Result Fields are http://localhost:/3000/students/1/result

app.get('/students/:id/result',(req,res)=>{
    const stu = Students.find((c)=>{
        return c.ID == parseInt(req.params.id);
    })
    if(!stu) return res.status(404).send('student not found');
    res.send(stu.Result);
})

// 5. Create a RESTFUL API which will update a result of student id 1. 
// Update the marks for English Subject.

app.put('/students/:id',(req,res)=>{
    const stu = Students.find((c)=>{
        return c.ID == parseInt(req.params.id);
    })
    
    if(!stu) return res.status(404).send('student not found');

    /*
    const schema = Joi.object().keys({
        Name: Joi.string().required(),
        Result: Joi.object().keys({
            Eng: Joi.number().required()
        })
    })
    */

    const schema = Joi.object({
        Name: Joi.string().required(),
        Result: Joi.object({
            Eng: Joi.number().required()
        })
    })

    const result = schema.validate(req.body);
    
    if(result.error) return res.status(400).send(result.error);
    stu.Name = req.body.Name;
    stu.Result.Eng = req.body.Result.Eng;

    res.send(stu);
})


app.listen(3000,()=>{console.log('listening to port 3000')});