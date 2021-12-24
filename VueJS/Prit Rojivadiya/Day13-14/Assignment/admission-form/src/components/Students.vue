<template>
<div class="table-responsive" >
      <table class="table table-bordered" >
      <thead>
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Place of Birth</th>
              <th>Address</th>
              <th>Father</th>
              <th>Mother</th>
              <th>EmergencyContact</th>
              <th>ReferenceDetail</th>
              <th>Action</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="stu in students" :key="stu.id">
              <td>{{stu.id}}</td>
              <td>
                  <p>FirstName: {{stu.name.firstName}}</p>
                  <p>MiddleName: {{stu.name.middleName}}</p>
                  <p>LastName: {{stu.name.lastName}}</p>
              </td>
              <td>{{stu.dob}}</td>
              <td>{{stu.placeOfBirth}}</td>
              <td>
                  <p>City: {{stu.address.city}}</p>
                  <p>State: {{stu.address.state}}</p>
                  <p>Country: {{stu.address.country}}</p>
                  <p>Pin: {{stu.address.pin}}</p>
              </td>
              <td>
                  <p>firstName: {{stu.father.fullName.firstName}}</p>
                  <p>middleName: {{stu.father.fullName.middleName}}</p>
                  <p>lastName: {{stu.father.fullName.lastName}}</p>
                  <p>email: {{stu.father.email}}</p>
                  <p>qualification: {{stu.father.qualification}}</p>
                  <p>profession: {{stu.father.profession}}</p>
                  <p>designation: {{stu.father.designation}}</p>
                  <p>phone: {{stu.father.phone}}</p>
              </td>
              <td>
                  <p>firstName: {{stu.mother.fullName.firstName}}</p>
                  <p>middleName: {{stu.mother.fullName.middleName}}</p>
                  <p>lastName: {{stu.mother.fullName.lastName}}</p>
                  <p>email: {{stu.mother.email}}</p>
                  <p>qualification: {{stu.mother.qualification}}</p>
                  <p>profession: {{stu.mother.profession}}</p>
                  <p>designation: {{stu.mother.designation}}</p>
                  <p>phone: {{stu.mother.phone}}</p>
              </td>
              <td>
                  <p>Relation: {{stu.emergencyContact.relation}}</p>
                  <p>Number: {{stu.emergencyContact.number}}</p>
              </td>
              <td>
                  <p>referenceThrough: {{stu.referenceDetail.referenceThrough}}</p>
                  <p>addressWithTel: {{stu.referenceDetail.addressWithTel}}</p>
              </td>
              <td>
                  <button class="btn btn-danger" @click="deleteStu(stu.id)">Delete</button>
                  <button class="btn btn-warning" >
                      <router-link :to="{name: 'UpdateStudent', params: {id: stu.id}}" >Edit</router-link>
                  </button>
                  <button class="btn btn-info">
                      <router-link :to="{name: 'student', params: {id: stu.id}}" >View</router-link>
                  </button>
              </td>
          </tr>
      </tbody>
  </table>
</div>
</template>

<script>
import studentData from '../services/studentData'
export default {
    name: 'Students',
    data(){
        return{
            students: {}
        }
    },
    methods:{
        deleteStu(id){
            console.log(typeof id)
            studentData.deleteStudent(id);
            this.$router.go();
        }
    },
    mounted(){
        studentData.getStudents().then((res)=>{
            this.students = res.data;
        }).catch((err)=>{
            console.log(err);
        })
    }

}
</script>

<style scoped>

</style>