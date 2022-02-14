<template>
  <div class="container">
    <div class="top-head bg-light p-3">
      <h2 style="color: blueviolet" class="border-bottom border-2 my-3">
        Courses
      </h2>
      <div class="row">
        <div class="col-sm-2 col-12">
          <button class="btn btn-outline-dark my-2 my-sm-0 " @click="getAllCourses">
            All Courses
          </button>
        </div>
        <div class="col-sm-4 col-12">
          <SearchBar @query="searchCourse" />
        </div>
      </div>
      <br /><br />
      <CategorySubCateSelect @courses="getCourses" />
      <br /><br />
    </div>
    <div class="row">
      <div class="col-md-3">
        <h3 class="mt-5 border-bottom" style="color: blueviolet">Filter</h3>
        <h4>Price</h4>
        <div class="form-check">
          <input
            v-model="filter"
            class="form-check-input"
            name="price"
            type="radio"
            id="inlineCheckbox1"
            value="all"
            ref="all"
            checked
          />
          <label class="form-check-label" for="inlineCheckbox1"> All </label>
        </div>
        <div class="form-check">
          <input
            v-model="filter"
            class="form-check-input"
            name="price"
            type="radio"
            id="inlineCheckbox2"
            value="free"
          />
          <label class="form-check-label" for="inlineCheckbox2">Free</label>
        </div>
        <div class="form-check">
          <input
            v-model="filter"
            class="form-check-input"
            name="price"
            type="radio"
            id="inlineCheckbox3"
            value="paid"
          />
          <label class="form-check-label" for="inlineCheckbox3">Paid</label>
        </div>
        <button
          type="button"
          class="btn btn-dark my-2 me-2"
          @click="applyFilter"
        >
          Apply
        </button>
        <button type="button" class="btn btn-dark my-2" @click="removeFilter">
          Clear
        </button>

        <br />
        <h3 class="mt-5 border-bottom" style="color: blueviolet">Sort</h3>
        <select
          class="form-select w-75"
          @change="sort"
          aria-label="Default select example"
        >
          <option selected>Sort By</option>
          <option value="1">Price low to high</option>
          <option value="2">Price high to low</option>
          <option value="3">Most rated courses</option>
        </select>
      </div>
      <div class="col-md-9 courses border border-3 my-5">
        <div v-if="courses == 'no course found' || newCourses.length == 0">
          <h3 class="my-5">No Course Found</h3>
        </div>
        <div v-else v-for="course in newCourses" :key="course._id">
          <div class="row mx-1 mx-sm-0 course my-2">
            <span v-if="course.offerPrice" class="offerCourse">
              <h5><span class="badge bg-primary">Offer</span></h5>
            </span>
            <div class="col-md-3 col-12 align-self-center">
              <img
                :src="course.courseImage.url"
                class="img-fluid courseImg"
                alt="..."
              />
            </div>
            <div class="col-md-6 col-12 align-self-center">
              <h5 class="text-justify">{{ course.name }}</h5>
              <p v-if="course.offerPrice">
                Offer Price:
                <span class="text-decoration-line-through"
                  >₹{{ course.price }}</span
                >
                ₹{{ course.offerPrice }}
              </p>
              <p v-else-if="course.price">Price : ₹{{ course.price }}</p>
              <p v-else>Price : Free</p>
              <p>Rating : {{ course.rating }}/5 </p>
            </div>
            <div class="col-md-3 col-12 align-self-center">
              <div v-if="enrolledCourses.includes(course._id)">
                <button
                  class="btn btn-sm btn-dark m-sm-2 m-1"
                  @click="
                    this.$router.push({
                      name: 'enrolledCourse',
                      params: { id: course._id },
                    })
                  "
                >
                  Go to course
                </button>
                <button
                  class="btn btn-sm btn-outline-dark m-sm-2 m-1"
                  @click="viewCourse(course._id)"
                >
                  view course
                </button>
              </div>
              <div v-else>
                <button
                  class="btn btn-sm btn-dark m-sm-2 m-1"
                  :disabled="cartItems.includes(course._id)"
                  @click="addToCart(course._id)"
                >
                  add to cart
                </button>
                <button
                  class="btn btn-sm btn-dark m-sm-2 m-1"
                  :disabled="wishlistItems.includes(course._id)"
                  @click="addToWishlist(course._id)"
                >
                  add to wishlist
                </button>
                <button
                  class="btn btn-sm btn-outline-dark m-sm-2 m-1"
                  @click="viewCourse(course._id)"
                >
                  view course
                </button>
              </div>
            </div>
          </div>
          <hr class="border border-dark" />
        </div>
        <div class="row">
          <div class="col my-5 d-flex justify-content-center">
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
  </div>
</template>

<script>
import VanillaTilt from "vanilla-tilt";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import SearchBar from "../../components/Search/SearchBar.vue";
import courseData from "../../services/courses";
import cartData from "../../services/cart";
import wishlistData from "../../services/wishlist";
import categoryData from "../../services/category";
import CategorySubCateSelect from "../../components/Select/CategorySubCateSelect.vue";

export default {
  name: "allCourses",
  components: {
    SearchBar,
    CategorySubCateSelect,
    VPagination,
  },
  data() {
    return {
      page: 1,
      courses: [],
      pages: null,
      queryString: "",
      filteredCourses: "",
      filter: this.$store.state.courses.selectedFilter,
      filterApplied: false,
      enrolledCourses: [],
      cartItems: [],
      wishlistItems: [],
      newCourses: [],
      filterAppliedCourses: [],
      coursesPerPage: 10,
      finalCourses: [],
      updatedFinalCourses: [],
    };
  },
  created() {
    categoryData.getAllCategories().then((res) => {
      this.categories = res.data;
    });

    // get list of enrolled courses
    courseData
      .getEnrolledCourses()
      .then((res) => {
        let courses = res.data[0].courses;
        for (let course of courses) {
          this.enrolledCourses.push(course._id);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });

    // get list of cart items
    cartData
      .getCartItems()
      .then((res) => {
        let courses = res.data.courses;
        for (let course of courses) {
          this.cartItems.push(course._id);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });

    // get all wishlist items
    wishlistData
      .getwishlistItems()
      .then((res) => {
        let courses = res.data[0].courses;
        for (let course of courses) {
          this.wishlistItems.push(course._id);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    // get all courses

    // get all courses when page user first time visit page
    if (this.$store.state.courses.updatedCourses.length == 0) {
      this.$store.state.courses.categoryId = null;
      this.$store.state.courses.subCategoryId = null;
      courseData
        .getAllCourses()
        .then((res) => {
          this.courses = res.data;
          this.finalCourses = this.courses;
          this.updatedFinalCourses = "";
          this.newCourses = this.courses.slice(0, this.coursesPerPage);
          this.pages = this.newCourses.length / this.coursesPerPage + 1;
          this.$store.dispatch("courses/setAllCourses", res.data);
          this.$store.dispatch("courses/setSelectedFilter", "all");
          this.$refs.all.checked = true;
        })
        .catch((err) => {
          console.log(err.response);
        });
      // if user has searched something and moved to other page then display searched courses when user returns back to page
    } else if (
      this.$store.state.courses.searchedCourses.length != 0 &&
      this.$store.state.courses.searchedString
    ) {
      this.updatedFinalCourses = ""
      this.finalCourses = this.$store.state.courses.searchedCourses;
      this.newCourses = this.$store.state.courses.searchedCourses.slice(
        0,
        this.coursesPerPage
      );
      this.pages =
        this.$store.state.courses.searchedCourses.length / this.coursesPerPage +
        1;

      // display filterd courses if user has applied filtered
    } else if (this.$store.state.courses.filteredCourses.length != 0) {
      this.filteredCourses = this.$store.state.courses.filteredCourses;
      this.finalCourses = this.$store.state.courses.filteredCourses;
      this.updatedFinalCourses = ""
      this.newCourses = this.$store.state.courses.filteredCourses.slice(
        0,
        this.coursesPerPage
      );
      this.pages =
        this.$store.state.courses.filteredCourses.length / this.coursesPerPage +
        1;

      // else display default courses
    } else {
      this.finalCourses = this.$store.state.courses.updatedCourses;
      this.updatedFinalCourses = "";
      this.newCourses = this.$store.state.courses.updatedCourses.slice(
        0,
        this.coursesPerPage
      );
      this.pages =
        this.$store.state.courses.updatedCourses.length / this.coursesPerPage +
        1;
    }
  },

  updated() {
    VanillaTilt.init(document.querySelectorAll(".course"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0,
    });
  },

  methods: {
    getAllCourses() {
      this.page = 1;
      this.$store.dispatch(
        "courses/setUpdatedCourses",
        this.$store.state.courses.allCourses
      );
      this.$store.dispatch("courses/setSearchedCourses", []);
      this.$store.dispatch("courses/setFilteredCourses", []);
      this.$store.dispatch("courses/setCategoryId", null);
      this.$store.dispatch("courses/setSubCategoryId", null);
      this.$store.dispatch("courses/setSearchedString", null);
      this.$store.dispatch("courses/setFilterStatus", false);
      this.$refs.all.checked = true;
      this.$store.dispatch("courses/setSelectedFilter", "all");
      this.finalCourses = this.courses;
      this.updatedFinalCourses = ""
      this.newCourses = this.$store.state.courses.allCourses.slice(
        0,
        this.coursesPerPage
      );
      this.pages =
        this.$store.state.courses.allCourses.length / this.coursesPerPage + 1;
      this.$router.go();
    },
    addToWishlist(id) {
      console.log(id);
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
    addToCart(id) {
      console.log(id);
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
    viewCourse(courseId) {
      this.$router.push({ name: "courseInfo", params: { id: courseId } });
    },
    getReviews(courseId){
      let reviews = courseData.courseReview(courseId).then((res)=>{
        console.log(res.data);
      }).catch((err)=>{
        console.log(err.response.data)
      })
      return reviews.length
    },
    searchCourse(str) {
      this.queryString = str;
      let courses;
      if (this.$store.state.courses.filteredCourses.length != 0) {
        courses = this.$store.state.courses.filteredCourses.filter((course) => {
          return (
            course.name.toLowerCase().match(this.queryString) ||
            course.description.toLowerCase().match(this.queryString) ||
            course.category.name.toLowerCase().match(this.queryString)
          );
        });
        this.$store.dispatch("courses/setSearchedCourses", courses);
        this.finalCourses = courses;
        this.updatedFinalCourses = ""
      } else {
        courses = this.$store.state.courses.updatedCourses.filter((course) => {
          return (
            course.name.toLowerCase().match(this.queryString) ||
            course.description.toLowerCase().match(this.queryString) ||
            course.category.name.toLowerCase().match(this.queryString)
          );
        });
        this.$store.dispatch("courses/setSearchedCourses", courses);
        this.finalCourses = courses;
        this.updatedFinalCourses = ""
      }
      this.newCourses = courses.slice(0, this.coursesPerPage);
      this.pages = courses.length / this.coursesPerPage + 1;
    },
    applyFilter() {
      this.page = 1;
      let filteredCourses;
      if (this.$store.state.courses.searchedCourses.length != 0) {
        filteredCourses = this.$store.state.courses.searchedCourses.filter(
          (course) => {
            if (this.filter == "all") {
              this.$store.dispatch("courses/setSelectedFilter", "all");
              return course;
            } else if (this.filter == "paid") {
              this.$store.dispatch("courses/setSelectedFilter", "paid");
              return course.price > 0;
            } else {
              this.$store.dispatch("courses/setSelectedFilter", "free");
              return course.price == undefined || course.price == 0;
            }
          }
        );
      } else {
        filteredCourses = this.$store.state.courses.updatedCourses.filter(
          (course) => {
            if (this.filter == "all") {
              this.$store.dispatch("courses/setSelectedFilter", "all");
              return course;
            } else if (this.filter == "paid") {
              this.$store.dispatch("courses/setSelectedFilter", "paid");
              return course.price > 0;
            } else {
              this.$store.dispatch("courses/setSelectedFilter", "free");
              return course.price == undefined || course.price == 0;
            }
          }
        );
      }
      this.$store.dispatch("courses/setFilteredCourses", filteredCourses);
      this.finalCourses = filteredCourses;
      this.updatedFinalCourses = ""
      this.newCourses = filteredCourses.slice(0, this.coursesPerPage);
      this.$store.dispatch("courses/setFilterStatus", true);
      // this.filterAppliedCourses = filteredCourses
      this.pages = filteredCourses.length / this.coursesPerPage + 1;
    },
    removeFilter() {
      // this.newCourses = this.$store.state.courses.updatedCourses
      this.$store.dispatch("courses/setFilteredCourses", []);
      if (
        this.$store.state.courses.searchedCourses.length != 0 &&
        this.$store.state.courses.searchedString
      ) {
        let courses = this.$store.state.courses.updatedCourses.filter(
          (course) => {
            return (
              course.name.toLowerCase().match(this.queryString) ||
              course.description.toLowerCase().match(this.queryString) ||
              course.category.name.toLowerCase().match(this.queryString)
            );
          }
        );
        this.$store.dispatch("courses/setSearchedCourses", courses);
        this.finalCourses = courses;
        this.updatedFinalCourses = ""
        this.pages = courses.length / this.coursesPerPage + 1;
        this.newCourses = courses.slice(0, this.coursesPerPage);
      } else {
        this.pages =
          this.$store.state.courses.updatedCourses.length /
            this.coursesPerPage +
          1;
        this.newCourses = this.$store.state.courses.updatedCourses.slice(
          0,
          this.coursesPerPage
        );
        this.finalCourses = this.$store.state.courses.updatedCourses;
        this.updatedFinalCourses = ""
      }
      this.$refs.all.checked = true;
      this.$store.dispatch("courses/setSelectedFilter", "all");
      this.$store.dispatch("courses/setFilterStatus", false);
      this.page = 1;
    },
    getCourses(data) {
      this.$store.dispatch("courses/setSearchedString", "");
      if (data == "no course found") {
        this.courses = "no course found";
        this.$store.dispatch("courses/setUpdatedCourses", []);
        this.$store.dispatch("courses/setSearchedString", null);
      } else {
        this.courses = data;
        this.$store.dispatch("courses/setUpdatedCourses", data);
        this.$store.dispatch("courses/setFilteredCourses", []);
        this.$store.dispatch("courses/setSearchedString", null);
        this.page = 1;
        this.$refs.all.checked = true;
        // this.$store.state.courses.updatedCourses = data;
        // this.courses = data;
        this.newCourses = data.slice(0, this.coursesPerPage);
        this.pages = data.length / this.coursesPerPage + 1;
        this.finalCourses = data;
        this.updatedFinalCourses = ""
      }
    },
    sort(event) {
      console.log(event.target.value);
      let courses = this.finalCourses;

      for (let i = 0; i < courses.length; i++) {
        for (let j = 0; j < courses.length - i - 1; j++) {
          if (!courses[j].price) {
            courses[j].price = 0;
          }
          if (!courses[j + 1].price) {
            courses[j + 1].price = 0;
          }
          if (event.target.value == "1") {
            if (courses[j].price > courses[j + 1].price) {
              let temp = courses[j];
              courses[j] = courses[j + 1];
              courses[j + 1] = temp;
            }
          } else if (event.target.value == "2") {
            if (courses[j].price < courses[j + 1].price) {
              let temp = courses[j];
              courses[j] = courses[j + 1];
              courses[j + 1] = temp;
            }
          } else if (event.target.value == "3") {
            if (courses[j].rating < courses[j + 1].rating) {
              let temp = courses[j];
              courses[j] = courses[j + 1];
              courses[j + 1] = temp;
            }
          }
        }
      }
      this.updatedFinalCourses = courses;
      this.page = 1;
      this.newCourses = this.updatedFinalCourses.slice(0, this.coursesPerPage);
    },
    updateHandler(page) {
      console.log(page);
      if (this.updatedFinalCourses) {
        this.newCourses = this.updatedFinalCourses.slice(
          this.coursesPerPage * (page - 1),
          this.coursesPerPage * page
        );
      }else if (
        this.$store.state.courses.searchedCourses.length != 0 &&
        this.$store.state.courses.searchedString
      ) {
        this.newCourses = this.$store.state.courses.searchedCourses.slice(
          this.coursesPerPage * (page - 1),
          page * this.coursesPerPage
        );
      } else if (this.$store.state.courses.filteredCourses.length != 0) {
        this.newCourses = this.$store.state.courses.filteredCourses.slice(
          this.coursesPerPage * (page - 1),
          page * this.coursesPerPage
        );
      } else {
        this.newCourses = this.$store.state.courses.updatedCourses.slice(
          this.coursesPerPage * (page - 1),
          page * this.coursesPerPage
        );
      }
    },
  },
};
</script>

<style scoped>
.offerCourse {
  position: absolute;
  left: -10px;
  z-index: 1;
}

.courseImg {
  z-index: -1;
}

/* .Pagination {
  transform: scale(1.3);
} */

/* .courses {
  height: 100vh;
  overflow: auto;
  background: linear-gradient(120deg, #ffffff, blueviolet, #ffffff);
  background-size: 200% 200%;
  animation: Animation 10s ease infinite;
}

@keyframes Animation {
  0% {
    background-position: 10% 0%;
  }
  50% {
    background-position: 91% 100%;
  }
  100% {
    background-position: 10% 0%;
  }
} */

.course {
  min-height: 150px;
  position: relative;
  /* box-shadow: 3px 3px 10px black; */
  background: white;
}

.course:hover {
  border: 1px solid blueviolet !important;
  transform: scale(1.05);
}
</style>
