<template>
  
  <h1 class="text-danger">Todo List</h1>
  <form @submit.prevent="addTodoItem">
    <input type='text' v-model="inputValue" placeholder="Add todo item"/>
    <button class="btn btn-success">Add</button>
  </form>
  <h3 class="my-3" v-if="todoItems.length == 0">Todo List is Empty</h3>
  <TodoItem v-for="todo in todoItems" :key="todo.id" :item="todo" @removeTodo = "removeFromTodo($event)"></TodoItem>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },data(){
    return{
      inputValue: "",
      todoItems: [
        {id: 1, text: 'Learn Vue'},
        {id: 2, text: 'Learn React'},
        {id: 3, text: 'Learn Angular'}
      ],
      nextTodoId: 4
    }
  },methods: {
    addTodoItem(){
      const todo = {
        id: this.nextTodoId,
        text: this.inputValue
      }
      this.todoItems.push(todo);
      this.nextTodoId++;
      this.inputValue = "";
    },
    removeFromTodo(id){
      this.todoItems = this.todoItems.filter((i)=>{
        return i.id != id
      })
    }
  }
}
</script>

<style scoped></style>
