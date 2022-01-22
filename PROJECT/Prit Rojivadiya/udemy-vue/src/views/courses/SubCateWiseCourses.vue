<template>
  <div class="container">
      <h2 class="my-3" >Search results for {{this.$router.currentRoute.value.params.cname}} / {{this.$router.currentRoute.value.params.sname}}</h2> 
        <SubCategoryWiseCourse :categoryId="categoryId" :subcategoryId="subcategoryId" />
  </div>
</template>

<script>
import SubCategoryWiseCourse from '../../components/Courses/SubCateWiseCourses.vue';
import subcategoryData from '../../services/subcategory';
export default {
    name: 'subCategoryWiseCourse',
    data(){
        return{
            categoryId: "",
            subcategoryId: "",
        }
    },
    components:{
        SubCategoryWiseCourse
    },
    created(){
        subcategoryData.getSubCateInfoByName(this.$router.currentRoute.value.params.sname).then((res)=>{
            this.subcategoryId = res.data._id;
            this.categoryId = res.data.category;
        })
    },
}
</script>

<style>

</style>