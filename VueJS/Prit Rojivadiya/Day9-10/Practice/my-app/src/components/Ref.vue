<template>
  {{fname}} {{lname}}
  <br><br>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'ref',
    setup(){
        const fname = ref('Prit')
        const lname = ref('Rojivadiya')
        lname.value = 'Patel'
        // console.log(lname) // return object

        return{
            fname,
            lname
        }
    }
}
</script>

<style>

</style>