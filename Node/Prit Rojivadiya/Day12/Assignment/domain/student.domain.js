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
  //To update an student
  async updateStudentRecord(req, res) {
    let id = req.params.studentId;
    const student = await Students.findByIdAndUpdate(id,{
      $set: req.body
    });
    if (student) {
      res.send("Student Record updated Successfully");
    } else {
      res.status(404).send("Data Not Found");
    }
  }
  //To delete an student
  async deleteAnStudent(req, res) {
    let id = req.params.studentId;
    const student = await Students.findByIdAndDelete(id);
    if (student) {
      res.send("Student Record Deleted Successfully");
    } else {
      res.status(404).send("Data Not Found");
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
   //To update a particular student FEES Record
   async updateFees(req, res) {
    let id = req.params.studentId;
    const result = await Students.findById(id);
    if (result) {
      // console.log(result);
      result.fees = req.body;
      await result.save()
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
  //To update a particular student result Record
  async updateResult(req, res) {
    let id = req.params.studentId;
    const rs = await Students.findById(id);
    if (rs) {
      // console.log(result);
      rs.result = req.body;
      await rs.save()
      res.send(rs.result);
    } else {
      res.status(404).send("Data Not Found");
    }
  }
}

module.exports = StuDomain;
