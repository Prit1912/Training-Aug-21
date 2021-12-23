<template>
    <h3>Counter: {{count}}</h3>
    <button class="btn btn-primary" @click="increment" >Increment</button>&nbsp;
    <button class="btn btn-primary" @click="decrement" >Decrement</button>
</template>

<script>
    export default{
        name: 'DataAndMethods',
        data(){
            return{
                count: 0
            }
        },
        methods: {
            increment(){
                this.count++;
            },
            decrement(){
                this.count--;
            }
        }
    }

</script>

<style scoped>

</style>