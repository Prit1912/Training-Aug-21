<template>
  <h3>Hello {{fullname}}</h3>
  <button class="btn btn-danger" @click="sendEvent" >Click Me</button>
</template>

<script>
import {computed} from 'vue'
export default {
    name: 'Practice2',
    props: ["firstname", "lastname"],
    emits: ['handleClick'],
    setup(props, context){
        
        const fullname = computed(()=>{
            return `${props.firstname} ${props.lastname}`
        })

        function sendEvent(){
            context.emit('handleClick', fullname.value)
        }

        return{
            fullname,
            sendEvent
        }
    }
}
</script>

<style>

</style>