<template>
  <div class="flex_container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</template>

<script>
export default {
  name: "practice5",
};
</script>

<style>
.flex_container {
  display: flex;
  justify-content: space-evenly;
  background-color: dodgerblue;
}

.flex_container > div {
  width: 100px;
  /* height: 100px; */
  background-color: firebrick;
  text-align: center;
  line-height: 100px;
  font-size: 30px;
}
</style>
