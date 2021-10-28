var express = require("express");
var router = express.Router();
let authenticate = require('./verifytoken');

/* GET students results listing with protection. */
router.get("/result",authenticate, function (req, res, next) {
  let studentData = [
    {
      stuId: 1,
      stuName: "Prit",
      percentage: 99
    },
    {
      stuId: 2,
      stuName: "Man",
      percentage: 98
    },
    {
      stuId: 3,
      stuName: "Tirth",
      percentage: 97
    }
  ];

  res.json(studentData);
});

module.exports = router;
