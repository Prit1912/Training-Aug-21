<template>
  <h1>Media query with breakpoints</h1>
  <p class="example">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores in vel,
    mollitia dolorem debitis ut magni? Error quidem exercitationem porro
    officiis architecto, numquam non fugiat vel nulla facere cupiditate
    repellendus!
  </p>
</template>

<script>
export default {
  name: "Practice2",
};
</script>

<style scoped>
.example {
  padding: 20px;
  color: white;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .example {
    background: red;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .example {
    background: green;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .example {
    background: blue;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .example {
    background: orange;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .example {
    background: pink;
  }
}
</style>
