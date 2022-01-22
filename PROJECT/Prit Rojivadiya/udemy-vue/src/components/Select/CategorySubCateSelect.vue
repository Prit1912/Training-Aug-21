<template>
<div class="row">
  <div class="col-sm-4">
    <h5 style="color: blueviolet" >Categories</h5>
      <select @change="selectCategory" v-model="cId" class="form-select" id="specificSizeSelect">
    <option
      v-for="category of categories"
      :key="category._id"
      :value="category._id"
    >
      {{ category.name }}
    </option>
  </select>
  </div>
  <div class="col-sm-4">
    <h5 style="color: blueviolet" >Subcategories</h5>
      <select @change="selectSubCategory" v-model="sId" class="form-select" id="specificSizeSelect">
    <option
      v-for="subcategory of subcategories"
      :key="subcategory._id"
      :value="subcategory._id"
    >
      {{ subcategory.name }}
    </option>
  </select>
  </div>
</div>

</template>

<script>
import categoryData from '../../services/category'
import subCategoryData from '../../services/subcategory'
import courseData from '../../services/courses'
export default {
    name: 'categorySubcategorySelect',
    data(){
        return{
            cId: null,
            sId: null,
            categories: [],
            subcategories: [],
            courses: []
        }
    },
    created(){
        categoryData.getAllCategories().then((res)=>{
            this.categories = res.data;
        })
    },
    methods:{
        selectCategory(){
            courseData.getCategoryWiseCourses(this.cId).then((res)=>{
                this.courses = res.data;
                this.$emit('courses',this.courses);
            })
            subCategoryData.getAllSubCategories(this.cId).then((res)=>{
                this.subcategories = res.data
                this.sId = null;
            })
        },
        selectSubCategory(){
            courseData.getSubCategoryWiseCourses(this.cId,this.sId).then((res)=>{
                this.courses = res.data;
                this.$emit('courses',this.courses);
            })
        }
    }
}
</script>

<style>

</style>