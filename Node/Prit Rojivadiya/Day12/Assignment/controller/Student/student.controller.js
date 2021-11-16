var express = require("express");
var router = express.Router();
var StuDomain = require("../../domain/student.domain");
var fees = require("./child/fee.controller");
var result = require("./child/result.controller");
const verifyToken = require('../../authentication/verifyToken')

class StuController {
  //To create new student record
  static async createStudent(req, res) {
    const stuDomain = new StuDomain();
    stuDomain.creatStudent(req, res);
  }
  //To get all students
  static async get(req, res) {
    const stuDomain = new StuDomain();
    stuDomain.getAllStudents(req, res);
  }
  //To delete a Particular Student Record
  static async deleteAnStudent(req, res) {
    const stuDomain = new StuDomain();
    stuDomain.deleteAnStudent(req, res);
  }
  //To return a Particular Student Record
  static async getStudentRecord(req, res) {
    const stuDomain = new StuDomain();
    stuDomain.getStudentRecord(req, res);
  }
  //To update a Particular Student Record
  static async updateAnStudent(req, res) {
    const stuDomain = new StuDomain();
    stuDomain.updateStudentRecord(req, res);
  }
}


// get student fees detail
router.use("/:studentId/fees", fees);

// get student result detail
router.use("/:studentId/result", result);

// get all students detail
router.get("/", StuController.get);

// get particulare student detail
router.get("/:studentId", StuController.getStudentRecord);

router.use(verifyToken);

// add student detail
router.post("/", StuController.createStudent);

// update student detail
router.put("/:studentId", StuController.updateAnStudent);

// delete student detail
router.delete("/:studentId", StuController.deleteAnStudent);

module.exports = router;
