<template>
<h1 class="mt-5 text-danger" >Assignment 1</h1>
    height: <input type="number" v-model="height" >
    <br><br>
    width: <input type="number" v-model="width" >
    <br><br>
    <button class="btn btn-success" @click="calculate">Calculate</button>
    <br><br>
    Area of Rectangle is: {{areaOfRect}}
</template>

<script>
    export default{
        name: 'Assignment1',
        data(){
            return{
                height: "",
                width: "",
                areaOfRect: ""
            }
        },
        methods:{
            calculate(){
                this.areaOfRect = this.height * this.width
            }
        }
    }
</script>

<style scoped>

</style>