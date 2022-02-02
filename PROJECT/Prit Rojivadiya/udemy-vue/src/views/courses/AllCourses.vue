<template>
  <div class="container my-5">
    <h2 style="color: blueviolet" class="border-bottom border-2 my-3">
      Courses
    </h2>
    <button class="btn btn-dark" @click="getAllCourses">All Courses</button>
    <br /><br />
    <!-- <div class="row my-3">
      <div class="col-sm-3">
        <select
          @change="selectCategory"
          v-model="category"
          class="form-select"
          id="specificSizeSelect"
        >
          <option selected>Categories</option>
          <option
            v-for="category of categories"
            :key="category._id"
            :value="category.name"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="col-sm-3">
        <select
          @change="selectSubCategory"
          v-model="subcategory"
          class="form-select"
          id="specificSizeSelect"
        >
          <option selected>SubCategories</option>
          <option
            v-for="subcategory of subcategories"
            :key="subcategory._id"
            :value="subcategory.name"
          >
            {{ subcategory.name }}
          </option>
        </select>
      </div>
    </div> -->
    <CategorySubCateSelect @courses="getCourses" />
    <br /><br />
    <div class="offset-3"><SearchBar @query="searchCourse" /></div>

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
      </div>
      <div class="col-md-9 courses border border-3 my-5 p-md-5">
        <div v-if="courses == 'no course found' || newCourses.length == 0">
          <h3 class="my-5">No Course Found</h3>
        </div>
        <div v-else v-for="course in newCourses" :key="course._id">
          <!-- {{ course }}
      <button @click="addToCart(course._id)">add to cart</button>
      <button @click="addToWishlist(course._id)">add to wishlist</button>
      <button @click="viewCourse(course._id)">view course</button> -->
            
          <div class="row course text-center my-5 border border-3">
            <span v-if="course.offerPrice" class="offerCourse">
              <h5><span class="badge bg-primary">Offer</span></h5>
            </span>
            <div class="col-md-3 col-12 align-self-center">
              <img :src="course.courseImage.url" class="img-fluid courseImg" alt="..." />
            </div>
            <div class="col-md-6 col-12 align-self-center">
              <h4 class="text-justify">{{ course.name }}</h4>
              <p v-if="course.offerPrice"> Offer Price: <span class="text-decoration-line-through" >₹{{course.price}}</span> ₹{{course.offerPrice}}</p>
              <p v-else-if="course.price">Price : ₹{{ course.price }}</p>
              <p v-else>Price : Free</p>
              <p>Rating : {{ course.rating }}/5</p>
            </div>
            <div class="col-md-3 col-12 align-self-center">
              <div v-if="enrolledCourses.includes(course._id)">
                <button
                  class="btn btn-dark"
                  @click="
                    this.$router.push({
                      name: 'enrolledCourse',
                      params: { id: course._id },
                    })
                  "
                >
                  Go to course
                </button>
              </div>
              <div v-else>
                <button
                  class="btn btn-dark m-2"
                  :disabled="cartItems.includes(course._id)"
                  @click="addToCart(course._id)"
                >
                  add to cart
                </button>
                <button
                  class="btn btn-dark m-2"
                  :disabled="wishlistItems.includes(course._id)"
                  @click="addToWishlist(course._id)"
                >
                  add to wishlist
                </button>
                <button
                  class="btn btn-outline-dark m-2"
                  @click="viewCourse(course._id)"
                >
                  view course
                </button>
              </div>
            </div>
          </div>
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
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import SearchBar from "../../components/Search/SearchBar.vue";
import courseData from "../../services/courses";
import cartData from "../../services/cart";
import wishlistData from "../../services/wishlist";
import categoryData from "../../services/category";
import subcategoryData from "../../services/subcategory";
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
      filter: "",
      filterApplied: false,
      enrolledCourses: [],
      cartItems: [],
      wishlistItems: [],
      newCourses: [],
      filterAppliedCourses: [],
    };
  },
  created() {
    categoryData.getAllCategories().then((res) => {
      this.categories = res.data;
    });

    // get list of enrolled courses
    courseData.getEnrolledCourses().then((res) => {
      let courses = res.data[0].courses;
      for (let course of courses) {
        this.enrolledCourses.push(course._id);
      }
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
    if (this.$store.state.courses.updatedCourses.length == 0) {
      this.$store.state.courses.categoryId = null;
      this.$store.state.courses.subCategoryId = null;
      courseData
        .getAllCourses()
        .then((res) => {
          this.courses = res.data;
          this.newCourses = this.courses.slice(0, 10);
          this.pages = this.newCourses.length / 10 + 1;
          this.$store.dispatch("courses/setAllCourses", res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else if (
      this.$store.state.courses.searchedCourses.length != 0 &&
      this.$store.state.courses.searchedString
    ) {
      this.newCourses = this.$store.state.courses.searchedCourses.slice(0, 10);
      this.pages = this.$store.state.courses.searchedCourses.length / 10 + 1;
    } else if (this.$store.state.courses.filteredCourses.length != 0) {
      this.newCourses = this.$store.state.courses.filteredCourses.slice(0, 10);
      this.pages = this.$store.state.courses.filteredCourses.length / 10 + 1;
    } else {
      this.newCourses = this.$store.state.courses.updatedCourses.slice(0, 10);
      this.pages = this.$store.state.courses.updatedCourses.length / 10 + 1;
    }
  },
  computed: {
    // filteredCourses: function () {
    //   return this.newCourses.filter((course) => {
    //     return (
    //       course.name.toLowerCase().match(this.queryString) ||
    //       course.description.toLowerCase().match(this.queryString) ||
    //       course.category.name.toLowerCase().match(this.queryString)
    //     );
    //   });
    // },
  },
  methods: {
    selectCategory() {
      console.log(this.category);
      categoryData.getCategoryInfoByName(this.category).then((res) => {
        this.cId = res.data._id;
        courseData
          .getCategoryWiseCourses(this.cId)
          .then((res) => {
            this.courses = res.data;
          })
          .catch((err) => {
            console.log(err.response);
          });

        subcategoryData.getAllSubCategories(this.cId).then((res) => {
          this.subcategories = res.data;
        });
      });
    },
    selectSubCategory() {
      console.log(this.subcategory);
      subcategoryData.getSubCateInfoByName(this.subcategory).then((res) => {
        this.sId = res.data._id;
        courseData.getSubCategoryWiseCourses(this.cId, this.sId).then((res) => {
          this.courses = res.data;
        });
      });
    },
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
      this.newCourses = this.$store.state.courses.allCourses.slice(0, 10);
      this.pages = this.$store.state.courses.allCourses.length / 10 + 1;
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
      } else {
        courses = this.$store.state.courses.updatedCourses.filter((course) => {
          return (
            course.name.toLowerCase().match(this.queryString) ||
            course.description.toLowerCase().match(this.queryString) ||
            course.category.name.toLowerCase().match(this.queryString)
          );
        });
        this.$store.dispatch("courses/setSearchedCourses", courses);
      }
      this.newCourses = courses.slice(0, 10);
      this.pages = courses.length / 10 + 1;
    },
    applyFilter() {
      this.page = 1;
      let filteredCourses;
      if (this.$store.state.courses.searchedCourses.length != 0) {
        filteredCourses = this.$store.state.courses.searchedCourses.filter(
          (course) => {
            if (this.filter == "all") {
              return course;
            } else if (this.filter == "paid") {
              return course.price > 0;
            } else {
              return course.price == undefined;
            }
          }
        );
      } else {
        filteredCourses = this.$store.state.courses.updatedCourses.filter(
          (course) => {
            if (this.filter == "all") {
              return course;
            } else if (this.filter == "paid") {
              return course.price > 0;
            } else {
              return course.price == undefined;
            }
          }
        );
      }
      this.$store.dispatch("courses/setFilteredCourses", filteredCourses);
      this.newCourses = filteredCourses.slice(0, 10);
      this.$store.dispatch("courses/setFilterStatus", true);
      // this.filterAppliedCourses = filteredCourses
      this.pages = filteredCourses.length / 10 + 1;
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
        this.pages = courses.length / 10 + 1;
        this.newCourses = courses.slice(0, 10);
      } else {
        this.pages = this.$store.state.courses.updatedCourses.length / 10 + 1;
        this.newCourses = this.$store.state.courses.updatedCourses.slice(0, 10);
      }
      this.$refs.all.checked = true;
      this.$store.dispatch("courses/setFilterStatus", false);
      this.page = 1;
    },
    getCourses(data) {
      this.$store.dispatch("courses/setSearchedString", "");
      if (data == "no course found") {
        this.courses = "no course found";
        this.$store.dispatch("courses/setUpdatedCourses", []);
      } else {
        this.courses = data;
        this.$store.dispatch("courses/setUpdatedCourses", data);
        this.$store.dispatch("courses/setFilteredCourses", []);
        this.page = 1;
        this.$refs.all.checked = true;
        // this.$store.state.courses.updatedCourses = data;
        // this.courses = data;
        this.newCourses = data.slice(0, 10);
        this.pages = data.length / 10 + 1;
      }
    },
    updateHandler(page) {
      console.log(page);
      if (
        this.$store.state.courses.searchedCourses.length != 0 &&
        this.$store.state.courses.searchedString
      ) {
        this.newCourses = this.$store.state.courses.searchedCourses.slice(
          10 * (page - 1),
          page * 10
        );
      } else if (this.$store.state.courses.filteredCourses.length != 0) {
        this.newCourses = this.$store.state.courses.filteredCourses.slice(
          10 * (page - 1),
          page * 10
        );
      } else {
        this.newCourses = this.$store.state.courses.updatedCourses.slice(
          10 * (page - 1),
          page * 10
        );
      }
    },
  },
};
</script>

<style scoped>

.offerCourse{
  position: absolute;
  top: 80px;
  z-index: 0;
  transform: translate(-46.6%,-225%);
}

.courseImg{
  z-index: -1;
}

.Pagination {
  transform: scale(1.3);
}

.courses {
  height: 100vh;
  overflow: auto;
}

.course {
  height: 170px;
  position: relative;
  box-shadow: 3px 3px 10px black;
}

.course:hover {
  border: 1px solid blueviolet !important;
  transform: scale(1.05);
}
</style>
