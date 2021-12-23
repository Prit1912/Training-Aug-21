<template>
    <h3>Component B</h3>
    <CompC />
</template>

<script>
import CompC from './CompC.vue'
    export default{
        name: 'CompB',
        components: {
            CompC
        }
    }
</script>