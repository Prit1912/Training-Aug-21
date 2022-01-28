<template>
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
          <!-- <span class="error">{{ errorName }}</span> -->
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
          <!-- <span class="error">{{ errorDescription }}</span> -->
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
          <!-- <span class="error">{{ errorCategory }}</span> -->
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
          <!-- <span class="error">{{ errorSubcategory }}</span> -->
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
          <!-- <span class="error">{{ errorIsPaid }}</span> -->
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Price</label>
          <input
            type="number"
            v-model="course.price"
            class="form-control"
            id="price"
          />
          <!-- <span class="error">{{ errorPrice }}</span> -->
        </div>
        <br />
        <button class="btn btn-success">Update</button>
      </form>
      <br />
      <div v-if="message" class="alert alert-success" role="alert">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
// import { useField, useForm } from "vee-validate";
// import * as yup from "yup";
import '../../assets/css/style.css'
import categoryData from "../../services/category";
import subcategoryData from '../../services/subcategory'
import courseData from "../../services/courses";
export default {
  name: "updateCourse",
  data() {
    //   let Course = {
    //   name: "",
    //   description: "",
    //   category: "",
    //   subcategory: "",
    //   isPaid: "",
    //   price: null,
    // }

    // const validationSchema = yup.object({
    //   name: yup.string().min(2,'atleast 2 character required').required(),
    //   description: yup.string().required(),
    //   category: yup.number().required(),
    //   subcategory: yup.number(),
    //   isPaid: yup.string().required(),
    //   price: yup.number().when('isPaid',{
    //     is:'true',
    //     then: yup.number().required()
    //   })
    // })

    // const { handleSubmit } = useForm({
    //   validationSchema
    // })

    // // const {value: name, errorMessage: errorName} = useField('name');
    // const {errorMessage: errorName} = useField('name');
    // // const {value: description, errorMessage: errorDescription} = useField('description');
    // const {errorMessage: errorDescription} = useField('description');
    // // const {value: category, errorMessage: errorCategory} = useField('category');
    // const {errorMessage: errorCategory} = useField('category');
    // // const {value: subcategory, errorMessage: errorSubcategory} = useField('subcategory');
    // const {errorMessage: errorSubcategory} = useField('subcategory');
    // // const {value: isPaid, errorMessage: errorIsPaid} = useField('isPaid');
    // const {errorMessage: errorIsPaid} = useField('isPaid');
    // // const {value: price, errorMessage: errorPrice} = useField('price');
    // const {errorMessage: errorPrice} = useField('price');

    // Course.name = name;
    // Course.description = description;
    // Course.category = category;
    // Course.subcategory = subcategory;
    // Course.isPaid = isPaid;
    // Course.price = price;

    // const submit = handleSubmit((values)=>{
    //     console.log(this.course)
    //   console.log(values);
    // //   this.submitCourse();
    // })
 
    return {
    //   course:"",
    //   submit,
    //   errorName,
    //   errorDescription,
    //   errorCategory,
    //   errorSubcategory,
    //   errorIsPaid,
    //   errorPrice,
      course: {},
      categoryArr: [],
      subcategoryArr: [],
      error: "",
      message: ""
    };
  },
  props: ["id"],
  created() {
    courseData.getInstructorCourseById(this.id).then((res) => {
      this.course = res.data;
      subcategoryData.getAllSubCategories(this.course.category).then((res)=>{
          this.subcategoryArr = res.data;
      })
      console.log(res.data);
    }).catch((err)=>{
        this.error = err.response.data
    })
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
      subcategoryData.getAllSubCategories(this.course.category).then((res)=>{
          this.subcategoryArr = res.data;
      })
    },
    submit(){
        console.log(this.course)
        courseData.updateInstCourse(this.id,this.course).then((res)=>{
            console.log(res.data);
            this.message = 'course updated successfully';
            this.error = ""
        }).catch((err)=>{
            this.error = err.response.data;
            this.message = ""
        })
    }
  },
};
</script>

<style></style>
