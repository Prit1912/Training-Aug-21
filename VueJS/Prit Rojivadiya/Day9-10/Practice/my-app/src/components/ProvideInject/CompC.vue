<template>
    <h3>This is component C</h3>
    {{name}}
    <br>
    {{count}}
    <br>
    {{fname}} {{lname}}
    <br><br>
</template>

<script>
import {inject, toRefs} from 'vue'
export default {
    name: 'CompC',
    setup(){
        const name = inject('uname','default username')
        const count = inject('count');
        const fullname = inject('fullName')
        return{
            name,
            count,
            ...toRefs(fullname)
        }
    }
}
</script>

<style>

</style>