<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <a class="navbar-brand me-5" href="/">
        <img src="../../assets/logo-udemy.svg" class="logo" alt="" />
      </a>
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
            <router-link :to="{name:'instHome'}">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'howToTeach'}">How to Teach</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'instCourses'}">Courses</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'addCourse'}">UploadCourse</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
          <div v-if="this.$store.state.user.isLoggedIn && (this.$store.state.user.user.role=='instructor')">
            <div>
              <button class="btn btn-dark me-3" type="button" @click="this.$router.push({name: 'instProfile'})" >Profile</button>
              <button class="btn btn-dark" type="button" @click="logout">
                Logout
              </button>
            </div>
          </div>
          <div v-else>
            <button class="btn btn-dark me-3" type="button" @click="this.$router.push('/signup')" >Signup</button>
            <button
              class="btn btn-dark"
              type="button"
              @click="this.$router.push('/login')">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import '../../assets/css/style.css'
export default {
  name: "navbar",
  methods: {
    logout() {
      // this.$store.dispatch("user/setToken", null),
        // this.$store.dispatch("user/setUser", null);
              this.$store.dispatch('user/logout');
      this.$router.push("/login");
    },
  },
};
</script>

<style>

</style>
