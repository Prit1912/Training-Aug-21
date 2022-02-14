<template>
        <input
          v-model="search"
          class="form-control border border-dark me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
</template>

<script>
export default {
    name: 'searchbar',
    data(){
      return{
        search: ""
      }
    },
    updated(){
      this.$emit('query',this.search)
    }
}
</script>

<style>

</style>