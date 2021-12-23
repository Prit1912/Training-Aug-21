<template>
  <Slot1>
    <template v-slot:header> Header </template>

    {{ val }}

    <template #footer> Footer </template>

  </Slot1>

    <br><br>
    
</template>

<script>
import Slot1 from "./Slot1.vue";
export default {
  name: "Slot",
  components: {
    Slot1,
  },
  data() {
    return {
      val: "hello",
    };
  },
};
</script>
