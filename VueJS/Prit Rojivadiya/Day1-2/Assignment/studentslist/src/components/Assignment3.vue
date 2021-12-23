<template>
    <h1 class="text-danger mt-5">Assignment 3</h1>
    radius: <input type="number" v-model="radius">
    <br><br>
    Area of circle is: {{radius*radius*3.14}}
</template>

<script>
    export default{
        name: 'Assignment3',
        data(){
            return{
                radius: ""
            }
        }
    }
</script>

<style scoped>

</style>