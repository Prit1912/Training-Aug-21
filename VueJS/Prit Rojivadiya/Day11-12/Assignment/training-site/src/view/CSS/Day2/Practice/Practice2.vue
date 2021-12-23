<template>
  <div id="div1" class="divs"></div>
        <div id="div2" class="divs"></div>
        <div id="div3" class="divs"></div>
</template>

<script>
export default {
    name: 'practice2'
}
</script>

<style scoped >
 .divs{
            height: 100px;
            width: 100px;
        }
        #div1{
            background-color: yellow;
            /* top: 50px; */
            position: absolute;
        }
        #div2{
            background-color: blue;
            top: 50px;
            left: 50px;
            position: relative;
        }
        #div3{
            background-color: red;
            bottom: 0;
            right: 50px;
            position: fixed;
        }
</style>