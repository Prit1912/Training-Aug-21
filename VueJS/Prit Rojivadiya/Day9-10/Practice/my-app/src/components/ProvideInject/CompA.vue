<template>
<h3>This is component A</h3>
{{count}}
<br><br>
<h4>Full Name is {{fname}} {{lname}}</h4>
  <comp-b />
</template>

<script>
import {provide, ref, toRefs} from 'vue'
import CompB from './CompB.vue'
import { reactive } from '@vue/reactivity'
export default {
    name: 'CompA',
    components: {
        CompB
    },
    setup(){
        provide('uname','Prit')

        // reactivity
        const count = ref(0)
        const state = reactive({
            fname: 'Prit',
            lname: 'Rojivadiya'
        })

        provide('count', count);
        provide('fullName', state)

        return{
            count,
            ...toRefs(state)
        }
    }
}
</script>

<style>

</style>