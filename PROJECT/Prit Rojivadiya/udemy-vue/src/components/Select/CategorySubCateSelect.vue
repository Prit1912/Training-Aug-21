<template>
<div class="row">
  <div class="col-sm-4">
    <h5 style="color: blueviolet" >Categories</h5>
      <select @change="selectCategory" v-model="cId" class="form-select" id="specificSizeSelect">
        <option v-if="comp=='user'" value="all" selected>Select category</option>
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
        <option v-if="comp=='user'" value="all" selected >Select subcategory</option>
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
    props: ['comp'],
    data(){
        return{
            cId: this.$store.state.courses.categoryId,
            sId: this.$store.state.courses.subCategoryId,
            categories: [],
            subcategories: [],
            courses: []
        }
    },
    created(){
      // get all categories
        categoryData.getAllCategories().then((res)=>{
            this.categories = res.data;
        })

        if(this.cId == 'all'){
          return;
        }
        subCategoryData.getAllSubCategories(this.cId).then((res)=>{
              this.subcategories = res.data
              console.log(this.subcategories)
        }).catch((err)=>{
          console.log(err.response)
        })
    },
    methods:{

      // get courses of selected category
      selectCategory(){
        this.$store.dispatch('courses/setCategoryId',this.cId)
        this.$store.dispatch('courses/setSubCategoryId',"all")
        this.$store.dispatch('courses/setSearchedCourses',[])
        this.$store.dispatch('courses/setSearchedString',"")

        if(this.cId == 'all'){
          courseData.getAllCourses().then((res)=>{
            this.courses = res.data;
            this.$emit('courses',this.courses);
          })
        }else{
            courseData.getCategoryWiseCourses(this.cId).then((res)=>{
              this.courses = res.data;
                this.$emit('courses',this.courses);
            })
            subCategoryData.getAllSubCategories(this.cId).then((res)=>{
              this.subcategories = res.data
              console.log(this.subcategories)
              this.sId = null
            }).catch(()=>{
              this.subcategories = []
            })
        }
        },

        // get courses of selected sub category
        selectSubCategory(){
          this.$store.dispatch('courses/setSubCategoryId',this.sId)
          this.$store.dispatch('courses/setSearchedCourses',[])
          this.$store.dispatch('courses/setSearchedString',"")

          if(this.sId == 'all'){
            courseData.getCategoryWiseCourses(this.cId).then((res)=>{
              this.courses = res.data;
                this.$emit('courses',this.courses);
            })
          }else{
            courseData.getSubCategoryWiseCourses(this.cId,this.sId).then((res)=>{
                this.courses = res.data;
                this.$emit('courses',this.courses);
            })
          }
        }
    }
}
</script>

<style>

</style>