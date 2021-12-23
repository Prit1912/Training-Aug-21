<template>
  <div class="container">
  <Events />
  <br><br>
  <Forms />
  <br><br>
  <SimpleForm />
  </div>
</template>

<script>

import Events from './components/Events.vue'
import Forms from './components/Forms.vue'
import SimpleForm from './view/SimpleForm.vue'

export default {
  name: 'App',
  components: {
    Events,
    Forms,
    SimpleForm
  }
}
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
