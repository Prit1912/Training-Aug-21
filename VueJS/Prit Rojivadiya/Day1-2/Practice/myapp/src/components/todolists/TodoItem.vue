<template>
  <li>{{item.text}}</li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
      item: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
