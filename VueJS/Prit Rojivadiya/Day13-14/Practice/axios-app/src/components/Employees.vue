<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="emp in EmpArr" :key="emp.id">
        <td>{{ emp.id }}</td>
        <td>{{ emp.name }}</td>
        <td>{{ emp.address }}</td>
        <td>{{ emp.phone }}</td>
        <td>{{ emp.email }}</td>
        <td>
          <button class="btn btn-danger" @click="deleteEmp(emp.id)">
            Delete
          </button>
          <button class="btn btn-warning">
            <router-link :to="{name: 'updateEmployee', params: {id: emp.id}}" >Update</router-link>
          </button>
          <button class="btn btn-info">
              <router-link :to="{name: 'empDetail', params: {id: emp.id}}">View</router-link>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import empData from '../services/empService'
export default {
    name: 'Employees',
    data(){
        return{
            EmpArr: []
        }
    },
    methods:{
        getAllEmp(){
            empData.getEmployees().then((res)=>{
                this.EmpArr = res.data;
            }).catch((err)=>{
            console.log(err);
            })
        },

        refreshList(){
            this.getAllEmp();
        },

        deleteEmp(id){
            empData.deleteEmployee(id);
            this.$router.go()
        }
    },
    mounted(){
        this.refreshList();
    }
}
</script>

<style></style>
