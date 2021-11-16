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
  //To update an assignment
  static async updateAnAssignment(req, res) {
    const empDomain = new EmpDomain();
    empDomain.updateAnAssignment(req, res);
  }
  //To add an assignment
  static async addAssignment(req, res) {
    const empDomain = new EmpDomain();
    empDomain.addAnAssignment(req, res);
  }
}

router.get("/", AssignmentController.get);
router.post("/", AssignmentController.addAssignment);
router.get("/:assignmentId", AssignmentController.getAnAssignment);
router.put("/:assignmentId", AssignmentController.updateAnAssignment);

module.exports = router;
