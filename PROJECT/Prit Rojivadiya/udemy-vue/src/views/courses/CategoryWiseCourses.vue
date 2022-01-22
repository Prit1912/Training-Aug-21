<template>
  <div class="container">
    <h2 class="my-3" >Search Results for "{{this.$router.currentRoute.value.params.cname}}"</h2>
    <CategoryWiseCourse :cname="this.$router.currentRoute.value.params.cname" />
  </div>
</template>

<script>
import CategoryWiseCourse from '../../components/Courses/CategoryWiseCourse.vue'
export default {
    name: 'categotyWiseCourses',
    components:{
        CategoryWiseCourse
    },
}
</script>

<style>

</style>