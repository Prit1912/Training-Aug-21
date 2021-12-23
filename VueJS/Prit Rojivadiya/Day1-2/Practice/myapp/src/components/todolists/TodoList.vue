<template>
<ul>
    <TodoItem v-for="(todo) in todoItems" v-bind:item="todo" v-bind:key="todo.id" />
</ul>
</template>

<script>

import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',
  components: {
      TodoItem
  },
  data(){
      return{
          todoItems: [
              {id: 0, text: "learn Vue"},
              {id: 1, text: "learn React"},
              {id: 2, text: "learn Angular"}
          ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
