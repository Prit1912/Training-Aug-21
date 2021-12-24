const express = require("express");
const router = express.Router();
const { employees } = require("../models/employee");

router.get("/", async (req, res) => {
  const emps = await employees.find();
  if (emps.length == 0) {
    return res.status(500).send("no data found");
  }
  res.send(emps);
});

router.get("/:id", async (req, res) => {
  const emps = await employees.findOne({ id: req.params.id });
  if (!emps) {
    return res.status(500).send("no data found");
  }
  res.send(emps);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const emp = await employees.findOne({ email: req.body.email });
  if (emp) return res.status(500).send("user already registered");

  const emps = await employees.find().sort("-id");
  console.log(emps);
  let empId = 0;
  if (emps.length == 0) {
    empId = 1;
  } else {
    empId = emps[0].id + 1;
  }
  console.log(empId);
  const newEmp = new employees({
    id: empId,
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
  });
  try {
    const result = await newEmp.save();
    console.log(result);
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const emp = await employees.find({ id: id });
  if (!emp) return res.status(404).send("Employee not found");
  else {
    await employees.findOneAndUpdate({ id: id },{
        $set:{
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email
        }
    });
    res.send("deleted successfully");
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const emp = await employees.find({ id: id });
  if (!emp) return res.status(404).send("Employee not found");
  else {
    await employees.findOneAndDelete({ id: id });
    res.send("deleted successfully");
  }
});

module.exports = router;
