<template>
  TodoList
  <br>
  {{buttonStyle}}    
  {{todoItem}}   
</template>

<script lang="ts" >
import todoType from '../types'
export default {
    name: 'todoList',
    data(){
        type btn = "Primary" | "Secondary";
        let buttonStyle:btn = "Primary";
        let todoItem: todoType = {
            id: 1,
            item: "learn vue"
        }
        return{
            buttonStyle,
            todoItem
        }
    }
}
</script>

<style>

</style>