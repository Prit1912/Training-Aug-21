<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8"><FormValidation /></div>
    </div>
  </div>
</template>

<script>
import FormValidation from './components/FormValidation.vue'
export default {
  name: "App",
  components: {
    FormValidation
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
