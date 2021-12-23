<template>
    <h3>Component A</h3>
    <CompB />
</template>

<script>
import CompB from './CompB.vue'
    export default{
        name: 'CompA',
        components: {
            CompB
        },
        data(){
            return{
                todo: ['item1','item2','item3']
            }
        },
        provide(){
            return{
                todoList: this.todo,
                todoLength: this.todo.length,
                user: 'Prit'
            }
        }
    }
</script>