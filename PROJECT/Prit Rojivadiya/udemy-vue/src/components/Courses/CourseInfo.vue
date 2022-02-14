<template>
  <div v-if="course" class="container my-5 text-center">
    <div class="imgContainer">
      <img :src="course.courseImage.url" class="img-fluid courseImage border border-5" />
    </div>
    <div class="content w-75 ms-auto me-auto p-3">
      <h3 class="mt-5">{{ course.name }}</h3>
      <div class="text-center">
        <p>{{ course.description }}</p>
      </div>
      <p><b> Instructor </b>: {{ course.instructor.name }}</p>
      <p v-if="course.price"><b> Price </b>: ₹{{ course.price }}</p>
      <p v-else>Price: Free</p>
      <h5><b> This course includes: </b></h5>
      <ul class="list-unstyled">
        <li>video lectures</li>
        <li>Full lifetime access</li>
        <li>1 downloadable resource</li>
        <li>Access on mobile and TV</li>
      </ul>
      <div v-if="comp != 'instructor'" >
      <button class="btn btn-dark m-2" :disabled="cartItems.includes(course._id)"  @click="addToCart(course._id)">
        Add to cart
      </button>
      <button class="btn btn-dark m-2" :disabled="wishlistItems.includes(course._id)" @click="addToWishlist(course._id)">
        Add to wishlist
      </button>
      </div>
    </div>
    <div v-if="comp == 'instructor'" >
      <div class="row my-5">
              <div class="col-sm-9">
        <video ref="myVideo" id="myVideo" :src="videoUrl" controls></video>
      </div>
      <div class="col-sm-3 links">
        <div v-for="(video, index) of course.videos" :key="index">
          <div class="wrapper bg-light border border- p-2">
            <span class="videolink" @click="nextVideo(video, index)">
               {{ video.name }}
            </span>
          </div>
        </div>
      </div>
      </div>
    </div>
  <div v-if="comp != 'instructor'" >
  <h3 class="mt-5" style="color: blueviolet" >Reviews</h3>
  <hr>
  <Reviews :courseId="courseId" />
  </div>
  </div>

</template>

<script>
import cartData from "../../services/cart";
import wishlistData from "../../services/wishlist";
import courseData from "../../services/courses";
import Reviews from "../../components/Instructor/Reviews.vue"
export default {
  name: "courseInfo",
  props: {
    courseId: Number,
    comp: String
  },
  components:{
    Reviews
  },
  data() {
    return {
      course: "",
      cartItems: [],
      wishlistItems: [],
      videoUrl: ""
    };
  },
  created() {

    // set first video url link to video tag on page created
     courseData.getInstructorCourseById(this.courseId).then((res) => {
      this.videoUrl = res.data.videos[0].url;
    });

    // get course by id
    courseData.getCourseById(this.courseId).then((res) => {
      console.log(res);
      this.course = res.data;
    });

     // get list of cart items
    cartData.getCartItems().then((res)=>{
      let courses = res.data.courses;
      for(let course of courses){
        this.cartItems.push(course._id);
      }
    }).catch((err)=>{
      console.log(err.response);
    })

    // get all wishlist items
    wishlistData.getwishlistItems().then((res)=>{
      let courses = res.data[0].courses;
      for(let course of courses){
        this.wishlistItems.push(course._id);
      }
    }).catch((err)=>{
      console.log(err.response.data)
    })
  },
  methods: {

    // add course to cart
    addToCart(id) {
      courseData
        .addCourseToCart(id)
        .then((res) => {
          console.log(res.data);
          this.cartItems.push(id);
        })
        .catch((err) => {
          console.log(err.response);
          this.$router.push({ name: "login" });
        });
    },

    // add course to wishlist
    addToWishlist(id) {
      courseData
        .addCourseToWishlist(id)
        .then((res) => {
          console.log(res.data);
          this.wishlistItems.push(id);
        })
        .catch((err) => {
          console.log(err.response);
          this.$router.push({ name: "login" });
        });
    },

    // play next video 
     nextVideo(video, index){
      this.videoUrl = video.url; 
      this.clicked = index;
    },
  },
};
</script>

<style scoped>
/* .imgContainer {
  position: relative;
  top: 45px;
} */
.content {
  border: 2px solid blueviolet;
  position: relative;
  z-index: 0;
  animation: moveUp 2s forwards;
}

@keyframes moveUp {
  from{
    top: 500px;
  }
  to{
    top: 0px;
  }
}

video {
  width: 100%;
}
.videolink {
  cursor: pointer;
}
.links {
  height: 75vh;
  overflow: auto;
}
.videolink:hover {
  color: blueviolet;
}

.imgContainer{
 position:relative;
 top: 45px;
 z-index: 1;
 animation:animate 2s forwards;
 transition: all 0.4s ease-in;
}

@keyframes animate{
  from{
  top:-100px;
  transform: rotateX(0deg);
  } 
  to{
  top:45px;
  transform: rotateX(360deg);
  }
}
</style>
