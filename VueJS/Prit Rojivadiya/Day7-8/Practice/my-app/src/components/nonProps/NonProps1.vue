<template>

  <!-- by default non props attribute applys to root element -->
  <div class="date-picker">
    <!-- apply all non props attribute -->
    <input type="datetime-local" v-bind="$attrs" />
    <br />
    <!-- apply specific non prop attribute -->
    <input type="datetime-local" :class="$attrs.class" />
  </div>

</template>

<script>
export default {
  inheritAttrs: false,
  name: "NonProps1",
  created() {
    console.log(this.$attrs);
  },
};
</script>
