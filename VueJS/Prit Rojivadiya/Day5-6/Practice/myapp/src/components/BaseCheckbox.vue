<template>
    <input 
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"    
        class="mx-2"
    />
    <label v-if="label" >{{label}}</label>
</template>

<script>
    export default{
        name: 'BaseCheckbox',
        props: {
            label:{
                type: String,
                default: ''
            },
            modelValue: {
                type: Boolean,
                default: false
            }
        }
    }
</script>