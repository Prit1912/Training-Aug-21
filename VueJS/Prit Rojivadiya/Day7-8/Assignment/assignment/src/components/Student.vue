<template>
    <tr>
        <td>{{data.id}}</td>
        <td>{{data.name}}</td>
        <td>{{data.age}}</td>
        <td>{{data.average}}</td>
        <td>{{data.grade}}</td>
        <td><button class="btn btn-danger" @click="remove(data.id)" >Remove</button></td>
    </tr>
</template>

<script>
    export default{
        name: 'Student',
        props: {
            data: Object
        },
        methods:{
            remove(id){
                this.$emit('removeStudent',id)
            }
        }
    }
</script>

<style scoped>

</style>