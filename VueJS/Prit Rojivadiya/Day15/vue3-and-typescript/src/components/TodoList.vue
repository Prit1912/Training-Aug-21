<template>
  <div v-for="todo in todoItems" :key="todo.id">
    {{todo.id}} {{todo.item}}
  </div>
   {{firstTodo}}
</template>

<script lang="ts">
import todoType from '../types'
export default {
    name: 'todoList',
    data(){
        let todoItems:todoType[] = [
            {
                id:1,
                item: "learn vue"
            },
            {
                id: 2,
                item: "learn react"
            }
        ]
        return{
            todoItems
        }
    },
    computed:{
        firstTodo(){
            return this.todoItems[0];
        }
    }
}
</script>

<style>

</style>