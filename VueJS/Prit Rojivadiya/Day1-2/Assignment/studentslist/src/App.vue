<template>
  <div class="container">
    <StudentsList />
    <Assignment1 />
    <Assignment2 />
    <Assignment3 />
    <Assignment4 />
  </div>
</template>

<script>
import StudentsList from "./components/StudentsList.vue";
import Assignment1 from './components/Assignment1.vue'
import Assignment2 from './components/Assignment2.vue'
import Assignment3 from './components/Assignment3.vue'
import Assignment4 from './components/Assignment4.vue'

export default {
  name: "App",
  components: {
    StudentsList,
    Assignment1,
    Assignment2,
    Assignment3,
    Assignment4
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
