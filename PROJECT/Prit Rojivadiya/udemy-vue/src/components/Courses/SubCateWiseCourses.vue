<template>
  <div class="row">
    <div class="col-sm-3">
      <div v-if="categoryId">
          <CategorySelect />
        <SubCateSelect :categoryId="categoryId" @subCateId="setSubCateId" />
      </div>
    </div>
  </div>
      {{courses}}
</template>

<script>
import CategorySelect from '../Select/CategorySelect.vue'
import SubCateSelect from "../Select/SubCateSelect.vue";
import subcategoryData from '../../services/subcategory'
import courseData from "../../services/courses"
export default {
  name: "subcategoryWiseCourse",
  props: ["categoryId"],
  data(){
      return{
          subcategoryId: "",
          courses: ""
      }
  },
  components: {
    SubCateSelect,
    CategorySelect
  },

  mounted(){
      subcategoryData.getSubCateInfoByName(this.$router.currentRoute.value.params.sname).then((res)=>{
          courseData.getSubCategoryWiseCourses(this.categoryId,res.data._id).then((res)=>{
              this.courses = res.data;
          })
      })
  },

  methods:{
      setSubCateId(id){
          this.subcategoryId = id;
          courseData.getSubCategoryWiseCourses(this.categoryId,id).then((res)=>{
          console.log(res.data);
          this.courses = res.data;
      })
      }
  }
};
</script>

<style></style>
