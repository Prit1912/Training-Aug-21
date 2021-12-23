<template>
  <input type="text" placeholder="heroName" v-model="heroName" />
  <br /><br />
  <input type="text" placeholder="firstName" v-model="fname" />
  <br /><br />
  <input type="text" placeholder="lastName" v-model="lname" />
  <br /><br />
  {{fullName}}
  <br><br>
</template>

<script>
import { ref, reactive, toRefs, computed } from "@vue/reactivity";

export default {
  name: "VModel",
  setup() {
    const heroName = ref("");
    const name = reactive({
      fname: "",
      lname: "",
    });

    const fullName = computed(function(){
        return `${name.fname} ${name.lname}`
    })

    return {
      heroName,
      ...toRefs(name),
      fullName
    };
  },
};
</script>

<style></style>
