<template>
  <!-- <label>{{label}}</label>: 
    <br>
    <input
        v-bind="$attrs"
        :placeholder="label"
        class="field"
        :value="modelValue"
        @input="$emit('update:modelValue',$event.target.value)"
    >
    <p v-if="error">{{error}}</p>
    <br> -->

  <div class="row mb-3">
    <label class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input
        class="field"
        @input="$emit('update:fname', $event.target.value)"
      />
      <!-- <p>{{ errorName }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      dafault: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
    mValue: String
  },
  created(){
      console.log(this.$attrs)
      console.log(this.modelValue)
  }
};
</script>
