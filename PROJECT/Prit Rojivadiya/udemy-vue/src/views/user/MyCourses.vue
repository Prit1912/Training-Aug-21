<template>
 <div class="container my-5">
    <div class="display-6" style="color: blueviolet" >My Courses</div>
    <div v-if="(items.length == 0)" >
        <h1>Not enrolled in any course yet</h1>
    </div>
    <CourseList v-bind:item="items" comp="myCourses" />
 </div>
</template>

<script>
import courseData from '../../services/courses'
import CourseList from '../../components/Courses/CourseList.vue'
export default {
    name: 'myCourses',
    data(){
      return {
        items: []
      }
    },
    components: {
      CourseList
    },
    mounted(){
      courseData.getEnrolledCourses().then((res)=>{
        console.log(res.data[0].courses);
        this.items = res.data[0].courses
      })
    }
}
</script>

<style>

</style>