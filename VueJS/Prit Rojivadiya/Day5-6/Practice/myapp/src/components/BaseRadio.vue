<template>
    <input type="radio"
           :checked="modelValue === value"
           :value="value"
           @change="$emit('update:modelValue',value)"
           v-bind="$attrs"
           class="mx-2"
    >
    <label v-if="label" >{{label}}</label>
</template>

<script>
    export default{
        name: 'BaseRadio',
        props: {
            label: {
                type: String,
                default: ""
            },
            modelValue: {
                type: [String, Number],
                default: ''
            },
            value: {
                type: [String, Number],
                required: true
            }
        }
    }
</script>