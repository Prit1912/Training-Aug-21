<template>
  <div class="container">
      <div v-if="courses.length == 0" >
          <h3 class="my-5" >No courses uploaded</h3>
      </div>
    <div v-for="course in courses" :key="course._id">
      <div class="row text-center my-5 border border-3">
        <div class="col-md-3 col-12 align-self-center">
          <img :src="course.courseImage.url" class="img-fluid" alt="..." />
        </div>
        <div class="col-md-6 col-12 align-self-center">
          <h4 class="text-justify">{{ course.name }}</h4>
          <p v-if="course.price">Price : ₹{{ course.price }}</p>
          <p v-else>Price : Free</p>
          <p>Rating : {{ course.rating }}/5</p>
        </div>
        <div class="col-md-3 col-12 align-self-center">
          <button
            class="btn btn-outline-dark m-2"
            @click="this.$router.push({name: 'buyers', params:{id: course._id}})"
          >
            Buyers
          </button>
          <button
            class="btn btn-outline-dark m-2"
            @click="this.$router.push({name: 'reviews', params:{id: course._id}})"
          >
            Reviews
          </button>
          <button
            class="btn btn-dark m-2"
            @click="this.$router.push({name: 'instFullCourse', params:{id: course._id}})"
          >
            view course
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import courseData from "../../services/courses";
export default {
  name: "myCourses",
  data() {
    return {
      courses: [],
    };
  },
  created() {
    courseData.getInstructorCourses().then((res) => {
      console.log(res.data);
      this.courses = res.data;
    });
  },
};
</script>

<style></style>
