<template>
  <Reviews :courseId="this.$router.currentRoute.value.params.id" />
</template>

<script>
import Reviews from '../../../components/Instructor/Reviews.vue'
export default {
    name: 'reviews',
    components:{
        Reviews
    }
}
</script>

<style>

</style>