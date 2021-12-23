<template>
  <!-- responsive grid -->
  <div class="row">
    <div
      class="col-sm-6 col-md-4 col-lg-3 col-xl-2"
      style="border: 1px solid #333"
    >
      <ul>
        <li>6 columns on small screen</li>
        <li>4 columns on medium screen</li>
        <li>3 columns on large screen</li>
        <li>2 columns on extra large screen</li>
      </ul>
    </div>
    <div
      class="col-sm-6 col-md-8 col-lg-9 col-xl-10"
      style="border: 1px solid #333"
    >
      <ul>
        <li>6 columns on small screen</li>
        <li>8 columns on medium screen</li>
        <li>9 columns on large screen</li>
        <li>10 columns on extra large screen</li>
      </ul>
    </div>
  </div>

  <!-- equal width -->
  <div class="row">
    <div class="col" style="border: 1px solid black">Equal width</div>
    <div class="col" style="border: 1px solid black">Equal width</div>
    <div class="col" style="border: 1px solid black">Equal width</div>
  </div>

  <!-- edual width multi rows -->
  <div class="row">
    <div class="col" style="border: 1px solid black">
      Equal width multi rows
    </div>
    <div class="col" style="border: 1px solid black">
      Equal width multi rows
    </div>
    <div class="w-100"></div>
    <div class="col" style="border: 1px solid black">
      Equal width multi rows
    </div>
    <div class="col" style="border: 1px solid black">
      Equal width multi rows
    </div>
  </div>

  <!-- auto layout -->
  <div class="row">
    <div class="col" style="border: 1px solid black">Auto layout</div>
    <div class="col-6" style="border: 1px solid black">Auto layout</div>
    <div class="col" style="border: 1px solid black">Auto layout</div>
  </div>

  <!-- equal with stacked -->
  <div class="row">
    <div class="col-sm" style="border: 1px solid black">Equal width stack</div>
    <div class="col-sm" style="border: 1px solid black">Equal width stack</div>
    <div class="col-sm" style="border: 1px solid black">Equal width stack</div>
  </div>

  <!-- ordering -->
  <div class="row">
    <div class="col order-2" style="border: 1px solid black">first</div>
    <div class="col order-3" style="border: 1px solid black">second</div>
    <div class="col order-1" style="border: 1px solid black">third</div>
  </div>

  <!-- offsetting -->
  <div class="row">
    <div class="col-md-4" style="border: 1px solid black">col 4</div>
    <div class="col-md-4 offset-md-4" style="border: 1px solid black">
      offset 4 col 4
    </div>
    <!-- or -->
    <!-- <div class="col-md-4 ml-auto" style="border: 1px solid black">offset 4 col 4</div> -->
  </div>

  <div class="row">
    <div class="offset-3 col-md-3" style="border: 1px solid black">
      offset 3 col 3
    </div>
    <div class="offset-3 col-md-3" style="border: 1px solid black">
      offset 3 col 3
    </div>
  </div>

  <div class="row">
    <div class="ml-auto col-md-3" style="border: 1px solid black">
      offset 3 col 3
    </div>
    <div class="ml-auto col-md-3" style="border: 1px solid black">
      offset 3 col 3
    </div>
  </div>

  <div class="row">
    <div class="col-md-6 m-auto" style="border: 1px solid black">
      offset 3 & 6 col
    </div>
  </div>

  <!-- nesting -->

  <div class="row">
    <div class="col-sm-9 border border-success">
      Level 1 col-sm-9
      <div class="row">
        <div class="col-sm-6 col-4 border border-danger">
          level 2 col-sm-6 col-4
        </div>
        <div class="col-sm-6 col-8 border border-danger">
          level 2 col-sm-6 col-8
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "grid",
};
</script>

<style></style>
