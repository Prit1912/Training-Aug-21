var express = require("express");
var router = express.Router();
var EmpDomain = require("../../domain/employee.domain");
var assignments = require("./child/assignment.controller");
const verifyToken = require('../../authentication/verifyToken')

class EmpController {
  //To get all employees
  static async get(req, res) {
    const empDomain = new EmpDomain();
    empDomain.getAllEmployees(req, res);
  }
  //To get an single employee by id
  static async getAnEmployee(req, res) {
    const empDomain = new EmpDomain();
    empDomain.getAnEmployee(req, res);
  }
  //To Create New Employee
  static async createAnEmployee(req, res) {
    const empDomain = new EmpDomain();
    empDomain.createAnEmployee(req, res);
  }
 
}

router.use("/:empId/assignments", assignments);

//To get all employees
router.get("/", EmpController.get);

//To get an single employee by id
router.get("/:empId", EmpController.getAnEmployee);

router.use(verifyToken);

//To Create New Employee
router.post("/", EmpController.createAnEmployee);

module.exports = router;
