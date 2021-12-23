<template>
    <div class="row">
        <div class="col-sm-4 col-12">
            <br>
            <h1 style = "color: rgb(0, 0, 255);">Frontend Training</h1>
            <br>
            <ul class="list-unstyled">
                <li>&nbsp;&nbsp;&nbsp;&nbsp; HTML</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp; CSS</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp; Javascript</li>
            </ul>
        </div>
        <div class="col-sm-8 col-12">
            <br>
            <img src="https://github.com/Prit1912/Training-Aug-21/blob/main/PROJECT/Prit%20Rojivadiya/Training%20Site/assets/radixweb_logo.png?raw=true" class="img-fluid" height="500px" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>
 img {
      animation: rotate 5s linear infinite;
    }

    @keyframes rotate {
      0%{
        transform: rotate(0deg);  
      }
      25%{
        transform: rotate(30deg);
      }
      50% {
        transform: rotate(0deg);
        margin-left: 100px;
      }
      75% {
        transform: rotate(-30deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
</style>