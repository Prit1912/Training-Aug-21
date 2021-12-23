<template>
  <div class="my-3">
    {{ item.id }} - {{ item.text }}
    <button class="btn btn-sm btn-danger" @click="removeItem(item.id)" >Remove</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    item: Object,
  },
  methods: {
    removeItem(id){
        this.$emit("removeTodo",id)
    }
  }
};
</script>

<style></style>
