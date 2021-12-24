<template>
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
      {{emailError}}
  </div>
  <br /><br />
  <button class="btn btn-success" @click="submit()">Add</button>
</template>

<script>
import empData from "../services/empService";

export default {
  name: "AddEmployee",
  data() {
    return {
      student: {},
      emailError: ""
    };
  },
  methods: {
    submit() {
      empData.getEmployees().then((res)=>{
            console.log(res.data[0])
            let emp = res.data.find((e)=>{
                return e.email = this.student.email;
            })
            if(emp){
                this.emailError = "Email already registered"
            }
        }).catch((err)=>{
            console.log(err);
        })
      empData.addEmployee(this.student);
    },
  },
};
</script>

<style scoped>
    .errMsg{
        color: red;
    }
</style>
