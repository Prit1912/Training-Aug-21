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
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'allCourses' }">Courses</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/teach-on-udemy">Teach on Udemy</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
          <div
            v-if="
              this.$store.state.user.isLoggedIn &&
              this.$store.state.user.user.role == 'user'
            "
          >
            <div>
              <button
                class="btn btn-dark me-3"
                type="button"
                @click="this.$router.push({ name: 'profile' })"
              >
                Profile
              </button>
              <button class="btn btn-dark" type="button" @click="logout">
                Logout
              </button>
            </div>
          </div>
          <div v-else>
            <button
              class="btn btn-dark me-3"
              type="button"
              @click="this.$router.push({ name: 'signup' })"
            >
              Signup
            </button>
            <button
              class="btn btn-dark"
              type="button"
              @click="this.$router.push({ name: 'login' })"
            >
              Login
            </button>
          </div>
        </form>
        <div
          v-if="
            this.$store.state.user.isLoggedIn &&
            this.$store.state.user.user.role == 'user'
          "
          class="buttons mt-1"
        >
          <button class="btn" @click="this.$router.push({ name: 'cart' })">
            <div class="tooltip">
            <i class="fas fa-shopping-cart fa-2x"></i>
              <span class="tooltiptext">Cart</span>
            </div>
          </button>
          <button class="btn" @click="this.$router.push({ name: 'wishlist' })">
            <div class="tooltip">
            <i class="fas fa-heart fa-2x"></i>
              <span class="tooltiptext">Wishlist</span>
            </div>
          </button>
          <button
            class="btn me-5"
            @click="this.$router.push({ name: 'myCourses' })"
          >
            <div class="tooltip">
            <i class="fas fa-list-ul fa-2x"></i>
              <span class="tooltiptext">My Courses</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import "../../assets/css/style.css";
export default {
  name: "navbar",
  methods: {
    logout() {
      // this.$store.dispatch("user/setToken", null),
      //   this.$store.dispatch("user/setUser", null);
      this.$store.dispatch("user/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
