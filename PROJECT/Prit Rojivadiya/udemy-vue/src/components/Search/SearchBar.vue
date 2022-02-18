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
        search: this.$store.state.courses.searchedString
      }
    },
    updated(){
      this.$store.dispatch('courses/setSearchedString', this.search)
      // sending searchedString from child to parent component
      this.$emit('query',this.search)
    }
}
</script>

<style>

</style>