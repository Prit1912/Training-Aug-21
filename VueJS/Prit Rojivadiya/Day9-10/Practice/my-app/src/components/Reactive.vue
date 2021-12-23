<template>
  {{ fName }} {{ lName }} <br /><br />
  {{ fname }} {{lname}}
  <br /><br />
    {{count}}
    <button @click="incCount" class="btn btn-warning">Increase</button>
    <br><br>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "Reactive",
  setup() {

    const count = ref(0);
    function incCount(){
        count.value++;
    }

    const fName = ref("Prit");
    const lName = ref("Rojivadiya");

    let name = reactive({
      fname: "Prit",
      lname: "Rojivadiya",
    });

    setTimeout(() => {
      name.fname = "Tirth";
      console.log(name);
    }, 2000);

    return {
      fName,
      lName,
      ...toRefs(name),
      count,
      incCount
    };
  },
};
</script>

<style></style>
