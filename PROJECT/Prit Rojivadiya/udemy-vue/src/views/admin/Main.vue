<template>
  <AdminNavbar />
    <router-view></router-view>
  <Footer />
</template>

<script>
import AdminNavbar from "../../components/Navbar/AdminNavbar.vue";
import Footer from "../../components/Footer/Footer.vue";
export default {
  name: "main",
  components: {
    Footer,
    AdminNavbar
  },
};
</script>

<style></style>
