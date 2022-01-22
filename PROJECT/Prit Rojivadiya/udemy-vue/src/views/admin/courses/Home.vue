<template>
  <div class="container my-5">
    <SearchBar @query='searchCourse' />
    <br><br>
    <CategorySubCateSelect @courses='getCourses' />
    <div v-if="courses == 'no course found'" >
      <h1>no course found</h1>
    </div>
    <div v-else v-for="course of filteredCourses" :key="course._id">
      <div class="row text-center border border-dark my-3">
        <div class="col-md-3 align-self-center">
          <img :src="course.courseImage.url" class="img-fluid" alt="" />
        </div>
        <div class="col-md-6 align-self-center">
          <h4>{{ course.name }}</h4>
          <p v-if="course.price">Price: ₹{{ course.price }}</p>
          <p v-else>Price: Free</p>
          <p>Rating: {{ course.rating }}/5</p>
        </div>
        <div class="col-md-3 align-self-center">
          <button
            class="btn btn-dark my-2"
            @click="
              this.$router.push({
                name: 'courseSummary',
                params: { id: course._id },
              })
            "
          >
            Summary
          </button><br>
          <button
            class="btn btn-dark my-2"
            @click="
              this.$router.push({
                name: 'courseBuyers',
                params: { id: course._id },
              })
            "
          >
            Buyers
          </button><br>
          <button
            class="btn btn-outline-dark my-2"
            v-if="course.isActive"
            @click="deActivate(course._id)"
          >
            Deactivate
          </button>
          <button class="btn btn-dark my-2" v-else @click="activate(course._id)">
            Activate
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '../../../components/Search/SearchBar.vue'
import CategorySubCateSelect from '../../../components/Select/CategorySubCateSelect.vue'
import courseData from "../../../services/courses";
export default {
  name: "courses",
  components: {
    SearchBar,
    CategorySubCateSelect
  },
  data() {
    return {
      queryString: "",
      courses: [],
      categoryId: null,
      subcategoryId: null,
    };
  },
  created() {
    courseData.getCoursesByAdmin().then((res) => {
      this.courses = res.data;
    });
  },
  updated(){
    console.log(this.categoryId)
  },
  computed: {
    filteredCourses: function () {
      console.log(this.courses)
      return this.courses.filter((course) => {
        return (
          course.name.toLowerCase().match(this.queryString) ||
          course.description.toLowerCase().match(this.queryString) ||
          course.category.name.toLowerCase().match(this.queryString)
        );
      });
    },
  },
  methods: {
    searchCourse(str){
      console.log(str)
      this.queryString = str;
    },
    deActivate(id) {
      courseData.deactivateCourse(id).then((res) => {
        console.log(res.data);
        courseData.getCoursesByAdmin().then((res) => {
          this.courses = res.data;
        });
      });
    },
    activate(id) {
      courseData.activateCourse(id).then((res) => {
        console.log(res.data);
        courseData.getCoursesByAdmin().then((res) => {
          this.courses = res.data;
        });
      });
    },
    getCourses(data){
      this.courses = data
    }
  },
};
</script>

<style></style>
