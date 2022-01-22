<template>
  <div class="row my-5">
    <div class="col-6 ms-auto me-auto">
      <h1 style="color: blueviolet" class="mb-5">Add Course</h1>

      <div v-if="error" class="alert alert-danger" role="alert">
          {{ error }}
      </div>

      <form @submit.prevent="submit">
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label required"
            >Course Name</label
          >
          <input
            type="text"
            v-model="name"
            class="form-control"
            id="formGroupExampleInput"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label required"
            >Description</label
          >
          <textarea
            v-model="description"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="category" class="form-label required">Category</label>
          <select
            @change="selectCategory"
            v-model="category"
            class="form-select"
            id="category"
            aria-label="Default select example"
          >
            <option
              v-for="category of categoryArr"
              :key="category._id"
              :value="category._id"
            >
              {{ category.name }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="subcategory" class="form-label">Subcategory</label>
          <select
            v-model="subcategory"
            class="form-select"
            id="subcategory"
            aria-label="Default select example"
          >
          <option v-for="subcategory of subcategoryArr" :key="subcategory._id" :value="subcategory._id" >{{subcategory.name}}</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="ispaid" class="form-label required">Paid(Yes/No)</label>
          <select
            v-model="isPaid"
            class="form-select"
            id="ispaid"
            aria-label="Default select example"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Price</label>
          <input
            type="number"
            v-model="price"
            class="form-control"
            id="price"
          />
        </div>
        <div class="mb-3">
          <label for="courseImage" class="form-label required"
            >Course Image</label
          >
          <input
            @change="onSelect"
            class="form-control"
            name="image"
            ref="img"
            type="file"
            id="courseImage"
          />

        </div>
        <div class="mb-3">
          <label for="resources" class="form-label required"
            >Resource File</label
          >
          <input
            @change="onSelect"
            class="form-control"
            name="resources"
            ref="res"
            type="file"
            id="resources"
          />
        </div>
        <div class="mb-3">
          <label for="videos" class="form-label required">Videos</label>
          <input
            @change="onSelect"
            class="form-control"
            name="videos"
            ref="videos"
            type="file"
            id="videos"
            multiple
          />
        </div>
        <!-- <div v-if="videos">
          <p v-for="(video,index) of videos" :key="video" >{{video.name}} - <button class="btn" @click.prevent="remove(index)" ><i class="fas fa-times-circle"></i></button> </p>
        </div> -->
        <button class="btn btn-success">Upload</button>
      </form>
    </div>
  </div>
</template>

<script>
import courseData from "../../services/courses";
import categoryData from "../../services/category";
import subcategoryData from "../../services/subcategory";
export default {
  name: "addCourse",
  data() {
    return {
      name: "",
      description: "",
      category: "",
      subcategory: "",
      isPaid: "",
      price: null,
      image: "",
      resources: "",
      videos: [],
      categoryArr: [],
      subcategoryArr: [],
      error: "",
      message: ""
    };
  },
  mounted() {
    categoryData
      .getAllCategories()
      .then((res) => {
        console.log(res);
        this.categoryArr = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    selectCategory() {
      console.log(this.category);
      subcategoryData.getAllSubCategories(this.category).then((res) => {
        this.subcategoryArr = res.data;
      });
    },
    onSelect() {
      console.log(this.$refs);
      this.image = this.$refs.img.files[0];
      console.log(this.image);
      this.resources = this.$refs.res.files[0];
      this.videos = this.$refs.videos.files
      console.log(this.videos)
      // const videos = this.$refs.videos.files;
      // console.log(videos.length)
      // for(let i = 0;i<videos.length;i++){
      //     this.videos[i] = videos[i];
      // }
    },
    submit() {
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("description", this.description);
      formData.append("category", this.category);
      if(this.subcategory){
        formData.append("subcategory", this.subcategory);
      }
      formData.append("isPaid", this.isPaid);
      if (this.isPaid == "true") {
        if (!this.price) {
          return this.error = "price is required";
        }
        formData.append("price", this.price);
      } else {
        if (this.price) {
          return this.error = "price is not required";
        }
      }
      formData.append("image", this.image);
      formData.append("resources", this.resources);
      for (var i = 0; i < this.$refs.videos.files.length; i++) {
        let file = this.$refs.videos.files[i];
        formData.append("videos", file);
      }
      //   formData.append('videos',this.videos)
      courseData
        .uplodadCourse(formData)
        .then((res) => {
          console.log(res.data);
          this.error = "";
          this.message = "Files uploaded successfully"
        })
        .catch((err) => {
          console.log(err.response);
          this.error = err.response.data
          this.message = "";
        });
    },
  },
};
</script>

<style scoped>
.required::after {
  content: " *";
  color: red;
}
</style>
