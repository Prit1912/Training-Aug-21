<template>
  <InstNavbar />
    <router-view></router-view>
  <Footer />
</template>

<script>
import InstNavbar from '../../components/Navbar/InstNavbar.vue'
import Footer from '../../components/Footer/Footer.vue'
export default {
    name: "instMain",
    components:{
        InstNavbar,
        Footer
    }
}
</script>

<style>

</style>