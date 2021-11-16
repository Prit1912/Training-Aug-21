var express = require("express");
var router = express.Router({ mergeParams: true });
var StudentDomain = require("../../../domain/student.domain");

class ResultController {
  //To return a particular student Result Record
  static async getResult(req, res) {
    const studentDomain = new StudentDomain();
    studentDomain.getResult(req, res);
  }

}

router.get("/", ResultController.getResult);

module.exports = router;
