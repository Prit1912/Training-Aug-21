<template>
  <div class="container my-5">
    <div class="actions">
      <p>
        <router-link :to="{ name: 'addcategory' }">
          <i class="fas fa-arrow-circle-right"></i> Add Category</router-link
        >
      </p>
      <p>
        <router-link :to="{ name: 'addSubCategory' }">
          <i class="fas fa-arrow-circle-right"></i> Add Sub Category</router-link
        >
      </p>
    </div>
    <hr>
    
    <h3>Categories</h3>
    <table class="table table-bordered text-center" >
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category of categories" :key="category._id" >
          <td>{{category._id}}</td>
          <td>{{category.name}}</td>
          <td><button class="btn btn-dark" @click="this.$router.push({name: 'updateCategory',params: {id:category._id}})" >Edit</button></td>
        </tr>
      </tbody>
    </table>
  <!-- <div v-for="category of categories" :key="category._id" >
      {{category._id}} - {{category.name}} - <button class="btn btn-dark" @click="this.$router.push({name: 'updateCategory',params: {id:category._id}})" >Edit</button>
  </div> -->
  <br><hr>
  <h3>Sub Categories</h3>
  <br>
  <table class="table table-bordered text-center" >
    <thead>
      <tr>
        <th>Index</th>
        <th>Subcategory</th>
        <th>Category</th>
        <th>Action</th>
      </tr>
    </thead>
    
      <tbody v-for="subcategory of subCategories" :key="subcategory._id" >
        <tr v-for="s of subcategory" :key="s._id" >
          <td>{{s._id}}</td>
          <td>{{s.name}}</td>
          <td>{{s.category.name}}</td>
          <td><button class="btn btn-dark" @click="this.$router.push({name: 'updateSubCategory', params:{cId:s.category._id, sId: s._id}})" >Edit</button></td>
        </tr>
      </tbody>
  </table>
  <!-- <div v-for="subcategory of subCategories" :key="subcategory._id" >
    <ul> {{subcategory[0].category.name}} </ul>
      <div v-for="s of subcategory" :key="s._id" >
         <li> {{s._id}} - {{s.name}} - <button class="btn btn-dark" @click="this.$router.push({name: 'updateSubCategory', params:{cId:s.category._id, sId: s._id}})" >Edit</button> </li>
      </div>
  </div> -->
  </div>
</template>

<script>
import categoryData from "../../../services/category";
import subCategoryData from "../../../services/subcategory";
export default {
  name: "categories",
  data() {
    return {
      categories: "",
      subCategories: [],
    };
  },
  created() {
    categoryData.getAllCategories().then((res) => {
      this.categories = res.data;
      for (let category of this.categories) {
        subCategoryData
          .getAllSubCategories(category._id)
          .then((res) => {
            this.subCategories.push(res.data);
          })
          .catch((err) => {
            console.log(err.response);
          });
      }
    });
  },
};
</script>

<style scoped>
a {
  color: blueviolet;
  transition: all 0.2s ease-in;
}
a:hover {
  font-size: 30px;
}
</style>
