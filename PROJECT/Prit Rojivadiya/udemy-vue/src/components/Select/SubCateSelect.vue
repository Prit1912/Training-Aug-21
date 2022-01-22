<template>
  <select @change="selectSubCategory" v-model="subcategory" class="form-select" id="specificSizeSelect">
    <option>SubCategories</option>
    <option
      v-for="subcategory of subcategories"
      :key="subcategory._id"
      :value="subcategory.name"
    >
      {{ subcategory.name }}
    </option>
  </select>
</template>

<script>
import subcategoryData from '../../services/subcategory'
export default {
  name: "selectSubCategory",
  props:['categoryId'],
  data(){
      return{
          subcategories: [],
          subcategory: "SubCategories"
      }
  },
  created() {
    subcategoryData.getAllSubCategories(this.categoryId).then((res) => {
      this.subcategories = res.data;
    });
  },
  methods:{
      selectSubCategory(){
          console.log(this.subcategory)
          subcategoryData.getSubCateInfoByName(this.subcategory).then((res)=>{
            this.$emit('subCateId',res.data._id);
          })
          this.$router.push({name: 'subCategoryWiseCourses', params: {sname: this.subcategory}})
      }
  }
};
</script>

<style></style>
