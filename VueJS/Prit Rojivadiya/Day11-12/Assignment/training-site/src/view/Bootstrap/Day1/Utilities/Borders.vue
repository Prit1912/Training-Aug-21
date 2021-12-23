<template>
  <div class="w-25 p-3 text-white bg-danger">Width 25%</div>
  <div class="w-50 p-3 text-white bg-danger">Width 50%</div>
  <div class="w-75 p-3 text-white bg-danger">Width 75%</div>
  <div class="w-100 p-3 text-white bg-danger">Width 100%</div>

  <br />
  <br />

  <div style="height: 100px; background-color: rgba(255, 0, 0, 0.1)">
    <div class="h-25 d-inline-block bg-success text-white">Height 25%</div>
    <div class="h-50 d-inline-block bg-success text-white">Height 50%</div>
    <div class="h-75 d-inline-block bg-success text-white">Height 75%</div>
    <div class="h-100 d-inline-block bg-success text-white">Height 100%</div>
  </div>
  <br /><br />
  <div class="maindiv">
    <div
      class="border d-inline-block border-primary"
      style="height: 100px; width: 100px"
    >
      div1
    </div>
    <div class="border-top d-inline-block" style="height: 100px; width: 100px">
      div2
    </div>
    <div
      class="border-bottom d-inline-block"
      style="height: 100px; width: 100px"
    >
      div3
    </div>
    <div class="border-left d-inline-block" style="height: 100px; width: 100px">
      div4
    </div>
    <div
      class="border-right d-inline-block"
      style="height: 100px; width: 100px"
    >
      div5
    </div>
  </div>
  <br /><br />
  <div class="maindiv">
    <div
      class="border border-0 d-inline-block"
      style="height: 100px; width: 100px"
    >
      div1
    </div>
    <div
      class="border border-top-0 border-primary d-inline-block"
      style="height: 100px; width: 100px"
    >
      div2
    </div>
    <div
      class="border border-bottom-0 border-success d-inline-block"
      style="height: 100px; width: 100px"
    >
      div3
    </div>
    <div
      class="border border-left-0 d-inline-block"
      style="height: 100px; width: 100px"
    >
      div4
    </div>
    <div
      class="border border-right-0 d-inline-block"
      style="height: 100px; width: 100px"
    >
      div5
    </div>
  </div>

</template>

<script>
export default {
  name: "borders",
};
</script>

<style></style>
