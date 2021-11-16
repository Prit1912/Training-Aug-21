var express = require("express");
var router = express.Router({ mergeParams: true });
var EmpDomain = require("../../../domain/employee.domain");

class AssignmentController {

  //To get all assignments
  static async get(req, res) {
    const empDomain = new EmpDomain();
    empDomain.getAssignments(req, res);
  }
  //To get an assignment by AssignmentId
  static async getAnAssignment(req, res) {
    const empDomain = new EmpDomain();
    empDomain.getAnAssignment(req, res);
  }

}

router.get("/", AssignmentController.get);
router.get("/:assignmentId", AssignmentController.getAnAssignment);

module.exports = router;
