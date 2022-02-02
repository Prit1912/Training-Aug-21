<template>
  <div class="container my-5">
    <form class="my-5">
      <div class="row">
        <div class="col-sm-4">
          <input
            type="text"
            class="form-control"
            v-model="globalSearch"
            placeholder="Search globally"
          />
        </div>
        <div class="col-sm-2 mt-2 mt-sm-0">
          <button class="btn btn-dark" @click="searchGlobally">Search</button>
        </div>
        <div class="col-sm-2 mt-2 mt-sm-0">
          <button class="btn btn-dark" @click="searchInactiveCourses">
            Inactive courses
          </button>
        </div>
        <div class="col-sm-2 mt-2 mt-sm-0">
          <button class="btn btn-dark" @click="searchActiveCourses">
            Active courses
          </button>
        </div>
      </div>
    </form>

    <CategorySubCateSelect @courses="getCourses" />
    <br /><br />
    <SearchBar @query="searchCourse" />
    <div v-if="!coursesList">
      <h1>no course found</h1>
    </div>
    <div v-else>
      <div v-if="coursesList">
        <div v-for="course of filteredCourses" :key="course._id">
          <div class="row p-3 p-sm-0 course border border-dark my-3">
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
        </div>
      </div>
    </div>

    <v-pagination
      v-model="page"
      :pages="pages"
      :range-size="1"
      active-color="#DCEDFF"
      @update:modelValue="updateHandler(page)"
    />
  </div>
</template>

<script>
import SearchBar from "../../../components/Search/SearchBar.vue";
import CategorySubCateSelect from "../../../components/Select/CategorySubCateSelect.vue";
import courseData from "../../../services/courses";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
export default {
  name: "courses",
  components: {
    SearchBar,
    CategorySubCateSelect,
    VPagination,
  },
  data() {
    return {
      queryString: "",
      courses: [],
      coursesList: "",
      categoryId: null,
      subcategoryId: null,
      page: 1,
      pages: null,
      globalSearch: "",
      inActiveCourses: [],
    };
  },
  created() {
    courseData.getCoursesByAdmin().then((res) => {
      this.courses = res.data;
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
  computed: {
    filteredCourses: function () {
      return this.coursesList.filter((course) => {
        return (
          course.name.toLowerCase().match(this.queryString) ||
          course.description.toLowerCase().match(this.queryString) ||
          course.category.name.toLowerCase().match(this.queryString)
        );
      });
    },
  },
  methods: {
    searchCourse(str) {
      console.log(str);
      this.queryString = str.toLowerCase();
    },
    deActivate(id) {
      courseData.deactivateCourse(id).then((res) => {
        console.log(res.data);
        this.inActiveCourses.push(id);
      });
    },
    activate(id) {
      courseData.activateCourse(id).then((res) => {
        console.log(res.data);
        this.inActiveCourses = this.inActiveCourses.filter((courseId) => {
          return courseId != id;
        });
      });
    },
    getCourses(data) {
      console.log(data);
      this.globalSearch = "";
      this.page = 1;
      let courses = data;
      if (data == "no course found") {
        this.coursesList = null;
      } else {
        this.courses = courses;
        this.coursesList = this.courses.slice(
          10 * (this.page - 1),
          this.page * 10
        );
        this.pages = courses.length / 10 + 1;
      }
    },
    searchGlobally() {
      courseData.getCoursesByAdmin().then((res) => {
        this.courses = res.data;
        let searchedCourses = this.courses.filter((course) => {
          return (
            course.name.toLowerCase().match(this.globalSearch.toLowerCase()) ||
            course.description
              .toLowerCase()
              .match(this.globalSearch.toLowerCase()) ||
            course.category.name
              .toLowerCase()
              .match(this.globalSearch.toLowerCase())
          );
        });
        this.page = 1;
        this.courses = searchedCourses;
        this.coursesList = searchedCourses.slice(
          10 * (this.page - 1),
          this.page * 10
        );
        this.pages = searchedCourses.length / 10 + 1;
      });
    },
    searchActiveCourses() {
      courseData.getCoursesByAdmin().then((res) => {
        this.courses = res.data;
        this.page = 1;
        let activeCourses = this.courses.filter((course) => {
          return course.isActive == true;
        });
        this.courses = activeCourses;
        this.coursesList = activeCourses.slice(
          10 * (this.page - 1),
          this.page * 10
        );
        this.pages = activeCourses.length / 10 + 1;
      });
    },
    searchInactiveCourses() {
      courseData.getCoursesByAdmin().then((res) => {
        this.courses = res.data;
        this.page = 1;
        let inActiveCourses = this.courses.filter((course) => {
          return course.isActive == false;
        });
        this.courses = inActiveCourses;
        this.coursesList = inActiveCourses.slice(
          10 * (this.page - 1),
          this.page * 10
        );
        this.pages = inActiveCourses.length / 10 + 1;
      });
    },
    updateHandler(page) {
      this.coursesList = this.courses.slice(10 * (page - 1), page * 10);
    },
  },
};
</script>

<style scoped>
.course {
  box-shadow: 5px 5px 15px black;
}

.course:hover {
  transform: scale(1.02);
}
</style>
