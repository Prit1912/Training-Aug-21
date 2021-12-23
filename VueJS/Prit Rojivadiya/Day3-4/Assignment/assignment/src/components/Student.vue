<template>
    <tr v-if="data.Active == true" :style="data.grade=='A'?bgProperty:'background-color:teal'">
        <td>{{data.id}}</td>
        <td>{{data.name}}</td>
        <td>{{data.age}}</td>
        <td>{{data.average}}</td>
        <td>{{data.grade}}</td>
    </tr>
</template>

<script>
    export default{
        name: 'Student',
        props: {
            data: Object
        },data(){
            return{
                bgProperty: {
                    "background-color": "yellow"
                }
            }
        }
    }
</script>

<style scoped>

</style>