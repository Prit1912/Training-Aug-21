<template>
  <div class="container">
    <div class="container my-5 howToBegin">
      <h1 class="text-center my-5" style="color: blueviolet">how to begin</h1>
      <nav>
        <div
          class="nav nav-tabs w-75 nav-fill me-auto ms-auto my-3"
          id="nav-tab"
          role="tablist"
        >
          <button
            class="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            <h3>Plan your curriculam</h3>
          </button>
          <button
            class="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            <h3>Record your video</h3>
          </button>
          <button
            class="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            <h3>Launch your course</h3>
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div class="row">
            <div class="col-12 col-sm-6 p-5 align-self-center">
              <p>
                You start with your passion and knowledge. Then choose a
                promising topic with the help of our Marketplace Insights tool.
                The way that you teach — what you bring to it — is up to you.
              </p>
              <b>How we help you</b>
              <p>
                We offer plenty of resources on how to create your first course.
                And, our instructor dashboard and curriculum pages help keep you
                organized.
              </p>
            </div>
            <div class="col-12 col-sm-6 p-5">
              <img
                class="img-fluid"
                src="../../assets/images/teachudemy/plan-your-curriculum-v3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <div class="row">
            <div class="col-12 col-sm-6 p-5 align-self-center">
              <p>
                Use basic tools like a smartphone or a DSLR camera. Add a good
                microphone and you’re ready to start. If you don’t like being on
                camera, just capture your screen. Either way, we recommend two
                hours or more of video for a paid course.
              </p>
              <b>How we help you</b>
              <p>
                Our support team is available to help you throughout the process
                and provide feedback on test videos..
              </p>
            </div>
            <div class="col-12 col-sm-6 p-5">
              <img
                class="img-fluid"
                src="../../assets/images/teachudemy/record-your-video-v3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          <div class="row">
            <div class="col-12 col-sm-6 p-5 align-self-center">
              <p>
                Gather your first ratings and reviews by promoting your course
                through social media and your professional networks. Your course
                will be discoverable in our marketplace where you earn revenue
                from each paid enrollment.
              </p>
              <b>How we help you</b>
              <p>
                Our custom coupon tool lets you offer enrollment incentives
                while our global promotions drive traffic to courses. There’s
                even more opportunity for courses chosen for Udemy Business.
              </p>
            </div>
            <div class="col-12 col-sm-6 p-5">
              <img
                class="img-fluid"
                src="../../assets/images/teachudemy/launch-your-course-v3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "howToTeach",
};
</script>

<style scoped>
.howToBegin .nav-tabs button.active {
  border: 2px solid blueviolet;
}

.howToBegin nav {
  box-shadow: none;
  z-index: 0;
}
</style>
