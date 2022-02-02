<template>
  <div v-if="course" class="container my-5 text-center">
    <div class="imgContainer">
      <img :src="course.courseImage.url" class="img-fluid border border-5" />
    </div>
    <div class="content w-75 ms-auto me-auto">
      <h3 class="mt-5">{{ course.name }}</h3>
      <p>{{ course.description }}</p>
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
  </div>
</template>

<script>
import cartData from "../../services/cart";
import wishlistData from "../../services/wishlist";
import courseData from "../../services/courses";
export default {
  name: "courseInfo",
  props: {
    courseId: Number,
    comp: String
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
     courseData.getInstructorCourseById(this.courseId).then((res) => {
      this.videoUrl = res.data.videos[0].url;
    });

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
     nextVideo(video, index){
      this.videoUrl = video.url; 
      this.clicked = index;
    },
  },
};
</script>

<style scoped>
.imgContainer {
  position: relative;
  top: 45px;
}
.content {
  border: 2px solid blueviolet;
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
</style>
