<template>
    <CustomEvent1 @sending-data="start" @data-sent="end" />
    <CustomEvent2 v-model:fname="name" />
    {{name}}
    <br><br><br>
</template>

<script>
import CustomEvent1 from './CustomEvent1.vue'
import CustomEvent2 from './CustomEvent2.vue'
    export default{
        name: 'CustomEvent',
        components:{
            CustomEvent1,
            CustomEvent2
        },
        data(){
            return{
                name: ""
            }
        },
        methods: {
            start(){
                console.log('started sending data')
            },
            end(event){
                console.log('data send successfully ',event)
            }
        }
    }
</script>