<template>
  <div class="container my-5">
    <h2 style="color: blueviolet" class="border-bottom border-2 my-3">
      Courses
    </h2>
    <button class="btn btn-dark" @click="this.$router.go()" >All Courses</button>
    <br><br>
    <SearchBar @query="searchCourse" /> 
    <br />
    <b class="ms-5">OR</b>
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

    <div class="row">
      <div class="col-sm-3">
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
      <div class="col-sm-9">
        <div v-if="courses == 'no course found' || filteredCourses.length == 0">
          <h3 class="my-5">No Course Found</h3>
        </div>
        <div v-else v-for="course in filteredCourses" :key="course._id">
          <!-- {{ course }}
      <button @click="addToCart(course._id)">add to cart</button>
      <button @click="addToWishlist(course._id)">add to wishlist</button>
      <button @click="viewCourse(course._id)">view course</button> -->
          <div class="row course text-center my-5 border border-3">
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
          <div v-if="filteredCourses.length > 0" class="col my-5 d-flex justify-content-center ">
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
      // categories: [],
      // category: "Categories",
      // subcategories: [],
      // subcategory: "SubCategories",
      // cId: "",
      // sId: "",
      filter: "",
      enrolledCourses: [],
      cartItems: [],
      wishlistItems: [],
      newCourses: [],
    };
  },
  created() {
    // get all categories
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
    courseData
      .getAllCourses()
      .then((res) => {
        this.courses = res.data;
        this.newCourses = this.courses.slice(0, 10);
        this.pages = this.newCourses.length / 10 + 1;
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
  computed: {
    filteredCourses: function () {
      return this.newCourses.filter((course) => {
        return (
          course.name.toLowerCase().match(this.queryString) ||
          course.description.toLowerCase().match(this.queryString) ||
          course.category.name.toLowerCase().match(this.queryString)
        );
      });
    },
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
    },
    applyFilter() {
      this.page = 1;
      this.newCourses = this.courses.filter((course) => {
        if (this.filter == "all") {
          return course;
        } else if (this.filter == "paid") {
          return course.price > 0;
        } else {
          return course.price == undefined;
        }
      }).slice(0,10);
      this.pages = this.newCourses.length / 10 + 1;
    },
    removeFilter() {
      this.newCourses = this.courses.slice(0,10);
      this.$refs.all.checked = true;
      this.page = 1;
    },
    getCourses(data) {
      this.$refs.all.checked = true;
      this.courses = data;
      this.newCourses = this.courses.slice(0, 10);
      this.pages = this.newCourses.length / 10 + 1;
    },
    updateHandler(page) {
      console.log(page);
      this.newCourses = this.courses.slice(10 * (page - 1), page * 10);
    },
  },
};
</script>

<style scoped>
.Pagination {
  transform: scale(1.3);
}
.course{
  box-shadow: 3px 3px 10px black;
}

.course:hover{
  border: 1px solid blueviolet !important;
  transform: scale(1.05);
}
</style>
