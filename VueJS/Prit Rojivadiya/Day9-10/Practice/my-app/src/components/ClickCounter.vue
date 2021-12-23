<template>
    <!-- Reusability with mixin -->
    <h3>Reusability with mixin</h3>
    <div class="counter">
        <button @click="incCount" class="btn btn-success" > Clicked {{count}} Times </button>
    </div>
</template>

<script>
import CounterMixin from '../mixins/counter'
export default {
    name: 'clickConter',
    mixins: [CounterMixin]
    
}
</script>

<style>

</style>