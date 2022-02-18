<template>
  <div class="row my-5">
    <div class="col-10 col-sm-6 ms-auto me-auto">
      <h1 style="color: blueviolet" class="mb-5">Add Course</h1>

      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>

      <form @submit="submit">
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label required"
            >Course Name</label
          >
          <input
            type="text"
            v-model="course.name"
            class="form-control"
            id="formGroupExampleInput"
          />
          <span class="error" >{{errorName}}</span>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label required"
            >Description</label
          >
          <textarea
            v-model="course.description"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <span class="error" >{{errorDescription}}</span>
        </div>
        <div class="mb-3">
          <label for="category" class="form-label required">Category</label>
          <select
            @change="selectCategory"
            v-model="course.category"
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
          <span class="error" >{{errorCategory}}</span>
        </div>
        <div class="mb-3">
          <label for="subcategory" class="form-label">Subcategory</label>
          <select
            v-model="course.subcategory"
            class="form-select"
            id="subcategory"
            aria-label="Default select example"
          >
            <option
              v-for="subcategory of subcategoryArr"
              :key="subcategory._id"
              :value="subcategory._id"
            >
              {{ subcategory.name }}
            </option>
          </select>
          <span class="error" >{{errorSubcategory}}</span>
        </div>
        <div class="mb-3">
          <label for="ispaid" class="form-label required">Paid(Yes/No)</label>
          <select
            v-model="course.isPaid"
            class="form-select"
            id="ispaid"
            aria-label="Default select example"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <span class="error" >{{errorIsPaid}}</span>
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Price</label>
          <input
            type="number"
            v-model="course.price"
            class="form-control"
            id="price"
          />
          <span class="error" >{{errorPrice}}</span>
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
          <span v-if="imgError" class="error">Invalid image type</span>
        </div>
        <div class="mb-3">
          <label for="resources" class="form-label required"
            >Resource File (zip)</label
          >
          <input
            @change="onSelect"
            class="form-control"
            name="resources"
            ref="res"
            type="file"
            id="resources"
          />
          <span v-if="resourcesError" class="error">Invalid resource type</span>
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
        <br />
        <div v-if="videos">
          <p v-for="(video, index) of videos" :key="video">
            <span :class="video.type == 'video/mp4'?'':'error'" >{{ video.name }}</span> -
            <button class="btn" @click.prevent="remove(index)">
              <i class="fas fa-times-circle"></i>
            </button>
          </p>
        </div>
        <button class="btn btn-success">Upload</button>
      </form>
      <br />
      <div v-if="message" class="alert alert-success" role="alert">
        {{ message }}
      </div>

      <div v-if="progress">
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 100%"
          >
            {{progress}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import '../../assets/css/style.css'
// import http from "../../http-common";
import categoryData from "../../services/category";
import subcategoryData from "../../services/subcategory";
import courseData from '../../services/courses'
export default {
  name: "addCourse",
  data() {
    let course = {
      name: "",
      description: "",
      category: "",
      subcategory: "",
      isPaid: "",
      price: null,
    }

    const validationSchema = yup.object({
      name: yup.string().min(2,'atleast 2 character required').required(),
      description: yup.string().required(),
      category: yup.number().required(),
      subcategory: yup.number(),
      isPaid: yup.string().required(),
      price: yup.string().when("isPaid", {
        is: "true", 
        then: yup.string().required(),
      }),
    })

    const { handleSubmit } = useForm({
      validationSchema
    })

    const {value: name, errorMessage: errorName} = useField('name');
    const {value: description, errorMessage: errorDescription} = useField('description');
    const {value: category, errorMessage: errorCategory} = useField('category');
    const {value: subcategory, errorMessage: errorSubcategory} = useField('subcategory');
    const {value: isPaid, errorMessage: errorIsPaid} = useField('isPaid');
    const {value: price, errorMessage: errorPrice} = useField('price');

    course.name = name;
    course.description = description;
    course.category = category;
    course.subcategory = subcategory;
    course.isPaid = isPaid;
    course.price = price;

    const submit = handleSubmit((values)=>{
      console.log(values);
      this.submitCourse();
    })

    return {
      course,
      submit,
      errorName,
      errorDescription,
      errorCategory,
      errorSubcategory,
      errorIsPaid,
      errorPrice,
      image: "",
      resources: "",
      videos: [],
      categoryArr: [],
      subcategoryArr: [],
      error: "",
      progress: "",
      message: "",
      uploadPercentage: 0,
      imgError: "",
      resourcesError: ""
    };
  },
  created() {

    // get all categories
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

    // select category onchange
    selectCategory() {
      console.log(this.course.category);
      subcategoryData.getAllSubCategories(this.course.category).then((res) => {
        this.subcategoryArr = res.data;
      });
    },

    // remove video from selected videos
    remove(index) {
      console.log(index);
      console.log(this.videos[index]);
      console.log(this.$refs.videos.files);
      let newVideos = [];
      for (let i = 0; i < this.videos.length; i++) {
        if (i != index) {
          newVideos.push(this.videos[i]);
        }
      }
      console.log(newVideos);
      this.videos = newVideos;
    },
    onSelect() {

      // check file type is valid or not on client side
      console.log(this.$refs);
      this.image = this.$refs.img.files[0];
      console.log(this.image);
      if(this.image && !["image/jpeg","image/jpg","image/png"].includes(this.image.type)){
        this.imgError = 'error'
      }else{
        this.imgError = ''
      }
      this.resources = this.$refs.res.files[0];
      console.log(this.resources)
      if(this.resources && this.resources.type != "application/x-zip-compressed"){
        this.resourcesError = 'error'
      }else{
        this.resourcesError = ''
      }
      this.videos = this.$refs.videos.files;
      console.log(this.videos);
    },
    submitCourse() {
      const formData = new FormData();
      formData.append("name", this.course.name);
      formData.append("description", this.course.description);
      formData.append("category", this.course.category);
      if (this.course.subcategory) {
        formData.append("subcategory", this.course.subcategory);
      }
      formData.append("isPaid", this.course.isPaid);
      if (this.course.isPaid == "true") {
        if (!this.course.price) {
          return (this.error = "price is required");
        }
        formData.append("price", this.course.price);
      } else {
        if (this.course.price) {
          return (this.error = "price is not required");
        }
      }
      formData.append("image", this.image);
      formData.append("resources", this.resources);
      for (var i = 0; i < this.videos.length; i++) {
        let file = this.videos[i];
        formData.append("videos", file);
      }
      this.progress = "uploading files to server";
      courseData.uploadCourse(formData)
      // http
      //   .post(`api/courses/inst-courses`, formData, {
      //     headers: {
      //       "x-access-token": this.$store.state.user.token,
      //       "Content-Type": "multipart/form-data",
      //     },
      //     onUploadProgress: function (progressEvent) {
      //       this.uploadPercentage = parseInt(
      //         Math.round((progressEvent.loaded / progressEvent.total) * 100)
      //       );
      //     }.bind(this),
      //   })
        .then((res) => {
          console.log(res.data);
          this.error = "";
          this.message = "Course uploaded successfully";
          this.progress = "";
          setTimeout(()=>{
            this.$router.push({name: 'instCourses'})
          },1000)
        })
        .catch((err) => {
          console.log(err.response);
          this.error = err.response.data;
          this.message = "";
          this.progress = "";
        })
        .finally(() => {
          this.uploadPercentage = 0;
        });
    },
  },
};
</script>

<style>

</style>
