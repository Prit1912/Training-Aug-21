<template>
  <div class="routes">
    <router-link :to="{name: 'employees'}">Employees</router-link> | 
    <router-link :to="{name: 'addEmployee'}">Add-Employee</router-link>
  </div>
  <br>
    <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  a{
    color: blue;
    text-decoration: none;
  }
  .router-link-active, .router-link-exact-active{
    color: green;
    font-weight: bold;
  }
</style>
