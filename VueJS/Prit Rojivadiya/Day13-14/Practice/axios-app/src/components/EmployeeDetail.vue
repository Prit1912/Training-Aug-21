<template>
<h3 class="text-danger" >Employee Detail</h3>
<br>
  <div class="card">
      <div class="card-body">
          <p> Employee Id: {{emp.id}} </p>
          <p> Employee Name: {{emp.name}} </p>
          <p> Employee Address: {{emp.address}} </p>
          <p> Employee Phone: {{emp.phone}} </p>
          <p> Employee Email: {{emp.email}} </p>
      </div>
  </div>
</template>

<script>
import empData from '../services/empService'

export default {
    name: 'EmployeeDetail',
    data(){
        return{
            id: this.$route.params.id,
            emp: {}
        }
    },
    mounted(){
        // empData.getEmployee().then((res)=>{
        //     console.log(res);
        // }).catch((err)=>{
        //     console.log(err);
        // })
        empData.getEmployee(this.id).then((res)=>{
            this.emp = res.data;
        }).catch((err)=>{
            console.log(err);
        })
    }
}
</script>

<style scoped>
    .card{
        width: 18rem;
        margin: 0 auto;
    }
</style>