<template>
<div class="info col-sm-6 me-auto ms-auto">
  <div class="card">
    <div class="card-header bg-primary text-light">Student Details</div>
    <div class="card-body">
        <h3 class="text-info" >Basic Info</h3>
        <p>firstName: {{ student.name.firstName }}</p>
        <p>middleName: {{ student.name.middleName }}</p>
        <p>lastName: {{ student.name.lastName }}</p>
        <p>DOB: {{student.dob}}</p>
        <p>Place of birth: {{student.placeOfBirth}}</p>
        <p>Address: {{student.address.city}} {{student.address.state}} {{student.address.country}} {{student.address.pin}}</p>
        <p>Contact: {{student.father.phone}}</p>
    </div>
  </div>
  </div>
</template>

<script>
import studentData from "../services/studentData";
export default {
  name: "StudentDetail",
  data() {
    return {
      id: this.$route.params.id,
      student: {}
    };
  },
  created() {
    studentData
      .getStudent(this.id)
      .then((res) => {
        this.student = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>

</style>
