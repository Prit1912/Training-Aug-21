<template>
  <form action="">
    <input type="text" v-model="username" placeholder="username">
    <br><br>
    <input type="password" v-model="password" placeholder="password">
    <br><br>
    <button @click="login()" class="btn btn-success" >Login</button>
  </form>
</template>

<script>
import store from '../store/index'
export default {
    name: 'login',
    data(){
      return{
        username: null,
        password: null
      };
    },
    methods:{
      login(){
        store.user = this.username;
        this.$router.push("/user")
      }
    }
}
</script>

<style>

</style>