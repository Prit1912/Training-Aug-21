<template>Child Component <br></template>

<script>
export default {
  name: "Child",
  beforeCreate() {
    console.log("child - before created");
  },
  created() {
    console.log("child - created");
  },
  beforeMount() {
    console.log("child - befor mount");
  },
  mounted() {
    console.log("child - mounted");
  },
  beforeUpdate() {
    console.log("child - befor update");
  },
  updated() {
    console.log("child - update");
  },
  beforeUnmount() {
    console.log("child - befor unmount");
  },
  unmounted() {
    console.log("child - unmounted");
  },
};
</script>

<style></style>
