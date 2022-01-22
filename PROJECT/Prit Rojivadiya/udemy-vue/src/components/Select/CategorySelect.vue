<template>
  <select @change="selectCategory" v-model="category" class="form-select" id="specificSizeSelect">
    <option selected>Categories</option>
    <option
      v-for="category of categories"
      :key="category._id"
      :value="category._id"
    >
      {{ category.name }}
    </option>
  </select>
</template>

<script>
import categoryData from '../../services/category'
export default {
  name: "selectCategory",
  data(){
      return{
          categories: [],
          category: "Categories",
      }
  },
  mounted() {
    categoryData.getAllCategories().then((res) => {
      this.categories = res.data;
    });
  },
  updated(){
    this.$emit('category',this.category)
  },
  methods:{
      // selectCategory(){
      //     console.log(this.category)
      //     categoryData.getCategoryInfoByName(this.category).then((res)=>{
      //       this.$emit('categoryId',res.data._id);
      //     })
      //     this.$router.push({name: 'categoryWiseCourses', params: {cname: this.category}})
      // }
  }
};
</script>

<style>

</style>
