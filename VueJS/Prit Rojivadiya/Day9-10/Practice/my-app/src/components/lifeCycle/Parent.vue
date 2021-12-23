<template>
  Parent Component
  <br />
  <button class="btn btn-sm btn-danger" @click="showChild = !showChild">
    Toggle Child
  </button>
  <br />
  <Child v-if="showChild" />
  <br />
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "Parent",
  components: {
    Child,
  },
  data() {
    return {
      showChild: true,
      val: "hi",
    };
  },
  beforeCreate() {
    console.log("parent - before created");
    console.log(this.val);
  },
  created() {
    console.log("parent - created");
    this.val = "hello"
    console.log(this.val);
  },
  beforeMount() {
    console.log("parent - befor mount");
  },
  mounted() {
    console.log("parent - mounted");
  },
  beforeUpdate() {
    console.log("parent - befor update");
  },
  updated() {
    console.log("parent - update");
  },
  beforeUnmount() {
    console.log("parent - befor unmount");
  },
  unmounted() {
    console.log("parent - unmounted");
  },
};
</script>

<style></style>
