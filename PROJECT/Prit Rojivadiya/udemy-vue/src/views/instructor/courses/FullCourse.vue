<template>
  <FullCourse :courseId="this.$router.currentRoute.value.params.id" />
</template>

<script>
import FullCourse from '../../../components/Courses/FullCourse.vue'
export default {
    name: 'fullCourse',
    components:{
        FullCourse
    },
    created(){
        console.log(this.$router.currentRoute.value.params.id)
    }
}
</script>

<style>

</style>