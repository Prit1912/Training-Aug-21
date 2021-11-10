const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authentication')
const {results} = require('../config/dbConnect')

router.get('/result',(req,res,next)=>{
    results.find({"Result.Total":{$gt : 215}},(err,doc)=>{
        res.send(doc);
    }).or([{Address: "Ahmedabad"},{Address: "Surat"}])
})

router.get('/:id/result',(req,res,next)=>{
    results.find({ID: req.params.id},(err,doc)=>{
        res.send(doc);
    })
})


router.post('/result',(req,res,next)=>{
    results.insertMany(req.body);
    results.find({},(err,doc)=>{
        console.log(doc)
        res.send(doc);
    })
})

router.post('/addResult',(req,res,next)=>{
    
    results.find({},(err,doc)=>{
        for(let i = 0;i<doc.length;i++){
            if(doc[i].Result.Total > 215){
                console.log(doc[i].ID)
                results.updateOne({ID: doc[i].ID},{
                    $set: {"Result.status": "Pass"}
                },(err,docs)=>{
                    console.log(docs);
                })
            }else{
                console.log(doc[i].ID)
                results.updateOne({ID: doc[i].ID},{
                    $set: {"Result.status": "Fail"}
                },(err,docs)=>{
                    console.log(docs);
                })
            }
            // console.log(doc[i]);
        }
        res.send();
    })
})

router.put('/:id/result',verifyToken,(req,res,next)=>{
    results.updateOne({ID: req.params.id},req.body,(err,doc)=>{
        console.log('updated');
    })
    results.find({},(err,doc)=>{
        res.send(doc);
    })
})

router.delete('/:id/result',(req,res,next)=>{
    results.deleteOne({$and: [{ID: req.params.id},{Name: "Prit"}]}).then((doc)=>{
        console.log(doc);
    }).catch((err)=>{
        console.log(err)
    })
    results.find({},(err,doc)=>{
        res.send(doc);
    })
})

module.exports = router;