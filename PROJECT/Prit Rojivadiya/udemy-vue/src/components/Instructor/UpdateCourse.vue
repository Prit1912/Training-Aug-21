<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-6 ms-auto me-auto">
        <h1 style="color: blueviolet" class="mb-5">Update Course</h1>

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
              v-model="course.name"
              class="form-control"
              id="formGroupExampleInput"
            />
            <span class="error">{{ errorName }}</span>
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
            <span class="error">{{ errorDescription }}</span>
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
            <span class="error">{{ errorCategory }}</span>
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
            <span class="error">{{ errorSubcategory }}</span>
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
            <span class="error">{{ errorIsPaid }}</span>
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input
              type="number"
              v-model="course.price"
              class="form-control"
              id="price"
            />
            <span class="error">{{ errorPrice }}</span>
          </div>
          <br />
          <button class="btn btn-success">Update</button>
        </form>
        <br />
        <div v-if="message" class="alert alert-success" role="alert">
          {{ message }}
        </div>
        <br />
        <h3 style="color: blueviolet">Replace files</h3>
        <div class="mb-3">
          <label for="courseImage" class="form-label required"
            >Course Image</label
          ><br />
          <img
            v-if="image"
            :src="image.url"
            class="border border-dark"
            alt=""
          />
          <br /><br />
          <input
            @change="onSelect"
            class="form-control"
            name="image"
            ref="img"
            type="file"
            id="courseImage"
          />
          <button class="btn btn-success my-2" @click="changeImage()">
            change
          </button>
          <div v-if="updatingImage">
            <div class="progress">
              <div
                class="progress-bar progress-bar-animated progress-bar-striped"
                role="progressbar"
                style="width: 100%"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <span v-if="imgError" class="error">Invalid image type</span>
        </div>
        <div class="mb-3">
          <label for="resources" class="form-label required"
            >Resource File (zip)</label
          >
          <br />
          <button
            @click="download(resource.url, 'example.zip')"
            class="btn btn-outline-dark"
          >
            {{ resource.name }} <i class="fas fa-download"></i>
          </button>
          <br /><br />
          <input
            @change="onSelect"
            class="form-control"
            name="resources"
            ref="res"
            type="file"
            id="resources"
          />
          <button @click="changeResources()" class="btn btn-success my-2">
            change
          </button>
          <div v-if="updatingResources" >
            <div class="progress">
              <div
                class="progress-bar progress-bar-animated progress-bar-striped"
                role="progressbar"
                style="width: 100%"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <span v-if="resourcesError" class="error">Invalid resource type</span>
        </div>
        <div class="mb-3">
          <label for="videos" class="form-label required">Videos</label>
          <div v-for="(video, index) of videos" :key="index">
            {{ index + 1 }} - {{ video.name }} -
            <button class="btn" @click="remove(index)">
              <i class="fas fa-times-circle"></i>
            </button>
          </div>
          <input
            @change="onSelect"
            class="form-control"
            name="videos"
            ref="videos"
            type="file"
            id="videos"
            multiple
          />
          <br />
          Select position at which you want to add following videos:
          <select
            v-model="position"
            class="form-select"
            aria-label="Default select example"
          >
            <option v-for="i of videos.length + 1" :key="i" :value="i">
              {{ i }}
            </option>
          </select>
          <div v-if="newVideos">
            <span v-for="(video, index) of newVideos" :key="video">
              <span :class="video.type == 'video/mp4' ? '' : 'error'">{{
                video.name
              }}</span>
              -
              <button class="btn" @click.prevent="removeFromNewVideos(index)">
                <i class="fas fa-times-circle"></i>
              </button>
              <br />
            </span>
          </div>
          <button @click="changeVideos()" class="btn btn-success my-2">
            change
          </button>
          <div v-if="updatingVideos" >
            <div class="progress">
              <div
                class="progress-bar progress-bar-animated progress-bar-striped"
                role="progressbar"
                style="width: 100%"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import "../../assets/css/style.css";
import categoryData from "../../services/category";
import subcategoryData from "../../services/subcategory";
import courseData from "../../services/courses";
export default {
  name: "updateCourse",
  data() {
    let course = {
      name: "",
      description: "",
      category: "",
      subcategory: "",
      isPaid: "",
      price: null,
    };

    const validationSchema = yup.object({
      name: yup.string().min(2, "atleast 2 character required").required(),
      description: yup.string().required(),
      category: yup.number().required(),
      subcategory: yup.number(),
      isPaid: yup.string().required(),
      price: yup.string().when("isPaid", {
        is: "true",
        then: yup.string().required(),
      }),
    });

    const { handleSubmit } = useForm({
      validationSchema,
    });

    const { value: name, errorMessage: errorName } = useField("name");
    // const {errorMessage: errorName} = useField('name');
    const { value: description, errorMessage: errorDescription } =
      useField("description");
    // const {errorMessage: errorDescription} = useField('description');
    const { value: category, errorMessage: errorCategory } =
      useField("category");
    // const {errorMessage: errorCategory} = useField('category');
    const { value: subcategory, errorMessage: errorSubcategory } =
      useField("subcategory");
    // const {errorMessage: errorSubcategory} = useField('subcategory');
    const { value: isPaid, errorMessage: errorIsPaid } = useField("isPaid");
    // const {errorMessage: errorIsPaid} = useField('isPaid');
    const { value: price, errorMessage: errorPrice } = useField("price");
    // const {errorMessage: errorPrice} = useField('price');

    course.name = name;
    course.description = description;
    course.category = category;
    course.subcategory = subcategory;
    course.isPaid = isPaid;
    course.price = price;

    const submit = handleSubmit((values) => {
      console.log(values);
      this.submitCourse(values);
    });

    return {
      course,
      submit,
      errorName,
      errorDescription,
      errorCategory,
      errorSubcategory,
      errorIsPaid,
      errorPrice,
      categoryArr: [],
      subcategoryArr: [],
      error: "",
      message: "",
      resource: "",
      imgError: "",
      resourcesError: "",
      videos: "",
      image: "",
      newVideos: "",
      position: 1,
      updatingImage: "",
      updatingResources: "",
      updatingVideos: "",
    };
  },
  props: ["id"],
  created() {
    courseData
      .getInstructorCourseById(this.id)
      .then((res) => {
        this.resource = res.data.resources;
        this.image = res.data.courseImage;
        this.videos = res.data.videos;
        this.course.name = res.data.name;
        this.course.description = res.data.description;
        this.course.category = res.data.category;
        this.course.subcategory = res.data.subcategory;
        this.course.isPaid = res.data.isPaid;
        this.course.price = res.data.price;
        subcategoryData
          .getAllSubCategories(this.course.category)
          .then((res) => {
            this.subcategoryArr = res.data;
          });
        console.log(res.data);
      })
      .catch((err) => {
        this.error = err.response.data;
      });
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
      console.log(this.course.category);
      subcategoryData.getAllSubCategories(this.course.category).then((res) => {
        this.subcategoryArr = res.data;
      });
    },
    submitCourse(course) {
      courseData
        .updateInstCourse(this.id, course)
        .then((res) => {
          console.log(res.data);
          this.message = "course updated successfully";
          this.error = "";
          this.$store.dispatch("courses/setUpdatedCourses", []);
        this.$store.dispatch("courses/setAllCourses", []);
        })
        .catch((err) => {
          this.error = err.response.data;
          this.message = "";
        });
    },
    onSelect() {
      // check file type is valid or not on client side
      console.log(this.$refs);
      let image = this.$refs.img.files[0];
      console.log(image);
      if (
        image &&
        !["image/jpeg", "image/jpg", "image/png"].includes(image.type)
      ) {
        this.imgError = "error";
      } else {
        this.imgError = "";
      }
      let resources = this.$refs.res.files[0];
      console.log(resources);
      if (resources && resources.type != "application/x-zip-compressed") {
        this.resourcesError = "error";
      } else {
        this.resourcesError = "";
      }
      this.newVideos = this.$refs.videos.files;
      console.log(this.newVideos);
    },
    changeImage() {
      const formData = new FormData();
      this.updatingImage = 'changing image'
      formData.append("image", this.$refs.img.files[0]);
      courseData
        .updateCourseImage(this.id, formData)
        .then((res) => {
          console.log(res.data);
          this.image = res.data.courseImage;
          this.updatingImage = "";
        })
        .catch((err) => {
          console.log(err.response);
          this.imgError = err.response
        });
    },
    changeResources() {
      console.log(this.id);
      const formData = new FormData();
      formData.append("resources", this.$refs.res.files[0]);
      this.updatingResources = 'changing resources'
      courseData
        .updateCourseResource(this.id, formData)
        .then((res) => {
          console.log(res.data);
          this.resource = res.data.resources;
          this.updatingResources = ""
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    forceFileDownload(response, title) {
      console.log(title);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", title);
      document.body.appendChild(link);
      link.click();
    },
    download(url, title) {
      axios({
        method: "get",
        url,
        responseType: "arraybuffer",
      })
        .then((response) => {
          this.forceFileDownload(response, title);
        })
        .catch(() => console.log("error occured"));
    },
    remove(index) {
      console.log(index);
      let arr = [];
      for (let i = 0; i < this.videos.length; i++) {
        if (i != index) {
          arr.push(this.videos[i]);
        }
      }
      this.videos = arr;
    },
    removeFromNewVideos(index) {
      let arr = [];
      for (let i = 0; i < this.newVideos.length; i++) {
        if (i != index) {
          arr.push(this.newVideos[i]);
        }
      }
      this.newVideos = arr;
    },
    changeVideos() {
      let formData = new FormData();
      for (let i = 0; i < this.newVideos.length; i++) {
        formData.append("videos", this.newVideos[i]);
      }
      let arr = JSON.parse(JSON.stringify(this.videos));
      for (let i = 0; i < arr.length; i++) {
        formData.append("oldVideos", JSON.stringify(arr[i]));
        console.log(JSON.stringify(arr[i]));
      }
      formData.append("position", this.position);
      this.updatingVideos = "updating videos"
      courseData
        .updateCourseVideos(this.id, formData)
        .then((res) => {
          console.log(res.data);
          this.videos = res.data.videos;
          this.updatingVideos = ""
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>

<style></style>
