<template>
  <div class="container">
    <ClassesAndStyle class="newclass" />
    <ConditionalRender />
    <ListRendering />
    <TodoList />
  </div>
</template>

<script>
import ClassesAndStyle from "./components/ClassesAndStyle.vue";
import ConditionalRender from "./components/ConditionalRender.vue";
import ListRendering from "./components/ListRendering.vue";
import TodoList from "./components/todo/TodoList.vue";

export default {
  name: "App",
  components: {
    ClassesAndStyle,
    ConditionalRender,
    ListRendering,
    TodoList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
