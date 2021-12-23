<template>
  <h1 class="text-danger mb-5">Admission Form</h1>
  
  <form @submit="submit">

    <!-- name -->
    <div class="row mb-3">
      <label for="inputName" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input
          type="text"
          v-model="student.name"
          name="name"
          class="form-control"
          id="inputName"
        />
        <p>{{ errorName }}</p>
      </div>
    </div>

    <!-- DOB -->
    <div class="row mb-3">
      <label for="inputDate" class="col-sm-2 col-form-label">DOB</label>
      <div class="col-sm-10">
        <input
          type="date"
          v-model="dob"
          class="form-control"
          id="inputDate"
          placeholder="dd-mm-yyyy"
        />
        <p>{{ errorDob }}</p>
      </div>
    </div>

    <!-- place of birth -->
    <div class="row mb-3">
      <label for="inputPlace" class="col-sm-2 col-form-label">Place of Birth</label>
      <div class="col-sm-10">
        <input
          type="text"
          v-model="place"
          class="form-control"
          id="inputPlace"
        />
        <p>{{ errorPlace }}</p>
      </div>
    </div>

    <!-- first language -->
    <div class="row mb-3">
      <label for="inputLang" class="col-sm-2 col-form-label">First Language</label>
      <div class="col-sm-10">
        <input
          type="text"
          v-model="lang"
          class="form-control"
          id="inputLang"
        />
        <p>{{ errorLang }}</p>
      </div>
    </div>

    <!-- address -->
     <div class="row mb-3">
      <label for="inputAddress" class="col-sm-2 col-form-label">Address</label>
      <div class="col-sm-10">
        <input
          type="text"
          v-model="address"
          class="form-control"
          id="inputAddress"
        />
        <p>{{ errorAddress }}</p>
      </div>
    </div>

    <!-- father Detail -->
    <h3 class="text-primary mb-4" >Father's details</h3>
    <!-- fullname -->
     <div class="row mb-3">
      <label for="inputFname" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input
          type="text"
          v-model="fname"
          class="form-control"
          id="inputFname"
        />
        <p>{{ errorFname }}</p>
      </div>
    </div>

    <!-- email -->
     <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input
          type="text"
          v-model="email"
          class="form-control"
          id="inputEmail3"
        />
        <p>{{ errorEmail }}</p>
      </div>
    </div>

    <!-- qualification -->
    <div class="row mb-3">
      <label for="inputQualification" class="col-sm-2 col-form-label">Qualification</label>
      <div class="col-sm-10">
        <input
          type="text"
          v-model="qualification"
          class="form-control"
          id="inputQualification"
        />
        <p>{{ errorQualification }}</p>
      </div>
    </div>

    <!-- profession -->
    <div class="row mb-3">
      <label for="inputProfession" class="col-sm-2 col-form-label">Profession</label>
      <div class="col-sm-10">
        <input
          type="text"
          v-model="profession"
          class="form-control"
          id="inputProfession"
        />
        <p>{{ errorProfession }}</p>
      </div>
    </div>

    <!-- designation -->
    <div class="row mb-3">
      <label for="inputDesignation" class="col-sm-2 col-form-label">Designation</label>
      <div class="col-sm-10">
        <input
          type="text"
          v-model="designation"
          class="form-control"
          id="inputDesignation"
        />
        <p>{{ errorDesignation }}</p>
      </div>
    </div>

    <!-- phone -->
    <div class="row mb-3">
      <label for="inputPhone" class="col-sm-2 col-form-label">Phone</label>
      <div class="col-sm-10">
        <input
          type="number"
          v-model="phone"
          class="form-control"
          id="inputPhone"
        />
        <p>{{ errorPhone }}</p>
      </div>
    </div>

    <!-- Emergency contact list -->
    <h3 class="text-primary mb-4" >Emergency contact info</h3>

    <!-- relation -->
    <div class="row mb-3">
      <label for="inputRelation" class="col-sm-2 col-form-label">Relation</label>
      <div class="col-sm-10">
        <input
          type="text"
          v-model="relation"
          class="form-control"
          id="inputRelation"
        />
        <p>{{ errorRelation }}</p>
      </div>
    </div>

    <!-- number -->
    <div class="row mb-3">
      <label for="inputEphone" class="col-sm-2 col-form-label">Phone</label>
      <div class="col-sm-10">
        <input
          type="number"
          v-model="ephone"
          class="form-control"
          id="inputEphone"
        />
        <p>{{ errorEphone }}</p>
      </div>
    </div>

    <!-- reference detail -->
    <h3 class="text-primary mb-4">Reference Detail</h3>
    <!-- reference through -->
    <div class="row mb-3">
      <label for="inputReference" class="col-sm-2 col-form-label">Reference Trough</label>
      <div class="col-sm-10">
        <input
          type="text"
          v-model="reference"
          class="form-control"
          id="inputReference"
        />
        <p>{{ errorReference }}</p>
      </div>
    </div>

    <!-- address with tel no -->
    <div class="row mb-3">
      <label for="inputAddTel" class="col-sm-2 col-form-label">Address With Tel. No</label>
      <div class="col-sm-10">
        <textarea
          type="text"
          v-model="addTel"
          class="form-control"
          id="inputAddTel"
        />
        <p>{{ errorAddTel }}</p>
      </div>
    </div>

    <button type="submit" class="btn btn-success">Submit</button>
  </form>
</template>

<script>
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export default {
  name: "FormValidation",
  // data(){
  //     return{
  //         // name: "" 
  //     }
  // },
  data() {
    let student = {
      name: ""
    };
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = yup.object({
      name: yup.string().required('Name is required').min(5),
      dob: yup.date().required('date is required'),
      place: yup.string().required('place of birth is required'),
      lang: yup.string().required('First Language is required'),
      address: yup.string().required('Address is required'),
      fname: yup.string().required("father's name is requied"),
      email: yup.string().email('must be a valid email').required("father's email is required"),
      qualification: yup.string().required('qualification is required'),
      profession: yup.string().required('Profession is required'),
      designation: yup.string().required('designation is required'),
      phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10, "too short").max(10, "too long"),
      relation: yup.string().required('relation is requried'),
      ephone: yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10, "too short").max(10, "too long"),
      reference: yup.string().required('reference is required'),
      addTel: yup.string().required('address and phone number is required')
    });

    const { handleSubmit } = useForm({
      validationSchema,
    });

    const { value: name, errorMessage: errorName } = useField("name");
    const { value: dob, errorMessage: errorDob } = useField("dob");
    const { value: place, errorMessage: errorPlace } = useField("place");
    const { value: lang, errorMessage: errorLang } = useField("lang");
    const { value: address, errorMessage: errorAddress } = useField("address");
    const { value: fname, errorMessage: errorFname } = useField("fname");
    const { value: email, errorMessage: errorEmail } = useField("email");
    const { value: qualification, errorMessage: errorQualification } = useField("qualification");
    const { value: profession, errorMessage: errorProfession } = useField("profession");
    const { value: designation, errorMessage: errorDesignation } = useField("designation");
    const { value: phone, errorMessage: errorPhone } = useField("phone");
    const { value: relation, errorMessage: errorRelation } = useField("relation");
    const { value: ephone, errorMessage: errorEphone } = useField("ephone");
    const { value: reference, errorMessage: errorReference } = useField("reference");
    const { value: addTel, errorMessage: errorAddTel } = useField("addTel");

    student.name = name;

    const submit = handleSubmit((values) => {
      const data = {
        name: values.name,
        dob: values.dob,
        birthPlace: values.place,
        firstLanguage: values.lang,
        address: values.address,
        father:{
            name: values.fname,
            email: values.email,
            qualification: values.qualification,
            profession: values.profession,
            designation: values.designation,
            phone: values.phone
        },
        emergencyContact:{
            relation: values.relation,
            phone: values.ephone
        },
        referenceDetail: {
            referenceThrough: values.reference,
            referenceContact: values.addTel
        }
      };
      console.log(data);
    });

    return {
      student,
      submit,
      email,
      errorEmail,
      name,
      errorName,
      dob,
      errorDob,
      place,
      errorPlace,
      lang,
      errorLang,
      address,
      errorAddress,
      fname,
      errorFname,
      qualification,
      errorQualification,
      designation,
      errorDesignation,
      profession,
      errorProfession,
      phone,
      errorPhone,
      relation,
      errorRelation,
      ephone,
      errorEphone,
      reference,
      errorReference,
      addTel,
      errorAddTel,
    };
  },
};
</script>

<style scoped>
    p{
        color: red;
    }
</style>
