<template>
     <p>Font size will change when screen width is less than 600px</p>
</template>

<script>
export default {
  name: "Practice4",
};
</script>

<style scoped>
p {
  font-size: 80px;
}
@media screen and (max-width: 600px) {
  p {
    font-size: 30px;
  }
}
</style>
