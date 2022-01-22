<template>
  <div class="row">
    <div class="col-sm-3">
        <!-- <CategorySelect @categoryId="setCategoryId" /> -->
      <div v-if="id">
        <SubCateSelect :categoryId="id" />
      </div>
    </div>
  </div>
    <div v-for="course of courses" :key="course._id">
      <p>{{ course }}</p>
    </div>
</template>

<script>
// import CategorySelect from '../Select/CategorySelect.vue'
import categoryData from "../../services/category";
import courseData from "../../services/courses"
import SubCateSelect from "../Select/SubCateSelect.vue";
export default {
  name: "categoryWiseCourses",
  components: {
    SubCateSelect,
    // CategorySelect
  },
  props: ["cname"],
  data() {
    return {
      courses: [],
      id: "",
    };
  },
  beforeMount() {
    categoryData
      .getCategoryInfoByName(this.cname)
      .then((res) => {
        this.id = res.data._id;
        courseData
          .getCategoryWiseCourses(this.id)
          .then((res) => {
            this.courses = res.data;
          })
          .catch((err) => {
            console.log(err.response);
          });
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
  methods:{
    setCategoryId(id){
      this.id = id;
      console.log(id)
      courseData.getCategoryWiseCourses(this.id).then((res)=>{
        this.courses = res.data
      })
    }
  }
};
</script>

<style></style>
