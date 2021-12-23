<template>
  <div class="container">
    <Practice1 msg="First Vue App" />
    <TodoList />
    <TemplateSyntax />
    <Calc />
    <DataAndMethods />
  </div>
</template>

<script>
import Practice1 from "./components/Practice1.vue";
import TodoList from "./components/todolists/TodoList.vue";
import TemplateSyntax from "./components/TemplateSyntax.vue";
import Calc from './components/calculator/calc.vue';
import DataAndMethods from './components/DataAndMethods.vue'
export default {
  name: "App",
  components: {
    Practice1,
    TodoList,
    TemplateSyntax,
    Calc,
    DataAndMethods
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
