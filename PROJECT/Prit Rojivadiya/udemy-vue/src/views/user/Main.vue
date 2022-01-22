<template>
    <UserNavbar />
        <router-view></router-view>
    <Footer />
</template>

<script>
import UserNavbar from '../../components/Navbar/UserNavbar.vue'
import Footer from '../../components/Footer/Footer.vue'

export default {
    name: 'main',
    components:{
        UserNavbar,
        Footer
    }
}
</script>

<style scoped >
    
</style>