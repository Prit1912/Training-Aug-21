<template>
<div class="container my-5">
      <div v-if="buyers" >
      <table class="table table-bordered">
          <thead>
              <tr>
                  <th>Index</th>
                  <th>Name</th>
                  <th>Email</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(buyer,index) of buyers" :key="index" >
                  <td>{{index}}</td>
                  <td>{{buyer.user.name}}</td>
                  <td>{{buyer.user.email}}</td>
              </tr>
          </tbody>
      </table>
  </div>
  <h1 v-if="error">{{error}}</h1>
</div>
</template>

<script>
import courseData from '../../services/courses'
export default {
    name: 'buyers',
    props: ['courseId'],
    data(){
        return{
            buyers: "",
            error: ""
        }
    },
    created(){
        courseData.courseBuyers(this.courseId).then((res)=>{
            this.buyers = res.data;
        }).catch((err)=>{
            this.error = err.response.data;
        })
    }
}
</script>

<style>

</style>