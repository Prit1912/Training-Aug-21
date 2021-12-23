<template>
  <h3>Router Practice</h3>
     <div id="nav">
      <router-link to="/" >Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link :to="{ name: 'User', params: { userId: 123 }}">User</router-link> |
      <router-link :to="{ name: 'Jobs'}">Jobs</router-link> |
      <router-link :to="{ name: 'login'}">Login</router-link> |
      <router-link :to="{ name: 'user'}">UserInfo</router-link> 
  </div>
  <br>
  <button @click="forward" class="btn btn-success" >Forward</button> &nbsp;
  <button @click="back" class="btn btn-success" >Go Back</button> &nbsp;
  <button @click="redirect" class="btn btn-success" >Redirect</button> &nbsp;
  <br><br>
  <router-view />
</template>

<script>
export default {
  name: "App",
  methods: {
    forward(){
      this.$router.go(1);
    },
    back(){
      this.$router.go(-1);
    },
    redirect(){
      this.$router.push({name: "Home"})
    }
  }
};
</script>

<style>
  a{
    color: blue;
    text-decoration: none;
  }
  .router-link-active, .router-link-exact-active{
    color: green;
    font-weight: bold;
  }
</style>
