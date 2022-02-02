<template>
  <UpdateCourse :id="id"/>
</template>

<script>
import UpdateCourse from '../../../components/Instructor/UpdateCourse.vue'
export default {
    name: 'updateCourse',
    props: ['id'],
    components:{
        UpdateCourse
    }
}
</script>

<style>

</style>