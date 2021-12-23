<template>
  <label v-if="label">{{ label }}: &nbsp;</label>
  <br>
  <select 
    :value="modelValue" 
    class="field" 
    v-bind="{
        ...$attrs,
        onChange: ($event)=>{ $emit('update:modelValue', $event.target.value) }
    }"
  >
    <option v-for="option in options"
        :value="option"
        :key="option"    
        :selected="option === modelValue"            
    >{{option}}</option>
  </select>
  <p v-if="error">{{error}}</p>
  <br>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    label: {
      type: String,
      default: ""
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    options: {
        type: Array,
        required: true
    },
    error: {
        type: String,
        default: ''
    }
  },
};
</script>
