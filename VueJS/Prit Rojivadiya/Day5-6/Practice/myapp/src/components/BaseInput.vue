<template>
    <label>{{label}}</label>: 
    <br>
    <input
        v-bind="$attrs"
        :placeholder="label"
        class="field"
        :value="modelValue"
        @input="$emit('update:modelValue',$event.target.value)"
    >
    <p v-if="error">{{error}}</p>
    <br>
</template>

<script>
    export default{
        props: {
            label: {
                type: String,
                dafault: ""
            },
            modelValue: {
                type: [String, Number],
                default: ""
            },
            error: {
                type: String,
                default: ''
            }
        }
    }
</script>


