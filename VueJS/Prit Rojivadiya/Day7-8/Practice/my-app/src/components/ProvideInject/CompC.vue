<template>
    <h3>Component C</h3>
    {{todoList}}
    {{user}}
    {{todoLength}}
</template>

<script>
    export default{
        name: 'CompC',
        inject: ['todoList','user','todoLength']
    }
</script>