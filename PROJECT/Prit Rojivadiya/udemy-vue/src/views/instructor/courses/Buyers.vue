<template>
  <Buyers :courseId="this.$router.currentRoute.value.params.id" />
</template>

<script>
import Buyers from '../../../components/Instructor/Buyers.vue'
export default {
    name: 'buyers',
    components:{
        Buyers
    }
}
</script>

<style>

</style>