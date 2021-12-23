<template>
  <input type="text" placeholder="firstname" v-model="fname" >
  <br><br>
  <input type="text" placeholder="lastname" v-model="lname">
  <br><br>
  <practice-2 :firstname="fname" :lastname="lname" @handleClick="showAlert" />
  <br><br>
</template>

<script>
import {ref} from 'vue'
import Practice2 from './Practice2.vue'
export default {
    name: 'Practice1',
    components:{
        Practice2
    },
    setup(){
        const fname = ref('');
        const lname = ref('');

        function showAlert(name){
            alert(`hello ${name}`)
        }

        return{
            fname,
            lname,
            showAlert
        }
    }
}
</script>

<style>

</style>