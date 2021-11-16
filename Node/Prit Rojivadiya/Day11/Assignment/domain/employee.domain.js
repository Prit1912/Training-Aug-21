const {Employees} = require("../model/employee.model");

class EmpDomain {

  //To get all employees
  async getAllEmployees(req, res) {
    const employees = await Employees.find();
    res.send(employees);
  }

  //To get an employee by EmpId
  async getAnEmployee(req, res) {
    let id = req.params.empId;
    const employees = await Employees.findById(id);
    if (employees) {
      res.send(employees);
    } else {
      res.status(404).send("Data Not Found");
    }
  }

  //To Create an Employee
  async createAnEmployee(req, res) {
    //getting user input
    let data = req.body;
    const employee = new Employees(data);
    try {
      const result = await employee.save();
      res.send(result);
    } catch (e) {
      res.send(e.message);
    }
  }

  //To delete an employee
  async deleteAnEmployee(req, res) {
    let id = req.params.empId;
    const employees = await Employees.findByIdAndDelete(id);
    if (employees) {
      res.send("Employee Record Deleted Successfully");
    } else {
      res.status(404).send("Data Not Found");
    }
  }

  //To update an employee
  async updateAnEmployee(req, res) {
    //getting user input
    let data = req.body;

    let id = req.params.empId;
    const employees = await Employees.find();
    let emp = employees.find((e) => e._id == id);

    if (emp) {
      try {
        const result = await Employees.findByIdAndUpdate(
          id,
          {
            $set: data,
          },
          { new: true }
        );
        res.send(result);
      } catch (e) {
        res.send(e.message);
      }
    } else {
      res.status(404).send("Data Not Found");
    }
  }

  //To get all assignment by EmployeeId
  async getAssignments(req, res) {
    let id = req.params.empId;

    const result = await Employees.findById(id);
    // console.log(result.assignments);
    if (result) {
      res.send(result.assignments);
    } else {
      res.status(404).send("Data Not Found");
    }
  }

  //To get an assignment by AssignmentId
  async getAnAssignment(req, res) {
    let id = req.params.empId;
    let AssignmentId = req.params.assignmentId;

    const result = await Employees.findById(id);
    if (result) {
      const assignment = result.assignments.find((a) => a.AssignmentId == AssignmentId);
      if (assignment) {
        res.send(assignment);
      } else {
        res.status(404).send("Assignment Not Available");
      }
    } else {
      res.status(404).send("Data Not Found");
    }
  }

  //To update an assignmet
  async updateAnAssignment(req, res) {
    console.log(req.params.empId)
    console.log(req.params.assignmentId)
    const emp = await Employees.updateOne({$and: [{_id: req.params.empId},{"assignments.AssignmentId" : parseInt(req.params.assignmentId)}]},{
      $set: {"assignments.$":req.body}
    },{new: true});
    
    res.send(emp);
  }

  //To add an assignmet
  async addAnAssignment(req, res) {
    const emp = await Employees.updateOne({_id: req.params.empId},{
      $push: { assignments: req.body }
    })
    res.send('added successfully');
  }
}

module.exports = EmpDomain;
