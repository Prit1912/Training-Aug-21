<template>
  <!-- v-if for single element-->
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh No</h1>

  <!-- Render multiple elements on condition -->
  <template v-if="show">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>

  <!-- v-else-if -->
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>

  <!-- v-show -->
  <h1 v-show="ok">Hello!</h1>
  <!-- https://v3.vuejs.org/guide/conditional.html#v-show -->
  <!-- In comparison, v-show is much simpler - the element is always rendered regardless of initial condition, with CSS-based toggling. -->

<!-- Generally speaking, v-if has higher toggle costs while v-show has higher initial render costs. So prefer v-show if you need to toggle something very often, and prefer v-if if the condition is unlikely to change at runtime. -->

</template>

<script>
export default {
  name: "ConditionalRender",
  data() {
    return {
      awesome: true,
      show: true,
      type: 'P',
      ok: true
    };
  },
};
</script>

<style scoped></style>
