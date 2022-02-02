<template>
  <form class="row gx-3 gy-2 align-items-center">
      <div class="col-sm-3">
        <input
          v-model="search"
          class="form-control border border-dark me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <!-- <div class="col-auto">
        <button type="submit" class="btn btn-dark">Submit</button>
      </div> -->
    </form>
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
      this.$emit('query',this.search)
    }
}
</script>

<style>

</style>