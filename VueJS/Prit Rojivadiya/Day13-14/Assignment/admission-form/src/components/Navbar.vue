<template>
      <router-link :to="{name: 'students'}">Students</router-link> | 
      <router-link :to="{name: 'addStudent'}">Add Student</router-link>
</template>

<script>
export default {
    name: 'navbar'
}
</script>

<style >
    a{
    color: blue;
    text-decoration: none;
  }
  .router-link-active, .router-link-exact-active{
    color: green;
    font-weight: bold;
  } 
</style>