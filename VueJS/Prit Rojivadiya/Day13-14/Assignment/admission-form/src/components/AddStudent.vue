<template>
  <div class="row">
    <div class="col-12 col-md-6 me-auto ms-auto">
      <h1 class="text-danger mb-5">Admission Form</h1>
      <form @submit="submit">
        <!-- name -->
        <div class="row mb-3">
          <label for="inputName" class="col-sm-2 col-form-label"
            >FirstName</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.name.firstName"
              name="name"
              class="form-control"
              id="inputName"
            />
            <p>{{ errorName }}</p>
          </div>
        </div>

        <!-- middleName -->
        <div class="row mb-3">
          <label for="middleName" class="col-sm-2 col-form-label"
            >MiddleName</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.name.middleName"
              name="name"
              class="form-control"
              id="middleName"
            />
            <!-- <p>{{ errorName }}</p> -->
          </div>
        </div>

        <!-- lastname -->
        <div class="row mb-3">
          <label for="lastName" class="col-sm-2 col-form-label">LastName</label>
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.name.lastName"
              name="name"
              class="form-control"
              id="lastName"
            />
            <!-- <p>{{ errorName }}</p> -->
          </div>
        </div>

        <!-- DOB -->
        <div class="row mb-3">
          <label for="inputDate" class="col-sm-2 col-form-label">DOB</label>
          <div class="col-sm-10">
            <input
              type="date"
              v-model="student.dob"
              class="form-control"
              id="inputDate"
              placeholder="dd-mm-yyyy"
            />
            <!-- <p>{{ errorDob }}</p> -->
          </div>
        </div>

        <!-- place of birth -->
        <div class="row mb-3">
          <label for="inputPlace" class="col-sm-2 col-form-label"
            >Place of Birth</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.placeOfBirth"
              class="form-control"
              id="inputPlace"
            />
            <!-- <p>{{ errorPlace }}</p> -->
          </div>
        </div>

        <!-- address -->
        <h3 class="text-primary mb-4">Address</h3>

        <!-- city -->
        <div class="row mb-3">
          <label for="city" class="col-sm-2 col-form-label">City</label>
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.address.city"
              class="form-control"
              id="city"
            />
            <!-- <p>{{ errorAddress }}</p> -->
          </div>
        </div>

        <!-- pin -->
        <div class="row mb-3">
          <label for="pin" class="col-sm-2 col-form-label">pin</label>
          <div class="col-sm-10">
            <input
              type="number"
              v-model="student.address.pin"
              class="form-control"
              id="pin"
            />
            <!-- <p>{{ errorAddress }}</p> -->
          </div>
        </div>

        <!-- state -->
        <div class="row mb-3">
          <label for="state" class="col-sm-2 col-form-label">state</label>
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.address.state"
              class="form-control"
              id="state"
            />
            <!-- <p>{{ errorAddress }}</p> -->
          </div>
        </div>

        <!-- country -->
        <div class="row mb-3">
          <label for="country" class="col-sm-2 col-form-label">country</label>
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.address.country"
              class="form-control"
              id="country"
            />
            <!-- <p>{{ errorAddress }}</p> -->
          </div>
        </div>

        <!-- father Detail -->
        <h3 class="text-primary mb-4">Father's details</h3>

        <!-- firstname -->
        <div class="row mb-3">
          <label for="fatherFirstName" class="col-sm-2 col-form-label"
            >FirstName</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.father.fullName.firstName"
              class="form-control"
              id="fatherFirstName"
            />
            <!-- <p>{{ errorFname }}</p> -->
          </div>
        </div>

        <!-- middleName -->
        <div class="row mb-3">
          <label for="fatherMiddleName" class="col-sm-2 col-form-label"
            >MiddleName</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.father.fullName.middleName"
              class="form-control"
              id="fatherMiddleName"
            />
            <!-- <p>{{ errorFname }}</p> -->
          </div>
        </div>

        <!-- lastName -->
        <div class="row mb-3">
          <label for="fatherLastName" class="col-sm-2 col-form-label"
            >LastName</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.father.fullName.lastName"
              class="form-control"
              id="fatherLastName"
            />
            <!-- <p>{{ errorFname }}</p> -->
          </div>
        </div>

        <!-- email -->
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.father.email"
              class="form-control"
              id="inputEmail3"
            />
            <p>{{ errorEmail }}</p>
          </div>
        </div>

        <!-- qualification -->
        <div class="row mb-3">
          <label for="inputQualification" class="col-sm-2 col-form-label"
            >Qualification</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.father.qualification"
              class="form-control"
              id="inputQualification"
            />
            <!-- <p>{{ errorQualification }}</p> -->
          </div>
        </div>

        <!-- profession -->
        <div class="row mb-3">
          <label for="inputProfession" class="col-sm-2 col-form-label"
            >Profession</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.father.profession"
              class="form-control"
              id="inputProfession"
            />
            <!-- <p>{{ errorProfession }}</p> -->
          </div>
        </div>

        <!-- designation -->
        <div class="row mb-3">
          <label for="inputDesignation" class="col-sm-2 col-form-label"
            >Designation</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.father.designation"
              class="form-control"
              id="inputDesignation"
            />
            <!-- <p>{{ errorDesignation }}</p> -->
          </div>
        </div>

        <!-- phone -->
        <div class="row mb-3">
          <label for="inputPhone" class="col-sm-2 col-form-label">Phone</label>
          <div class="col-sm-10">
            <input
              type="number"
              v-model="student.father.phone"
              class="form-control"
              id="inputPhone"
            />
            <p>{{ errorPhone }}</p>
          </div>
        </div>

        <!-- Mother Detail -->
        <h3 class="text-primary mb-4">Mother's details</h3>

        <!-- firstname -->
        <div class="row mb-3">
          <label for="motherFirstName" class="col-sm-2 col-form-label"
            >FirstName</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.mother.fullName.firstName"
              class="form-control"
              id="motherFirstName"
            />
            <!-- <p>{{ errorFname }}</p> -->
          </div>
        </div>

        <!-- middleName -->
        <div class="row mb-3">
          <label for="motherMiddleName" class="col-sm-2 col-form-label"
            >MiddleName</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.mother.fullName.middleName"
              class="form-control"
              id="motherMiddleName"
            />
            <!-- <p>{{ errorFname }}</p> -->
          </div>
        </div>

        <!-- lastName -->
        <div class="row mb-3">
          <label for="motherLastName" class="col-sm-2 col-form-label"
            >LastName</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.mother.fullName.lastName"
              class="form-control"
              id="motherLastName"
            />
            <!-- <p>{{ errorFname }}</p> -->
          </div>
        </div>

        <!-- email -->
        <div class="row mb-3">
          <label for="motherEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input
              type="email"
              v-model="student.mother.email"
              class="form-control"
              id="motherEmail"
            />
            <!-- <p>{{ errorEmail }}</p> -->
          </div>
        </div>

        <!-- qualification -->
        <div class="row mb-3">
          <label for="inputQualificationM" class="col-sm-2 col-form-label"
            >Qualification</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.mother.qualification"
              class="form-control"
              id="inputQualificationM"
            />
            <!-- <p>{{ errorQualification }}</p> -->
          </div>
        </div>

        <!-- profession -->
        <div class="row mb-3">
          <label for="inputProfession1" class="col-sm-2 col-form-label"
            >Profession</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.mother.profession"
              class="form-control"
              id="inputProfession1"
            />
            <!-- <p>{{ errorProfession }}</p> -->
          </div>
        </div>

        <!-- designation -->
        <div class="row mb-3">
          <label for="inputDesignation1" class="col-sm-2 col-form-label"
            >Designation</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.mother.designation"
              class="form-control"
              id="inputDesignation1"
            />
            <!-- <p>{{ errorDesignation }}</p> -->
          </div>
        </div>

        <!-- phone -->
        <div class="row mb-3">
          <label for="inputPhone1" class="col-sm-2 col-form-label">Phone</label>
          <div class="col-sm-10">
            <input
              type="number"
              v-model="student.mother.phone"
              class="form-control"
              id="inputPhone1"
            />
            <!-- <p>{{ errorPhone }}</p> -->
          </div>
        </div>

        <!-- Emergency contact list -->
        <h3 class="text-primary mb-4">Emergency contact info</h3>
        <!-- relation -->
        <div class="row mb-3">
          <label for="inputRelation" class="col-sm-2 col-form-label"
            >Relation</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.emergencyContact.relation"
              class="form-control"
              id="inputRelation"
            />
            <!-- <p>{{ errorRelation }}</p> -->
          </div>
        </div>

        <!-- number -->
        <div class="row mb-3">
          <label for="inputEphone" class="col-sm-2 col-form-label">Phone</label>
          <div class="col-sm-10">
            <input
              type="number"
              v-model="student.emergencyContact.number"
              class="form-control"
              id="inputEphone"
            />
            <!-- <p>{{ errorEphone }}</p> -->
          </div>
        </div>

        <!-- reference detail -->
        <h3 class="text-primary mb-4">Reference Detail</h3>
        <!-- reference through -->
        <div class="row mb-3">
          <label for="inputReference" class="col-sm-2 col-form-label"
            >Reference Trough</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              v-model="student.referenceDetail.referenceThrough"
              class="form-control"
              id="inputReference"
            />
            <!-- <p>{{ errorReference }}</p> -->
          </div>
        </div>

        <!-- address with tel no -->
        <div class="row mb-3">
          <label for="inputAddTel" class="col-sm-2 col-form-label"
            >Address With Tel. No</label
          >
          <div class="col-sm-10">
            <textarea
              type="text"
              v-model="student.referenceDetail.addressWithTel"
              class="form-control"
              id="inputAddTel"
            />
            <!-- <p>{{ errorAddTel }}</p> -->
          </div>
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import studentData from "../services/studentData";
// export default {
//   name: "AddStudent",
//   data() {
//     return {
//       student: {
//         name: {
//           firstName: "",
//           middleName: "",
//           lastName: "",
//         },
//         dob: "",
//         placeOfBirth: "",
//         address: {
//           city: "",
//           state: "",
//           country: "",
//           pin: null,
//         },
//         father: {
//           fullName: {
//             firstName: "",
//             middleName: "",
//             lastName: "",
//           },
//           email: "",
//           qualification: "",
//           profession: "",
//           designation: "",
//           phone: null,
//         },
//         mother: {
//           fullName: {
//             firstName: "",
//             middleName: "",
//             lastName: "",
//           },
//           email: "",
//           qualification: "",
//           profession: "",
//           designation: "",
//           phone: null,
//         },
//         emergencyContact:{
//             relation: "",
//             number: null
//         },
//         referenceDetail:{
//             referenceThrough: "",
//             addressWithTel: ""
//         }
//       },
//     };
//   },
//   methods:{
//       submit(){
//           studentData.addStudent(this.student);
//       }
//   }
// };

import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export default {
  name: "addStudent",
  data() {
    let student = {
      name: {
        firstName: "",
        middleName: "",
        lastName: "",
      },
      dob: "",
      placeOfBirth: "",
      address: {
        city: "",
        state: "",
        country: "",
        pin: null,
      },
      father: {
        fullName: {
          firstName: "",
          middleName: "",
          lastName: "",
        },
        email: "",
        qualification: "",
        profession: "",
        designation: "",
        phone: null,
      },
      mother: {
        fullName: {
          firstName: "",
          middleName: "",
          lastName: "",
        },
        email: "",
        qualification: "",
        profession: "",
        designation: "",
        phone: null,
      },
      emergencyContact: {
        relation: "",
        number: null,
      },
      referenceDetail: {
        referenceThrough: "",
        addressWithTel: "",
      },
    };

    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const validationSchema = yup.object({
      name: yup.string().required("Name is required").min(5),
      email: yup
        .string()
        .email("must be a valid email")
        .required("father's email is required"),
      phone: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .min(10, "too short")
        .max(10, "too long")
        .required("father's phone is required"),
    });

    const { handleSubmit } = useForm({
      validationSchema,
    });

    const { value: name, errorMessage: errorName } = useField("name");
    const { value: email, errorMessage: errorEmail } = useField("email");
    const { value: phone, errorMessage: errorPhone } = useField("phone");


    student.name.firstName = name;
    student.father.email = email;
    student.father.phone = phone;

    const submit = handleSubmit((values) => {
      console.log(student);
      student.name.firstName = values.name;
      student.father.email = values.email;
      student.father.phone = values.phone;
      studentData.addStudent(student);
      console.log(values);
    });

    return {
      student,
      submit,
      errorName,
      errorEmail,
      errorPhone,
      // name,
      // errorName,
      // dob,
      // errorDob,
      // place,
      // errorPlace,
      // lang,
      // errorLang,
      // address,
      // errorAddress,
      // fname,
      // errorFname,
      // qualification,
      // errorQualification,
      // designation,
      // errorDesignation,
      // profession,
      // errorProfession,
      // phone,
      // errorPhone,
      // relation,
      // errorRelation,
      // ephone,
      // errorEphone,
      // reference,
      // errorReference,
      // addTel,
      // errorAddTel,
    };
  },
};
</script>

<style scoped>
p {
  color: red;
}
</style>
