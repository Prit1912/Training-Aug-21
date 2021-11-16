var express = require("express");
var router = express.Router({ mergeParams: true });
var StudentDomain = require("../../../domain/student.domain");

class FeesController {
  //To return a particular student FEES Record
  static async getFees(req, res) {
    const studentDomain = new StudentDomain();
    studentDomain.getFees(req, res);
  }

  static async updateFees(req, res) {
    const studentDomain = new StudentDomain();
    studentDomain.updateFees(req, res);
  }

}

// get fees detail
router.get("/", FeesController.getFees);

// update fees
router.put('/', FeesController.updateFees)

module.exports = router;
