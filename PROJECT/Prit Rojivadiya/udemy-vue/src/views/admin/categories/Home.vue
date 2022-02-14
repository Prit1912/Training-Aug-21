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
          <i class="fas fa-arrow-circle-right"></i> Add Sub
          Category</router-link
        >
      </p>
    </div>
    <hr />

    <h3>Categories</h3>
    <div class="row my-3">
      <div class="col-sm-4">
        <NormalSearch @query="searchCategory" />
      </div>
    </div>
    <div class="categoryTable">
      <div class="table-responsive">
        <table class="table table-bordered border-dark table-light border-light table-hover text-center">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category of updatedCategories" :key="category._id">
              <td>{{ category._id }}</td>
              <td>{{ category.name }}</td>
              <td>
                <button
                  class="btn btn-dark"
                  @click="
                    this.$router.push({
                      name: 'updateCategory',
                      params: { id: category._id },
                    })
                  "
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <br />
    <hr />
    <h3>Sub Categories</h3>
    <div class="row my-3">
      <div class="col-sm-4">
        <NormalSearch @query="searchSubcategory" />
      </div>
    </div>
    <div class="subcategoryTable">
      <div class="table-responsive">
        <table class="table table-bordered border-dark table-light border-light table-hover text-center">
          <thead>
            <tr>
              <th>Index</th>
              <th>Subcategory</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody v-for="subcategory of updatedSubcategories" :key="subcategory._id">
            <tr v-for="s of subcategory" :key="s._id">
              <td>{{ s._id }}</td>
              <td>{{ s.name }}</td>
              <td>{{ s.category.name }}</td>
              <td>
                <button
                  class="btn btn-dark"
                  @click="
                    this.$router.push({
                      name: 'updateSubCategory',
                      params: { cId: s.category._id, sId: s._id },
                    })
                  "
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import categoryData from "../../../services/category";
import subCategoryData from "../../../services/subcategory";
import NormalSearch from '../../../components/Search/NormalSearch.vue'
export default {
  name: "categories",
  data() {
    return {
      categories: [],
      subCategories: [],
      updatedCategories: [],
      updatedSubcategories: []
    };
  },
  components:{
    NormalSearch
  },
  created() {
    categoryData.getAllCategories().then((res) => {
      this.categories = res.data;
      this.updatedCategories = res.data;
      for (let category of this.categories) {
        subCategoryData
          .getAllSubCategories(category._id)
          .then((res) => {
            this.subCategories.push(res.data);
            this.updatedSubcategories.push(res.data);
          })
          .catch((err) => {
            console.log(err.response);
          });
      }
    });
  },
  methods:{
    searchCategory(str){
      str = str.toLowerCase();
      this.updatedCategories = this.categories.filter((category)=>{
        return(
          category.name.match(str)
        )
      })
    },
    searchSubcategory(str){
      str = str.toLowerCase();
      this.updatedSubcategories = this.subCategories.filter((subCategory)=>{
        for(let s of subCategory){
          return(
            s.name.match(str) ||
            s.category.name.match(str)
          )
        }
      })
    }
  }
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

.categoryTable {
  height: 50vh;
  overflow: auto;
}

.subcategoryTable {
  height: 50vh;
  overflow: auto;
}
</style>
