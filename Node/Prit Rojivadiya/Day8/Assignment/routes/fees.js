var express = require("express");
var router = express.Router();
let authenticate = require('./verifytoken');

let studentData = [
    {
      stuId: 1,
      stuName: "Prit",
      totalAmount: 25000,
      feesPaid: 20000,
      feesRemain: 5000
    },
    {
      stuId: 2,
      stuName: "Man",
      totalAmount: 25000,
      feesPaid: 10000,
      feesRemain: 15000
    },
    {
      stuId: 3,
      stuName: "Tirth",
      totalAmount: 25000,
      feesPaid: 25000,
      feesRemain: 0
    }
  ];

/* GET students listing with protection. */
router.get("/fees",authenticate, function (req, res, next) {
  res.json(studentData);
});

// add fees detail
router.post('/fees',authenticate,(req,res,next)=>{
    studentData.push(req.body);
    res.json(studentData);
})

module.exports = router;
