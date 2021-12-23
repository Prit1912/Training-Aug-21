<template>
    <input 
        type="text"
        :value="fname"
        @input="$emit('update:fname',$event.target.value)"
    >
</template>

<script>
    export default{
        name: 'CustomEvent2',
        props: {
            fname: {
                type: [String, Number],
                default: ""
            },
            // if fname is not provided while calling functin (<CustomEvent2 v-model="name" />) then default will be 'modelValue'
            // modelValue: {
            //     type: [String,Number],
            //     default: ""
            // }
        }
    }
</script>