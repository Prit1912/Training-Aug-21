<template>
  <div class="container" >
      <div class="my-5" v-if="this.$store.state.user.isLoggedIn && this.$store.state.user.user.role == 'admin'" >
          <h2> Welcome, <span style="color: blueviolet">{{name}}</span> </h2>
      </div>
  </div>
</template>

<script>
import userData from '../../services/users'
export default {
    name: 'home',
    data(){
        return{
            name: ''
        }
    },
    created(){
        userData.userInfo().then((res)=>{
            this.name = res.data.name
        })
    }
}
</script>

<style>

</style>