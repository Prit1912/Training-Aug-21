<template>
    <div class="counter">
        <h3 @mouseover="incCount"> Hovered {{count}} Times </h3>
    </div>
</template>

<script>
import CounterMixin from '../mixins/counter'
export default {
    name: 'HoverConter',
    mixins: [CounterMixin]
    
}
</script>
