<template>
  <CourseInfo :courseId="this.$router.currentRoute.value.params.id" />
</template>

<script>
import CourseInfo from '../../components/Courses/CourseInfo.vue'
export default {
    name: 'courseInfo',
    components:{
        CourseInfo
    },
    mounted(){
        console.log(this.$router.currentRoute.value.params.id)
    }
}
</script>

<style>

</style>