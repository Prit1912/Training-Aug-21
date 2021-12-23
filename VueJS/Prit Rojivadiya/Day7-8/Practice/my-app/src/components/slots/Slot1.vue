<template>

  <!-- named slot -->
  <slot name="header"></slot>
  <br />
  <slot>hi</slot>
  <br />
  <slot></slot>
  <br />
  <slot name="footer"></slot>
  <br />

</template>

<script>
export default {
  name: "Slot1",
};
</script>
