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
        Festival Season Sale
        <span style="color: blueviolet">
          <div class="spinner-grow" role="status">
            <span class="visually-hidden"></span>
          </div>
        </span>
      </h5>
      <p>
        Stock up on courses and boost your skills for as little as ₹455 through
        Feb 15
      </p>
      <!-- <div class="input-group">
        <span
          class="input-group-text"
          style="background: none"
          id="basic-addon1"
          ><i class="fas fa-search"></i
        ></span>
        <input
          type="text"
          class="form-control"
          placeholder="What do you want to learn"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div> -->
      <button class="btn btn-dark">Explore</button>
    </div>
  </div>

  <!-- <div class="container my-5">
    <h3 style="color: blueviolet" class="border-bottom mb-3">Search Courses</h3>
    <div class="row">
      <div class="col-sm-3">
      <button class="btn btn-dark" @click="this.$router.push({name: 'allCourses'})" >All Courses</button>
      <br><b class="ms-5" > OR </b> <br>
        <CategorySelect />
      </div>
    </div>
     <b class="ms-5" > OR </b> <br>
    <SearchBar />
  </div> -->

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

  <!-- categories -->
  <div class="container mt-5" id="categories">
    <h2 class="mb-3">Top categories</h2>
    <div class="row text-center">
      <div class="col-12 col-sm-6 col-md-3 p-2">
        <img
          class="img-fluid d-none d-sm-block"
          src="../../assets/images/categories/design.jpg"
          alt="design"
        />
        <b>Design</b>
      </div>
      <div class="col-12 col-sm-6 col-md-3 p-2">
        <img
          class="img-fluid d-none d-sm-block"
          src="../../assets/images/categories/development.jpg"
          alt="development"
        />
        <b>Development</b>
      </div>
      <div class="col-12 col-sm-6 col-md-3 p-2">
        <img
          class="img-fluid d-none d-sm-block"
          src="../../assets/images/categories/marketing.jpg"
          alt="marketing"
        />
        <b>Marketing</b>
      </div>
      <div class="col-12 col-sm-6 col-md-3 p-2">
        <img
          class="img-fluid d-none d-sm-block"
          src="../../assets/images/categories/software.jpg"
          alt="software"
        />
        <b>Software</b>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-12 col-sm-6 col-md-3 p-2">
        <img
          class="img-fluid d-none d-sm-block"
          src="../../assets/images/categories/pd.jpg"
          alt="pd"
        />
        <b>Personal Development</b>
      </div>
      <div class="col-12 col-sm-6 col-md-3 p-2">
        <img
          class="img-fluid d-none d-sm-block"
          src="../../assets/images/categories/business.jpg"
          alt="business"
        />
        <b>Business</b>
      </div>
      <div class="col-12 col-sm-6 col-md-3 p-2">
        <img
          class="img-fluid d-none d-sm-block"
          src="../../assets/images/categories/photography.jpg"
          alt="photography"
        />
        <b>Photography</b>
      </div>
      <div class="col-12 col-sm-6 col-md-3 p-2">
        <img
          class="img-fluid d-none d-sm-block"
          src="../../assets/images/categories/music.jpg"
          alt="music"
        />
        <b>Music</b>
      </div>
    </div>
  </div>

  <!-- featured course -->

  <div class="container-fluid bg-light my-5 p-5" id="featuredCourse">
    <h3>Featured topics by category</h3>
    <br />
    <div class="row mt-3">
      <div class="col-12 col-sm-6 col-md-3">
        <ul class="list-unstyled">
          <h5>Development</h5>
          <li>
            <span> Python </span> <br />
            31,554,265 students
          </li>
          <br />
          <li>
            <span> Web Development </span> <br />
            10,015,608 students
          </li>
          <br />
          <li>
            <span> Machine learning </span> <br />
            6,258,477 students
          </li>
          <br />
        </ul>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <ul class="list-unstyled">
          <h5>Business</h5>
          <li>
            <span> Financial analysis </span> <br />
            1,081,277 students
          </li>
          <br />
          <li>
            <span> SQL </span> <br />
            4,822,795 students
          </li>
          <br />
          <li>
            <span> PMP </span> <br />
            1,453,204 students
          </li>
          <br />
        </ul>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <ul class="list-unstyled">
          <h5>IT and Software</h5>
          <li>
            <span> AWS Certification </span> <br />
            4,703,605 students
          </li>
          <br />
          <li>
            <span> Ethical Hacking </span> <br />
            9,758,901 students
          </li>
          <br />
          <li>
            <span> Cyber Security </span> <br />
            3,460,815 students
          </li>
          <br />
        </ul>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <ul class="list-unstyled">
          <h5>Design</h5>
          <li>
            <span> Photoshop </span> <br />
            10,076,226 students
          </li>
          <br />
          <li>
            <span> Graphic Design </span> <br />
            2,963,264 students
          </li>
          <br />
          <li>
            <span> Drawing </span> <br />
            2,275,952 students
          </li>
          <br />
        </ul>
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
    if (this.$store.state.user.isLoggedIn && this.$store.state.user.user.role == "user") {
      userData
        .userInfo()
        .then((res) => {
          this.userName = res.data.name;
        })
        .catch((err) => {
          console.log(err.response.data);
          this.$store.dispatch("user/setToken", null);
          this.$store.dispatch("user/setUser", null);
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

#categories img:hover {
  transform: scale(1.04);
}

#head {
  position: relative;
  top: 10px;
}
</style>
