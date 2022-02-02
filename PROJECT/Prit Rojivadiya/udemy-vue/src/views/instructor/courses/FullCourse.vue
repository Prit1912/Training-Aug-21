<template>
  <CourseInfo :courseId="this.$router.currentRoute.value.params.id" comp="instructor" />
</template>

<script>
import CourseInfo from '../../../components/Courses/CourseInfo.vue'
export default {
    name: 'fullCourse',
    components:{
        CourseInfo
    },
    created(){
        console.log(this.$router.currentRoute.value.params.id)
    }
}
</script>

<style>

</style>