<template>
  <h1>Media Query</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci voluptate
    alias nemo vero ea et, quibusdam laborum, beatae dolorem tempora quo
    reprehenderit. Dolor, rem. Voluptatum ipsum delectus facere quidem libero?
  </p>
</template>

<script>
export default {
  name: "Practice1",
};
</script>

<style scoped >
h1,
p {
  border: 5px solid blue;
}

@media all and (max-width: 500px) {
  h1,
  p {
    border: 5px solid red;
  }
}
</style>
