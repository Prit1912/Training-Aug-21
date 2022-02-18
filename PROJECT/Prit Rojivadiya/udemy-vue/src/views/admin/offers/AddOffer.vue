<template>
  <div class="container my-5">
    <!-- <input type="datetime-local" id="meeting-time"
       name="meeting-time" value="2018-06-12T19:30"
       min="2018-06-07T00:00" max="2018-06-14T00:00"> -->
    <!-- <pre class="language-json"><code>{{ value  }}</code></pre> -->
    <h3 style="color: blueviolet">Add Offer</h3>
    <div class="row">
      <div class="col-md-4 border border-dark p-4">
        <form @submit="submit">
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label"
              >Offer Name</label
            >
            <input
              v-model="offer.offerName"
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Enter offer name"
            />
            <span class="error">{{ errorName }}</span>
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label"
              >Course IDs</label
            >
            <multiselect
              v-model="offer.courses"
              :options="options"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              placeholder="Select multiple courses"
              label="name"
              track-by="name"
              :preselect-first="false"
            >
            </multiselect>
            <!-- <input
              v-model="offer.courses"
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter course Ids'"
            /> -->
            <span class="error">{{ errorIds }}</span>
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput3" class="form-label"
              >Discount</label
            >
            <input
              v-model="offer.discount"
              type="number"
              class="form-control"
              id="formGroupExampleInput3"
              placeholder="Discount(%)"
            />
            <span class="error">{{ errorDiscount }}</span>
          </div>
          <div class="mb-3">
            <button class="btn btn-dark">Add</button>
          </div>
        </form>
        <div v-if="error" class="alert alert-danger" role="alert">
          {{ error }}
        </div>
        <div
          v-if="message"
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          {{ message }}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import offerData from "../../../services/offers";
import courseData from "../../../services/courses";
import "../../../assets/css/style.css";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
export default {
  name: "addOffer",
  components: {
    Multiselect,
  },
  data() {
    let offer = {
      offerName: "",
      courses: [],
      discount: null,
    };

    const validationSchema = yup.object({
      offerName: yup.string().required(),
      courses: yup.array().required(),
      discount: yup.number().min(10).max(90).required(),
    });

    const { handleSubmit } = useForm({
      validationSchema,
    });

    const { value: offerName, errorMessage: errorName } = useField("offerName");
    const { value: courses, errorMessage: errorIds } = useField("courses");
    const { value: discount, errorMessage: errorDiscount } =
      useField("discount");

    offer.offerName = offerName;
    offer.courses = courses;
    offer.discount = discount;

    const submit = handleSubmit((values) => {
      // values.courses = JSON.parse(values.courses);
      console.log(values);
      this.addOffer(values);
    });

    return {
      offer,
      submit,
      errorName,
      errorIds,
      errorDiscount,
      message: "",
      error: "",
      value: [],
      options: [],
    };
  },
  created() {
    courseData.getAllCourses().then((res) => {
      console.log(res.data);
      let courses = res.data;
      let coursesArr = [];
      for (let course of courses) {
        let obj = {
          id: course._id,
          name: course.name,
        };
        coursesArr.push(obj);
      }
      this.options = coursesArr;
    });
  },
  methods: {
    addOffer(offer) {
      this.message = "";
      this.error = "";
      offerData
        .addOffer(offer)
        .then((res) => {
          console.log(res.data);
          this.message = "offer added successfully";
          this.error = "";
          setTimeout(() => {
            this.$router.push({ name: "offers" });
          }, 1000);
        })
        .catch((err) => {
          console.log(err.response);
          this.error = err.response.data;
          this.message = "";
        });
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
