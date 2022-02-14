<template>
  <Buyers :courseId="id"/>
</template>

<script>
import Buyers from '../../../components/Instructor/Buyers.vue'
export default {
  name: "buyers",
  props: ["id"],
  components: {
    Buyers
  },
};
</script>

<style></style>
