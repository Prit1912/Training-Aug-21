<template>
    <h1 class="text-danger mt-5">Assignment 2</h1>
    username: <input type="text" v-model="uname"><br><br>
    password: <input type="text" v-model="pwd"><br><br>
    <button class="btn btn-success" @click="validate" >Login</button><br><br>
    {{msg}}
</template>

<script>
    export default{
        name: 'Assignment2',
        data(){
            return{
                uname: "",
                pwd: "",
                msg: ""
            }
        },
        methods:{
            validate(){
                if(this.uname == 'admin' && this.pwd == 'admin'){
                    this.msg = 'login successful'
                }else{
                    this.msg = 'incorrect username or password'
                }
            }
        }
    }
</script>

<style scoped>

</style>