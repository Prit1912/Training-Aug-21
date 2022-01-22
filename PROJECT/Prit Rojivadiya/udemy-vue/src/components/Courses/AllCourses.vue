<template>
  <div class="container my-5">
    <SearchBar @query="searchCourse" />
    <div class="row my-3">
      <div class="col-sm-3">
        <select
          @change="selectCategory"
          v-model="category"
          class="form-select"
          id="specificSizeSelect"
        >
          <!-- <option selected>Categories</option> -->
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
          <!-- <option selected>SubCategories</option> -->
          <option
            v-for="subcategory of subcategories"
            :key="subcategory._id"
            :value="subcategory.name"
          >
            {{ subcategory.name }}
          </option>
        </select>
      </div>
    </div>

    <div v-for="course in filteredCourses" :key="course._id">
      {{ course }}
      <button @click="addToCart(course._id)">add to cart</button>
      <button @click="addToWishlist(course._id)">add to wishlist</button>
      <button @click="viewCourse(course._id)">view course</button>
    </div>
    <v-pagination
      v-model="page"
      :pages="10"
      :range-size="1"
      active-color="#DCEDFF"
      @update:modelValue="updateHandler"
    />
  </div>
</template>

<script>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import SearchBar from "../Search/SearchBar.vue";
import courseData from "../../services/courses";
import categoryData from "../../services/category";
import subcategoryData from "../../services/subcategory";
export default {
  name: "allCourses",
  components: {
    SearchBar,
    VPagination,
  },
  data() {
    return {
      courses: [],
      queryString: "",
      categories: [],
      category: "Categories",
      subcategories: [],
      subcategory: "SubCategories",
      cId: "",
      sId: "",
    };
  },
  created() {
    categoryData.getAllCategories().then((res) => {
      this.categories = res.data;
    });

    courseData
      .getAllCourses()
      .then((res) => {
        this.courses = res.data;
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
  computed: {
    filteredCourses: function () {
      return this.courses.filter((course) => {
        return (
          course.name.toLowerCase().match(this.queryString) ||
          course.description.toLowerCase().match(this.queryString) ||
          course.category.name.toLowerCase().match(this.queryString) ||
          course.subcategory.name.toLowerCase().match(this.queryString)
        );
      });
    },
  },
  methods: {
    selectCategory() {
      console.log(this.category);
      categoryData.getCategoryInfoByName(this.category).then((res) => {
        this.cId = res.data._id;
        this.queryString = "";
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
        this.queryString = "";
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
          alert("course added to wishlist");
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
          alert("course added to cart");
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
  },
};
</script>

<style></style>
