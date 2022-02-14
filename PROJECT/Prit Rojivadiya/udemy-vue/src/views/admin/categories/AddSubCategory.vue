<template>
  <div class="container">
    <form @submit.prevent class="my-5">
        Select category: <select v-model="category" >
            <option v-for="category of categories" :key="category._id" :value="category._id" >{{category.name}}</option>
        </select>
        <br><br>
      Sub category : <input type="text" v-model="subcategory" /> <br /><br />
      <button @click="addSubCategory" class="btn btn-dark">Add</button>
    </form>
    <div v-if="message" class="alert alert-success col-sm-4" role="alert">
      {{ message }}
    </div>
    <div v-if="error" class="alert alert-danger col-sm-4" role="alert">
      {{ error }}
    </div>
  </div>
</template>

<script>
import categoryData from '../../../services/category'
import subCategoryData from '../../../services/subcategory'
export default {
  name: "addSubCategory",
  data(){
      return{
          categories: [],
          category: "",
          subcategory: "",
          error: "",
          message: ""
      }
  },
  created(){
      categoryData.getAllCategories().then((res)=>{
          this.categories = res.data;
      })
  },
  methods:{
      addSubCategory(){
          let subcategory = {
              name: this.subcategory
          }
          subCategoryData.addSubCategory(this.category,subcategory).then((res)=>{
              console.log(res.data);
              this.error = "";
              this.message = 'subcategory added successfully'
          }).catch((err)=>{
              this.error = err.response.data;
              this.message = ""
          })
      }
  }
};
</script>

<style></style>
