<template>
    <h3>This is component B</h3>
  <comp-c />
</template>

<script>
import CompC from './CompC.vue'
export default {
    name: 'CompB',
    components: {
        CompC
    }
}
</script>

<style>

</style>