<template>
  <!-- button with collapse -->
  <button
    class="btn btn-primary d-block mb-4"
    data-toggle="collapse"
    data-target="#collapse-btn-1"
  >
    Read More
  </button>
  <div class="collapse mb-5" id="collapse-btn-1">
    <div class="card">
      <div class="card-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, dolore
        quasi enim repudiandae deleniti nostrum animi ratione voluptas sunt
        recusandae officia ipsum nulla, harum necessitatibus obcaecati fugit
        accusantium voluptatum ullam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Soluta asperiores dolore tempore temporibus harum
        accusamus ducimus voluptatibus. Provident, quos! Unde est minus
        blanditiis provident saepe vero repellat perferendis nihil. Ipsa?
      </div>
    </div>
  </div>

  <!-- accordion -->
  <div id="accordion" role="tablist">
    <div class="card">
      <div class="card-header" role="tab" id="heading1">
        <h5 class="mb-0">
          <a href="#collapse1" data-toggle="collapse">Collapse one</a>
        </h5>
      </div>
      <div id="collapse1" class="collapse show" data-parent="#accordion">
        <div class="card-body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit
          cupiditate quos asperiores optio maxime praesentium facilis nemo modi
          labore fugit, nesciunt exercitationem odio aliquam fugiat itaque,
          doloribus earum aspernatur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eum voluptates voluptatem quod neque! Corrupti rerum
          esse, reprehenderit molestiae, perferendis asperiores velit similique
          nobis, cum explicabo nulla ullam et tempore in.
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header" role="tab" id="heading2">
        <h5 class="mb-0">
          <a href="#collapse2" data-toggle="collapse">Collapse two</a>
        </h5>
      </div>
      <div id="collapse2" class="collapse" data-parent="#accordion">
        <div class="card-body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit
          cupiditate quos asperiores optio maxime praesentium facilis nemo modi
          labore fugit, nesciunt exercitationem odio aliquam fugiat itaque,
          doloribus earum aspernatur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eum voluptates voluptatem quod neque! Corrupti rerum
          esse, reprehenderit molestiae, perferendis asperiores velit similique
          nobis, cum explicabo nulla ullam et tempore in.
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header" role="tab" id="heading3">
        <h5 class="mb-0">
          <a href="#collapse3" data-toggle="collapse">Collapse three</a>
        </h5>
      </div>
      <div id="collapse3" class="collapse" data-parent="#accordion">
        <div class="card-body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed impedit
          cupiditate quos asperiores optio maxime praesentium facilis nemo modi
          labore fugit, nesciunt exercitationem odio aliquam fugiat itaque,
          doloribus earum aspernatur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eum voluptates voluptatem quod neque! Corrupti rerum
          esse, reprehenderit molestiae, perferendis asperiores velit similique
          nobis, cum explicabo nulla ullam et tempore in.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "accordion",
};
</script>

<style></style>
