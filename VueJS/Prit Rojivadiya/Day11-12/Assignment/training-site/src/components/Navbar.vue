<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/html">HTML</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/css">CSS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/bootstrap">Bootstrap</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
nav {
  margin: 0;
  padding: 0;
  top: 0;
  position: sticky;
}
.navbar {
  background-color: #f1f1f1;
  padding: 5px;
}
.nav-item {
  display: inline-block;
  list-style: none;
  padding: 5px;
  margin: 10px 5px;
}
a {
  text-decoration: none;
  color: black;
}
ul a {
  text-decoration: none;
  color: black;
  line-height: 8px;
}
.router-link-active,
.router-link-exact-active {
  color: blue;
  font-weight: bold;
}

</style>
