<template>
  <h1 class="text-danger mb-5">Admission Form</h1>
  <form @submit="submit">
      <BaseInput v-model:fname="student.firstname" mValue="fname" />
  </form>
  {{student}}
</template>

<script>
import BaseInput from '../components/BaseInput.vue'
export default {
  name: "MainForm",
  data(){
      return{
          student: {
              firstname: ""
          }
      }
  },
  components:{
      BaseInput
  }
};
</script>
