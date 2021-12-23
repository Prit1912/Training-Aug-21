<template>
    <h1 class="mt-5 text-danger">Assignment 4</h1>
    <form @submit.prevent="displayData">
        name: <input type="text" v-model="name" ><br><br>
        address: <input type="text" v-model="address" ><br><br>
        phone: <input type="number" v-model="phone" ><br><br>
        email: <input type="email" v-model="email" ><br><br>
        password: <input type="text" v-model="password" ><br><br>
        <button class="btn btn-success">Sign up</button>
    </form>
    <br><br>
    <div v-if="show" >
        <p>Name: {{name}}</p>
        <p>Address: {{address}}</p>
        <p>Phone: {{phone}}</p>
        <p>Email: {{email}}</p>
        <p>Password: {{password}}</p>
    </div>
</template>

<script>
    export default{
        name: "Assignment4",
        data(){
            return{
                name: "",
                address: "",
                phone: "",
                email: "",
                password: "",
                show: false
            }
        },
        methods:{
            displayData(){
                this.show = true
            }
        }
    }
</script>

<style scoped>

</style>