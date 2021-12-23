<template>
  <div class="container">
    <h1 class="text-danger">Students Info</h1>
    <div class="table-responsive">
      <table class="table table-bordered border-success">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Average</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <Student v-for="stu in studentsList" :key="stu.id" :data="stu" @removeStudent="deleteStu" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Student from "./Student.vue";
export default {
  name: "StudentList",
  components: {
    Student,
  },
  data() {
    return {
      studentsList: [
        { id: 1, name: "Prit", age: 21, average: 85, grade: "A", Active: true },
        { id: 2, name: "Man", age: 17, average: 80, grade: "B", Active: true },
        {
          id: 3,
          name: "Tirth",
          age: 14,
          average: 90,
          grade: "A",
          Active: false,
        },
        {
          id: 4,
          name: "Krusha",
          age: 19,
          average: 80,
          grade: "B",
          Active: true,
        },
        { id: 5, name: "Raj", age: 21, average: 85, grade: "A", Active: true },
      ],
    };
  },
  methods:{
      deleteStu(id){
          this.studentsList = this.studentsList.filter((s)=>{
              return s.id != id
          })
      }
  }
};
</script>

<style scoped></style>
