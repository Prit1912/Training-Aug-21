<template>
  <div class="div1">
    <h2>This div will be hidden for screen size of less than 600px</h2>
  </div>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime aut
    eveniet voluptate quod. Labore dolorem nostrum consequuntur at placeat
    earum, ipsa temporibus neque dolores eveniet tempore laboriosam ullam? Quos.
  </p>
</template>

<script>
export default {
  name: "Practice3",
};
</script>

<style scoped>
.div1 {
  background-color: burlywood;
  padding: 10px;
}
@media screen and (max-width: 600px) {
  .div1 {
    display: none;
  }
}
</style>
