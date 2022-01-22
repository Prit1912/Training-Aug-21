<template>
  <div v-if="course" >
      {{course}}
  </div>
  <h1 v-if="error" >{{error}}</h1>
</template>

<script>
import courseData from '../../services/courses'
export default {
    name: 'fullCourse',
    props: ['courseId'],
    data(){
        return{
            course: "",
            error: ""
        }
    },
    created(){
        courseData.getInstructorCourseById(this.courseId).then((res)=>{
            this.course = res.data
        }).catch((err)=>{
            this.error = err.response.data
        })
    }
}
</script>

<style>

</style>