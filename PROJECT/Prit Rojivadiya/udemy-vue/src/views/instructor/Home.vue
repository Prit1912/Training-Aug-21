<template>

  <div v-if="this.$store.state.user.isLoggedIn" class="container my-4">
    <div class="row">
      <div class="col-sm-8 col-12">
        <h3>
          Welcome, <b style="color: blueviolet"> {{ name }} </b>
        </h3>
      </div>
    </div>

    <div class="row my-5">
      <div class = "actions">
        <p> <router-link :to="{name: 'instCourses'}" > <i class="fas fa-arrow-circle-right"></i> Uploaded Courses</router-link></p>
        <p> <router-link :to="{name: 'addCourse'}" > <i class="fas fa-arrow-circle-right"></i> Add Course</router-link></p>
    </div>
    </div>
  </div>  

  <div class="container">
    <div class="row my-5">
       <h4>As an <span style="color: blueviolet" > Instructor </span> what can you do?</h4>
      <ul class="list-unstyled" >
        <li> <i class="fas fa-arrow-circle-right"></i> Make a course</li>
        <li> <i class="fas fa-arrow-circle-right"></i> Upload it on udemy</li>
        <li> <i class="fas fa-arrow-circle-right"></i> Set a Price</li>
        <li> <i class="fas fa-arrow-circle-right"></i> Check who bought the course</li>
        <li> <i class="fas fa-arrow-circle-right"></i> See reviews</li>
        <li> <i class="fas fa-arrow-circle-right"></i> Update course</li>
        <li> <i class="fas fa-arrow-circle-right"></i> Help students</li>
      </ul>
    </div>
  </div>

</template>

<script>
import userData from '../../services/users';
export default {
    name: 'instHome',
    data(){
      return{
        name: "",
      }
    },
    created(){
      userData.userInfo().then((res)=>{
        this.name = res.data.name
      })
    }
}
</script>

<style scoped >
  a{
   color: blueviolet;
   transition: all 0.2s ease-in; 
  }
  a:hover{
    font-size: 30px;
  }
</style>