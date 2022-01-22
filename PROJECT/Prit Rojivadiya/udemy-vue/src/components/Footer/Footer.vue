<template>
        <footer class="bg-dark text-white p-5" id="IndexFooter">
        <div class="row">
            <div class="col-sm-3 col-12">
                <ul class="list-unstyled">
                    <li><a href="">Udemy Business</a></li>
                    <li><a href="">Teach on Udemy</a></li>
                    <li><a href="">Get the app</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>
            <div class="col-sm-3 col-12">
                <ul class="list-unstyled">
                    <li><a href="">Career</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Help and Support</a></li>
                    <li><a href="">Affiliate</a></li>
                </ul>
            </div>
            <div class="col-sm-3 col-12 me-md-auto">
                <ul class="list-unstyled">
                    <li><a href="">Terms</a></li>
                    <li><a href="">Privacy policy</a></li>
                    <li><a href="">Sitemap</a></li>
                </ul>
            </div>
            <div class="col-sm-3 col-12 text-sm-end">
                <button class="btn btn-outline-light" data-bs-target="#langModal" data-bs-toggle="modal"><i
                        class="fas fa-globe"></i> English</button>
            </div>
        </div>
        <div class="row mt-5 justify-content-between">
            <div class="col-sm-4">
                <img src="../../assets/logo-udemy-inverted.svg" height="44px" width="100px" alt="">
            </div>
            <div class="col-sm-4 text-sm-end">
                <p> © Copyrigt since 2021</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footer'
}
</script>

<style scoped >
a{
    color: white;
    text-decoration: none;
}
</style>