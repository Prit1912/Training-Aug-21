<template>
  <div class="container my-5">
    <div class="rounded bg-light p-5">
      <div class="row">
        <div class="col-sm-10">
          <CategorySubCateSelect @courses="getCourses" />
          <br />
          <div class="row">
            <div class="col-sm-4">
              <h5 style="color: blueviolet">Search:</h5>
              <NormalSearch @query="searchCourse" />
            </div>
            <div class="col-sm-4">
              <h5 style="color: blueviolet">Filter:</h5>
              <select
                class="form-select"
                @change="filterCourse"
                aria-label="Default select example"
              >
                <option value="0" selected>All Courses</option>
                <option value="1">Active Courses</option>
                <option value="2">Inactive Courses</option>
              </select>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
    <hr />
    <div v-if="!coursesList">
      <h1>no course found</h1>
    </div>
    <div v-else>
      <div v-if="coursesList" class="p-sm-5 p-0 my-3 courses">
        <div v-for="course of coursesList" :key="course._id">
          <div class="row mx-2 mx-sm-5 p-3 p-sm-0 course my-3">
            <div class="col-md-3 align-self-center">
              <img :src="course.courseImage.url" class="img-fluid" alt="" />
            </div>
            <div class="col-md-6 align-self-center">
              <h4>{{ course.name }}</h4>
              <p v-if="course.price">Price: ₹{{ course.price }}</p>
              <p v-else>Price: Free</p>
              <p>Rating: {{ course.rating }}/5</p>
            </div>
            <div class="col-md-3 d-flex flex-wrap d-block align-self-center">
              <button
                class="btn btn-dark m-2"
                @click="
                  this.$router.push({
                    name: 'updateCourseByAdmin',
                    params: { id: course._id },
                  })
                "
              >
                Update
              </button>
              <button
                class="btn btn-dark m-2"
                @click="
                  this.$router.push({
                    name: 'courseSummary',
                    params: { id: course._id },
                  })
                "
              >
                Summary</button
              ><br />
              <button
                class="btn btn-dark m-2"
                @click="
                  this.$router.push({
                    name: 'courseBuyers',
                    params: { id: course._id },
                  })
                "
              >
                Buyers</button
              ><br />
              <button
                class="btn btn-outline-dark m-2"
                v-if="!inActiveCourses.includes(course._id)"
                @click="deActivate(course._id)"
              >
                Deactivate
              </button>
              <button
                class="btn btn-dark m-2"
                v-else
                @click="activate(course._id)"
              >
                Activate
              </button>
            </div>
          </div>
          <hr class="border border-dark" />
        </div>
        <div class="mx-5 mt-4">
          <v-pagination
            v-model="page"
            :pages="pages"
            :range-size="1"
            active-color="#DCEDFF"
            @update:modelValue="updateHandler(page)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NormalSearch from "../../../components/Search/NormalSearch.vue";
import CategorySubCateSelect from "../../../components/Select/CategorySubCateSelect.vue";
import courseData from "../../../services/courses";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
export default {
  name: "courses",
  components: {
    NormalSearch,
    CategorySubCateSelect,
    VPagination,
  },
  data() {
    return {
      queryString: "",
      courses: [],
      coursesList: "",
      updatedCourseList: "",
      categoryId: null,
      subcategoryId: null,
      page: 1,
      pages: null,
      coursesPerPage: 10,
      inActiveCourses: [],
    };
  },
  created() {
    courseData.getCoursesByAdmin().then((res) => {
      this.courses = res.data;
      this.updatedCourseList = this.courses;
      this.coursesList = this.courses.slice(0, 10);
      this.pages = this.courses.length / 10 + 1;

      for (let course of this.courses) {
        if (course.isActive == false) {
          if (!this.inActiveCourses.includes(course._id)) {
            this.inActiveCourses.push(course._id);
          }
        }
      }
    });
  },

  methods: {
    // get all courses on page load
    getAllCourses() {
      courseData.getCoursesByAdmin().then((res) => {
        this.page = 1;
        this.courses = res.data;
        this.updatedCourseList = this.courses;
        this.coursesList = this.updatedCourseList.slice(
          this.coursesPerPage * (this.page - 1),
          this.coursesPerPage * this.page
        );
        this.pages =
          (this.updatedCourseList.length / this.coursesPerPage) % 1 == 0
            ? this.updatedCourseList.length / this.coursesPerPage
            : Math.ceil(this.updatedCourseList.length / this.coursesPerPage);
      });
    },

    // search globally
    searchCourse(str) {
      console.log(str);
      this.queryString = str.toLowerCase();
      let courses = this.courses.filter((course) => {
        return (
          course.name.toLowerCase().match(this.queryString) ||
          course.description.toLowerCase().match(this.queryString) ||
          course.category.name.toLowerCase().match(this.queryString) ||
          course.instructor.email.toLowerCase().match(this.queryString)
        );
      });
      this.updatedCourseList = courses;
      this.coursesList = this.updatedCourseList.slice(
        this.coursesPerPage * (this.page - 1),
        this.coursesPerPage * this.page
      );
      this.page = 1;
      this.pages =
        (courses.length / this.coursesPerPage) % 1 == 0
          ? courses.length / this.coursesPerPage
          : Math.ceil(courses.length / this.coursesPerPage);
    },

    // deactivate course
    deActivate(id) {
      if(confirm("Do you really want to deactivate this course?")){
        courseData.deactivateCourse(id).then((res) => {
          console.log(res.data);
          this.inActiveCourses.push(id);
          this.$store.dispatch("courses/setUpdatedCourses", []);
          this.$store.dispatch("courses/setAllCourses", []);
        });
      }
    },

    // activate course
    activate(id) {
      courseData.activateCourse(id).then((res) => {
        console.log(res.data);
        this.inActiveCourses = this.inActiveCourses.filter((courseId) => {
          return courseId != id;
        });
        this.$store.dispatch("courses/setUpdatedCourses", []);
        this.$store.dispatch("courses/setAllCourses", []);
      });
    },

    // get all courses
    getCourses(data) {
      console.log(data);
      this.globalSearch = "";
      this.page = 1;
      let courses = data;
      if (data == "no course found") {
        this.coursesList = null;
      } else {
        this.updatedCourseList = courses;
        this.coursesList = this.updatedCourseList.slice(
          this.coursesPerPage * (this.page - 1),
          this.page * this.coursesPerPage
        );
        this.pages =
          (data.length / this.coursesPerPage) % 1 == 0
            ? data.length / this.coursesPerPage
            : Math.ceil(data.length / this.coursesPerPage);
      }
    },

    // get all active courses globally
    searchActiveCourses() {
      this.page = 1;
      let activeCourses = this.courses.filter((course) => {
        return course.isActive == true;
      });
      this.updatedCourseList = activeCourses;
      this.coursesList = activeCourses.slice(
        this.coursesPerPage * (this.page - 1),
        this.coursesPerPage * this.page
      );
      this.pages =
        (activeCourses.length / this.coursesPerPage) % 1 == 0
          ? activeCourses.length / this.coursesPerPage
          : Math.ceil(activeCourses.length / this.coursesPerPage);
    },

    // get list of inactive courses
    searchInactiveCourses() {
      this.page = 1;
      let inActiveCourses = this.courses.filter((course) => {
        return course.isActive == false;
      });
      this.updatedCourseList = inActiveCourses;
      this.coursesList = inActiveCourses.slice(
        this.coursesPerPage * (this.page - 1),
        this.coursesPerPage * this.page
      );
      this.pages =
        (inActiveCourses.length / this.coursesPerPage) % 1 == 0
          ? inActiveCourses.length / this.coursesPerPage
          : Math.ceil(inActiveCourses.length / this.coursesPerPage);
    },

    // filter course
    filterCourse(event) {
      console.log(event.target.value);
      if (event.target.value == 0) {
        this.$store.dispatch("courses/setCategoryId", "all");
        this.$store.dispatch("courses/setSubCategoryId", "all");
        this.getAllCourses();
        this.$router.go();
      } else if (event.target.value == 1) {
        this.searchActiveCourses();
      } else if (event.target.value == 2) {
        this.searchInactiveCourses();
      }
    },

    // change list of courses to display on different pages
    updateHandler(page) {
      this.coursesList = this.updatedCourseList.slice(
        this.coursesPerPage * (page - 1),
        page * 10
      );
    },
  },
};
</script>

<style scoped>
.course {
  background-color: white;
}

.course button {
  display: none;
}

.course:hover button {
  display: inline-block;
}
</style>
