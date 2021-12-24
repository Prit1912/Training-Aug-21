<template>
  <h3 class="text-danger">Update Employee</h3>
  <label for="empname">Name: </label>
  <br />
  <input type="text" v-model="student.name" id="empname" />
  <br /><br />
  <label for="empAddress">Address: </label>
  <br />
  <input type="text" v-model="student.address" id="empAddress" />
  <br /><br />
  <label for="empPhone">Phone: </label>
  <br />
  <input type="number" v-model="student.phone" id="empPhone" />
  <br /><br />
  <label for="empMail">Email: </label>
  <br />
  <input type="text" v-model="student.email" id="empMail" />
  <div class="errMsg">
    {{ emailError }}
  </div>
  <br /><br />
  <button class="btn btn-success" @click="update(student.id)">Update</button>
</template>

<script>
import empData from '../services/empService';

export default {
  name: "updateEmployee",
  data() {
    return {
      student: {},
      emailError: "",
      id: this.$route.params.id,
    };
  },
  methods: {
    update(id) {
        empData.updateEmployee(id,this.student);
    },
  },
  mounted() {
    empData
      .getEmployee(this.id)
      .then((res) => {
        this.student = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
    .emailError{
        color: red;
    }
</style>
