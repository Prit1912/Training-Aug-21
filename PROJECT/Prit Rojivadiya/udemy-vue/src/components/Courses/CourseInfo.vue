<template>
  <div class="container my-5 text-center">
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
      <button class="btn btn-dark m-2" :disabled="cartItems.includes(course._id)"  @click="addToCart(course._id)">
        Add to cart
      </button>
      <button class="btn btn-dark m-2" :disabled="wishlistItems.includes(course._id)" @click="addToWishlist(course._id)">
        Add to wishlist
      </button>
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
  },
  data() {
    return {
      course: {},
      cartItems: [],
      wishlistItems: []
    };
  },
  created() {
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
</style>
