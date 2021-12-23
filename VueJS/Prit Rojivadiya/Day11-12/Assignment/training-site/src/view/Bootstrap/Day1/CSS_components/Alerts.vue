<template>
  <!-- alert -->
  <div class="alert alert-primary">
    <strong>Primary</strong> Blog post added
    <a href="#" class="alert-link">Read More</a>
  </div>
  <div class="alert alert-secondary">
    <strong>Secondary</strong> Blog post added
  </div>
  <div class="alert alert-success">
    <strong>Success</strong> Blog post added
  </div>
  <div class="alert alert-danger"><strong>Danger</strong> Blog post added</div>
  <div class="alert alert-info"><strong>Info</strong> Blog post added</div>
  <div class="alert alert-warning">
    <strong>Warning</strong> Blog post added
  </div>
  <div class="alert alert-light"><strong>Light</strong> Blog post added</div>
  <div class="alert alert-dark"><strong>Dark</strong> Blog post added</div>

  <!-- dismissable alert -->
  <div class="alert alert-success alert-dismissable fade show">
    <button type="button" class="close" data-dismiss="alert">
      <span>&times;</span>
    </button>
    <strong>Dismissable</strong> Blog post added
  </div>

  <br /><br />

  <!-- progrressbar -->

  <div class="progress">
    <div class="progress-bar" style="width: 35%"></div>
  </div>
  <br />
  <div class="progress">
    <div class="progress-bar" style="width: 35%">35%</div>
  </div>
  <br />
  <div class="progress">
    <div class="progress-bar bg-success" style="width: 55%"></div>
  </div>
  <br />
  <div class="progress">
    <div class="progress-bar bg-success w-100"></div>
  </div>
  <br />
  <div class="progress">
    <div
      class="progress-bar bg-danger progress-bar-striped"
      style="width: 75%"
    ></div>
  </div>
  <br />
  <div class="progress">
    <div
      class="progress-bar bg-danger progress-bar-striped progress-bar-animated"
      style="width: 95%"
    ></div>
  </div>
  <br />
</template>

<script>
export default {
  name: "alerts",
};
</script>

<style></style>
