<template>
  <div
    v-if="this.$store.state.user.isLoggedIn && this.$store.state.user.user.role == 'user'"
    class="container my-4"
  >
    <div class="row">
      <div class="col-sm-8 col-12">
        <h3>
          Welcome , <b style="color: blueviolet"> {{ userName }} </b>
        </h3>
      </div>
    </div>
  </div>

  <div class="container" id="head">
    <div class="image-container">
      <img class="img-fluid" src="../../assets/images/headerImg.jpg" alt="" />
    </div>
    <div class="header-content">
      <h5>
        Enhance your skills
        <span style="color: blueviolet">
          <div class="spinner-grow" role="status">
            <span class="visually-hidden"></span>
          </div>
        </span>
      </h5>
      <p>
        Find the courses here that will improve your skills and make you industry ready!!
      </p>
      <button class="btn btn-dark" @click="this.$router.push({name: 'allCourses'})" >Explore</button>
    </div>
  </div>

  <div class="container-fluid bg-light p-3 my-5">
    <h2 class="text-center d-sm-none">Why learn on udemy?</h2>
    <div class="row">
      <div
        class="col-sm-4 col-12 text-center d-flex justify-content-evenly align-items-center p-3"
      >
        <div><i class="fas fa-play-circle fa-2x"></i></div>
        <div>Learn in-demand skills with over 155,000 video courses</div>
      </div>
      <div
        class="col-sm-4 col-12 text-center d-flex justify-content-evenly align-items-center p-3"
      >
        <div><i class="fas fa-star fa-2x"></i></div>
        <div>Choose courses taught by real-world experts</div>
      </div>
      <div
        class="col-sm-4 col-12 text-center d-flex justify-content-evenly align-items-center p-3"
      >
        <div><i class="fas fa-infinity fa-2x"></i></div>
        <div>
          Learn at your own pace, with lifetime access on mobile and desktop
        </div>
      </div>
    </div>
  </div>

  <div class="container my-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-md-4 text-center">
        <img
          class="img-fluid"
          src="../../assets/images/people/instructor.jpg"
          alt="instructor"
        />
      </div>
      <div class="col-12 col-md-4 text-center">
        <h2>Become an instructor</h2>
        <p>
          Instructors from around the world teach millions of students on Udemy.
          We provide the tools and skills to teach what you love.
        </p>
        <button class="btn btn-dark">Start teaching today</button>
      </div>
    </div>
  </div>

  <div class="container-fluid my-5 bg-light p-4">
    <div class="row">
      <h2 class="text-center">Trusted by companies of all size</h2>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-2 text-center">
        <img
          src="../../assets/images/logos/apple-dark.svg"
          width="44px"
          height="44px"
          alt=""
        />
      </div>
      <div class="col-sm-2 text-center">
        <img
          src="../../assets/images/logos/box-dark.svg"
          width="67px"
          height="44px"
          alt=""
        />
      </div>
      <div class="col-sm-2 text-center">
        <img
          src="../../assets/images/logos/netflix-dark.svg"
          width="101px"
          height="44px"
          alt=""
        />
      </div>
      <div class="col-sm-2 text-center">
        <img
          src="../../assets/images/logos/volkswagen-dark.svg"
          width="44px"
          height="44px"
          alt=""
        />
      </div>
      <div class="col-sm-2 text-center">
        <img
          src="../../assets/images/logos/eventbrite-dark.svg"
          width="115px"
          height="44px"
          alt=""
        />
      </div>
    </div>
  </div>

  <div class="container my-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-md-4 text-center">
        <h2>
          <img
            src="../../assets/images/logo-udemy.svg"
            height="44px"
            width="100px"
            alt=""
          />
          <span style="color: blueviolet">Business</span>
        </h2>
        <p>
          Get unlimited access to 6,000+ of Udemy’s top courses for your team.
          Learn and improve skills across business, tech, design, and more.
        </p>
        <button class="btn btn-dark">Get Udemy Business</button>
      </div>
      <div class="col-12 col-md-4 text-center">
        <img
          class="img-fluid"
          src="../../assets/images/people/bw.jpg"
          alt="instructor"
        />
      </div>
    </div>
  </div>

  <div class="container my-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-md-4 text-center">
        <img
          class="img-fluid"
          src="../../assets/images/people/transform.jpg"
          alt="instructor"
        />
      </div>
      <div class="col-12 col-md-4 text-center">
        <h2>Transform your life through education</h2>
        <p>
          Learners around the world are launching new careers, advancing in
          their fields, and enriching their lives.
        </p>
        <button class="btn btn-dark" @click="this.$router.push({name: 'signup'})" >Find out how</button>
      </div>
    </div>
  </div>
</template>

<script>

import userData from "../../services/users";
export default {
  name: "home",
  components:{

  },
  data() {
    return {
      userName: "",
    };
  },
  created() {

    // display user name if user is loggedin
    if (this.$store.state.user.isLoggedIn && this.$store.state.user.user.role == "user") {
      userData
        .userInfo()
        .then((res) => {
          this.userName = res.data.name;
        })
        .catch((err) => {
          console.log(err.response.data);
          // this.$store.dispatch("user/setToken", null);
          // this.$store.dispatch("user/setUser", null);
        });
    }
  },
};
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .header-content {
    background-color: white;
    box-shadow: 5px 5px 10px;
    padding: 20px;
    width: 350px;
    position: absolute;
    top: 40%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
}

#head {
  position: relative;
  top: 10px;
}
</style>
