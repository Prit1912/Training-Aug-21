<template>
  <ul class="mb-5 list-group">
    <li class="list-group-item">List item 1</li>
    <li class="list-group-item">List item 2</li>
    <li class="list-group-item">List item 3</li>
    <li class="list-group-item">List item 4</li>
    <li class="list-group-item">List item 5</li>
  </ul>

  <!-- list groups with links -->
  <ul class="list-group mb-5">
    <a class="list-group-item list-group-item-action" href="#">My list 1</a>
    <a class="list-group-item list-group-item-action" href="#">My list 2</a>
    <a class="list-group-item list-group-item-action" href="#">My list 3</a>
    <a class="list-group-item list-group-item-action" href="#">My list 4</a>
    <a class="list-group-item list-group-item-action" href="#">My list 5</a>
  </ul>

  <!-- contextual classes -->
  <ul class="list-group mb-5">
    <li class="list-group-item list-group-item">regular list item</li>
    <li class="list-group-item list-group-item-primary">Primary list item</li>
    <li class="list-group-item list-group-item-secondary">
      secondary list item
    </li>
    <li class="list-group-item list-group-item-success">success list item</li>
    <li class="list-group-item list-group-item-info">info list item</li>
    <li class="list-group-item list-group-item-warning">warning list item</li>
    <li class="list-group-item list-group-item-danger">danger list item</li>
    <li class="list-group-item list-group-item-light">light list item</li>
    <li class="list-group-item list-group-item-dark">dark list item</li>
  </ul>

  <!-- javascript behaviour -->
  <div class="row mb-5">
    <div class="col-4">
      <div class="mb-5 list-group" id="list-tab" role="tablist">
        <a
          class="list-group-item list-group-item-action active"
          id="list-home-list"
          href="#list-home"
          data-toggle="list"
          >Home</a
        >
        <a
          class="list-group-item list-group-item-action"
          id="list-about-list"
          href="#list-about"
          data-toggle="list"
          >About</a
        >
        <a
          class="list-group-item list-group-item-action"
          id="list-services-list"
          href="#list-services"
          data-toggle="list"
          >Services</a
        >
      </div>
    </div>
    <div class="col-8">
      <div class="tab-content" id="nav-tab-content">
        <div class="tab-pane fade show active" id="list-home" role="tabpanel">
          Home content........
        </div>
        <div class="tab-pane fade" id="list-about" role="tabpanel">
          About content........
        </div>
        <div class="tab-pane fade" id="list-services" role="tabpanel">
          Services content........
        </div>
      </div>
    </div>
  </div>

  <!-- badges -->
  <ul class="mb-5 list-group">
    <li class="list-group-item">List item 1</li>
    <li class="list-group-item">List item 2</li>
    <li
      class="list-group-item d-flex justify-content-lg-between align-items-center"
    >
      List item 3 <span class="badge badge-primary">30</span>
    </li>
    <li class="list-group-item">List item 4</li>
    <li class="list-group-item">List item 5</li>
  </ul>

  <!-- breadcrumb -->
  <ol class="breadcrumb">
    <li class="breadcrumb-item active">Home</li>
  </ol>

  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active">user</li>
  </ol>

  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">User</a></li>
    <li class="breadcrumb-item active">Prit</li>
  </ol>
</template>

<script>
export default {
  name: "listgroup",
};
</script>

<style></style>
