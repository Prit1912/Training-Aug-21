<template>
  <div class="container">
    <div v-if="courses.length == 0">
      <h3 class="my-5">No courses uploaded</h3>
    </div>
    <div class="row text-center mt-5">
      <div class="col-sm-4">
        <h3> Total Courses: <span style="color: blueviolet" >{{courses.length}} </span>  </h3>
      </div>
      <div class="col-sm-4">
        <NormalSearch @query="searchCourses" />
      </div>
      <div class="col-sm-4">
        Courses per page: <input type="number" ref="setNum" v-model="coursesPerPage" @change="updateCoursesPerPage" style="width: 50px">
      </div>
    </div>
    <div class="row p-sm-5 p-1">
      <div class="col-sm-10 col-12 me-auto ms-auto">
        <div v-for="course in coursesList" :key="course._id">
          <div class="row my-4 course">
            <div class="col-md-3 col-12 align-self-center">
              <img :src="course.courseImage.url" class="img-fluid courseImage" alt="..." />
            </div>
            <div class="col-md-6 col-12 align-self-center">
              <h5 class="text-justify">{{ course.name }}</h5>
              <p v-if="course.price">Price : ₹{{ course.price }}</p>
              <p v-else>Price : Free</p>
              <p>Rating : {{ course.rating }}/5</p>
            </div>
            <div class="col-md-3 col-12 align-self-center">
              <button
                class="btn btn-outline-dark m-2"
                @click="
                  this.$router.push({
                    name: 'buyers',
                    params: { id: course._id },
                  })
                "
              >
                Buyers
              </button>
              <button
                class="btn btn-outline-dark m-2"
                @click="
                  this.$router.push({
                    name: 'reviews',
                    params: { id: course._id },
                  })
                "
              >
                Reviews
              </button>
              <button
                class="btn btn-dark m-2"
                @click="
                  this.$router.push({
                    name: 'instFullCourse',
                    params: { id: course._id },
                  })
                "
              >
                view course
              </button>
              <button
                class="btn btn-dark m-2"
                @click="
                  this.$router.push({
                    name: 'updateCourse',
                    params: { id: course._id },
                  })
                "
              >
                Update
              </button>
            </div>
          </div>
          <hr class="border border-dark" >
        </div>
        <v-pagination
        ref="pagination"
        v-model="page"
        :pages="pages"
        :range-size="1"
        active-color="#DCEDFF"
        @update:modelValue="updateHandler(page)"
      />
      </div>
    </div>
  </div>
</template>

<script>
import NormalSearch from '../../components/Search/NormalSearch.vue'
import courseData from "../../services/courses";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import '../../assets/css/style.css'

export default {
  name: "myCourses",
  components:{
    NormalSearch,
    VPagination
  },
  data() {
    return {
      courses: [],
      coursesList: [],
      updatedCoursesList: [],
      page: 1,
      pages: null,
      coursesPerPage: 10,
    };
  },
  created() {
    // get uploaded courses by instructor
    courseData.getInstructorCourses().then((res) => {
      this.page = 1;
      console.log(res.data);
      this.courses = res.data;
      this.updatedCoursesList = res.data;
      this.coursesList = res.data.slice(this.coursesPerPage*(this.page-1),this.coursesPerPage*this.page);
      this.pages = (res.data.length/this.coursesPerPage)%1 == 0 ? res.data.length/this.coursesPerPage : Math.ceil(res.data.length/this.coursesPerPage)
    });
  },
  methods:{

    // search course
    searchCourses(str){
      console.log(str);
      let courses = this.courses.filter((course)=>{
        return(
          course.name.toLowerCase().match(str.toLowerCase()) ||
          course.description.toLowerCase().match(str.toLowerCase())
        )
      })
      this.updatedCoursesList = courses;
      this.coursesList = courses.slice(this.coursesPerPage*(this.page-1), this.coursesPerPage*this.page);
      this.page = 1;
      this.pages = (courses.length/this.coursesPerPage)%1 == 0 ? courses.length/this.coursesPerPage : Math.ceil(courses.length/this.coursesPerPage)
    },

    // udpate number of courses to display per page
    updateCoursesPerPage(){
      this.page = 1;
      this.coursesPerPage = this.$refs['setNum'].value>0 ? this.$refs['setNum'].value : 1;
      this.pages = (this.updatedCoursesList.length/this.coursesPerPage)%1 == 0 ? this.updatedCoursesList.length/this.coursesPerPage : Math.ceil(this.updatedCoursesList.length/this.coursesPerPage)
      this.coursesList = this.updatedCoursesList.slice(this.coursesPerPage*(this.page-1),this.coursesPerPage*this.page)
    },

    // update courselist to display on page change
    updateHandler(page){
      this.coursesList = this.updatedCoursesList.slice(this.coursesPerPage*(page-1), this.coursesPerPage*page)
    }
  }
};
</script>

<style scoped>
  .course button {
    display: none;
  }
  .course:hover button{
    display: inline-block;
  }
</style>
