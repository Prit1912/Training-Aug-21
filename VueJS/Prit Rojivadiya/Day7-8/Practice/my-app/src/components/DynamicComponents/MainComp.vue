<template>
    <br><br><br>
    <button class="btn btn-success" @click="currComp = 'CompA'">Comp. A</button>
    <button class="btn btn-success" @click="currComp = 'CompB'">Comp. B</button>
    <button class="btn btn-success" @click="currComp = 'CompC'">Comp. C</button>
    <br><br>
    <component :is="currComp" />
    <br><br>
</template>

<script>
import CompA from './CompA.vue'
import CompB from './CompB.vue'
import CompC from './CompC.vue'
    export default {
        name: 'MainComp',
        components:{
            CompA,
            CompB,
            CompC
        },data(){
            return{
                currComp: "CompA"
            }
        }
    }
</script>