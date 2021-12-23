<template>
  <input type="text" placeholder="fname" v-model="fname" > 
  <input type="text" placeholder="lname" v-model="lname" > 
  <br><br>
</template>

<script>
import {ref, watch} from 'vue'
export default {
    name: 'Watchers',
    setup(){
        const fname = ref('');
        const lname = ref('');
        watch([fname,lname],(newVals, oldVals)=>{
            console.log('fname Old value: ',oldVals[0])
            console.log('fname New value: ',newVals[0])
            console.log('lname Old value: ',oldVals[1])
            console.log('lname New value: ',newVals[1])
        })

        return{
            fname,
            lname
        }
    }
}
</script>