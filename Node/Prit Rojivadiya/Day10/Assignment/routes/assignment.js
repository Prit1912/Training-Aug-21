const express = require('express');
const router1 = express.Router();
const verifyToken = require('../middleware/authentication')
const {empAssignments} = require('../config/dbConnect')

router1.get('/',(req,res)=>{
    empAssignments.find({},(err,docs)=>{
        res.send(docs);
    })
})

router1.post('/',verifyToken,(req,res)=>{
    empAssignments.insertMany(req.body).then(()=>{
        console.log('inserted');
    }).catch((err)=>{
        console.log(err);
    })
    empAssignments.find({},(err,doc)=>{
    res.send(doc);
    })
})


// get all assignments
router1.get('/:empid/child/assignments',(req,res)=>{
    empAssignments.find({empId: req.params.empid},(err,doc)=>{
        if(doc.length == 0){
            res.status(404).send('not found');
            return;
        }
        res.send(doc);
    }).select({assignments:1})
})


// get specific assignment
router1.get('/:empid/child/assignments/:assignId',(req,res)=>{
    empAssignments.findOne({empId: req.params.empid},{assignments: {$elemMatch: {AssignmentId: parseInt(req.params.assignId)}}},(err,doc)=>{
        if(err){
            console.log(err);
            return;
        }
        if(doc.length == 0){
            res.status(404).send('not found');
            return;
        } 
        res.send(doc);
        console.log(doc);
    })
})



// update specific assignment
router1.put('/:empid/child/assignments/:assignId',verifyToken,(req,res)=>{
    const index = req.params.assignId;
    empAssignments.updateOne({$and: [{empId: req.params.empid},{"assignments.AssignmentId" : parseInt(req.params.assignId)}]},{
        $set: {"assignments.$":req.body}
    },(err,doc)=>{
        console.log(doc);
        if(err){
            console.log(err);
            return;
        }
        if(doc.length == 0){
            res.status(404).send('not found');
            return;
        } 
    }).select({assignments: 1})

    empAssignments.find({},(err,doc)=>{
        res.send(doc)
    })
})


module.exports = router1;