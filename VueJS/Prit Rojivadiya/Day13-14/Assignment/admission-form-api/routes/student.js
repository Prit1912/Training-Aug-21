const express = require("Express");
const router = express.Router();
const { students } = require("../models/student");

router.get("/", async (req, res) => {
  const student = await students.find();
  if (student.length == 0) {
    res.send("no data available");
  } else {
    res.send(student);
  }
});

router.get("/:id",async (req,res)=>{
    let stu = await students.findOne({id: req.params.id});
    if(!stu) return res.status(404).send('no data found')
    res.send(stu);
})

router.delete("/:id", async (req,res)=>{
    let stu = await students.findOne({ id: req.params.id });
    if (!stu) return res.status(404).send("Student not found");
    else {
      await students.findOneAndDelete({ id: req.params.id });
      res.send("deleted successfully");
    }
})

router.post("/", async (req, res) => {
  const student = await students.find().sort("-id");
  let stuId = 0;
  if (student.length == 0) {
    stuId = 1;
  } else {
    stuId = student[0].id + 1;
  }
  console.log(stuId);
  console.log(req.body.name)
  const stu = new students({
    id: stuId,
    name: {
      firstName: req.body.name.firstName,
      middleName: req.body.name.middleName,
      lastName: req.body.name.lastName,
    },
    dob: req.body.dob,
    placeOfBirth: req.body.placeOfBirth,
    address: {
      city: req.body.address.city,
      state: req.body.address.state,
      country: req.body.address.country,
      pin: req.body.address.pin,
    },
    father: {
      fullName: {
        firstName: req.body.father.fullName.firstName,
        middleName: req.body.father.fullName.middleName,
        lastName: req.body.father.fullName.lastName,
      },
      email: req.body.father.email,
      qualification: req.body.father.qualification,
      profession: req.body.father.profession,
      designation: req.body.father.designation,
      phone: req.body.father.phone,
    },
    mother: {
      fullName: {
        firstName: req.body.mother.fullName.firstName,
        middleName: req.body.mother.fullName.middleName,
        lastName: req.body.mother.fullName.lastName,
      },
      email: req.body.mother.email,
      qualification: req.body.mother.qualification,
      profession: req.body.mother.profession,
      designation: req.body.mother.designation,
      phone: req.body.mother.phone,
    },
    emergencyContact: {
      relation: req.body.emergencyContact.relation,
      number: req.body.emergencyContact.number,
    },
    referenceDetail: {
      referenceThrough: req.body.referenceDetail.referenceThrough,
      addressWithTel: req.body.referenceDetail.addressWithTel,
    },
  });

  try{
      const result = await stu.save();
      res.send(result);
  }catch(err){
      res.status(500).send(err);
  }
});

router.put("/:id", async(req,res)=>{
  console.log(req.params.id);
  let stu = await students.findOne({id: req.params.id});
  if(!stu) return res.status(404).send('no data found');
  try{
    await students.findOneAndUpdate({id: req.params.id},{
      $set: {
        name: {
          firstName: req.body.name.firstName,
          middleName: req.body.name.middleName,
          lastName: req.body.name.lastName,
        },
        dob: req.body.dob,
        placeOfBirth: req.body.placeOfBirth,
        address: {
          city: req.body.address.city,
          state: req.body.address.state,
          country: req.body.address.country,
          pin: req.body.address.pin,
        },
        father: {
          fullName: {
            firstName: req.body.father.fullName.firstName,
            middleName: req.body.father.fullName.middleName,
            lastName: req.body.father.fullName.lastName,
          },
          email: req.body.father.email,
          qualification: req.body.father.qualification,
          profession: req.body.father.profession,
          designation: req.body.father.designation,
          phone: req.body.father.phone,
        },
        mother: {
          fullName: {
            firstName: req.body.mother.fullName.firstName,
            middleName: req.body.mother.fullName.middleName,
            lastName: req.body.mother.fullName.lastName,
          },
          email: req.body.mother.email,
          qualification: req.body.mother.qualification,
          profession: req.body.mother.profession,
          designation: req.body.mother.designation,
          phone: req.body.mother.phone,
        },
        emergencyContact: {
          relation: req.body.emergencyContact.relation,
          number: req.body.emergencyContact.number,
        },
        referenceDetail: {
          referenceThrough: req.body.referenceDetail.referenceThrough,
          addressWithTel: req.body.referenceDetail.addressWithTel,
        },
      }
    })
  }catch(err){
    console.log(err);
  }
  res.send('updated');
})


module.exports = router;
