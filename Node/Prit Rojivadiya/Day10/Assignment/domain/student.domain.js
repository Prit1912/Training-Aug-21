const {Students} = require("../model/student.model");

class StuDomain {
  //To get all students
  async getAllStudents(req, res) {
    const students = await Students.find();
    if (students) {
      res.json(students);
    } else {
      res.status(404).send("Data Not Found");
    }
  }
  //To crate a new student record
  async creatStudent(req, res) {
    let data = req.body;
    const students = new Students(data);
    try {
      const result = await students.save();
      res.send(result);
    } catch (e) {
      res.send(e.message);
    }
  }

  //To return a Particular Student Record
  async getStudentRecord(req, res) {
    let id = req.params.studentId;
    //checking if record available
    const students = await Students.findById(id);
    if (students) {
      res.send(students);
    } else {
      res.status(404).send("Data Not Found");
    }
  }
  //To return a particular student FEES Record
  async getFees(req, res) {
    let id = req.params.studentId;
    //checking if record available
    const result = await Students.findById(id);
    if (result) {
      res.send(result.fees);
    } else {
      res.status(404).send("Data Not Found");
    }
  }
  //To return a particular student Exam Result
  async getResult(req, res) {
    let id = req.params.studentId;
    //checking if record available
    const result = await Students.findById(id);
    if (result) {
      res.send(result.result);
    } else {
      res.status(404).send("Data Not Found");
    }
  }
}

module.exports = StuDomain;
