<template>
  <div class="menu">
    <div class="div1">Home</div>
    <div class="div2">Services</div>
    <div class="div3">About</div>
    <div class="div4">Contact</div>
  </div>
</template>

<script>
export default {
  name: "assignment",
};
</script>

<style>
.menu {
  display: flex;
  flex-wrap: wrap;
  background-color: #f1f1f1;
}
.menu > div {
  padding: 10px;
  /* flex: 25%; */
  text-align: center;
}

.menu > div:hover {
  background-color: red;
  color: white;
  cursor: pointer;
}

@media (max-width: 800px) {
  .menu > div {
    flex: 25%;
  }
}

@media (max-width: 500px) {
  .menu > div {
    flex: 50%;
  }
}
@media (max-width: 350px) {
  .menu > div {
    flex: 100%;
  }
}
</style>
