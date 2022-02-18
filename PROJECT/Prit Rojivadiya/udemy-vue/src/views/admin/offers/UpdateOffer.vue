<template>
<div class="container my-5">
<div class="row">
    <h3 style="color: blueviolet">Update offer</h3>
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
              placeholder="Another input placeholder"
            /> -->
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
          </div>
          <div class="mb-3">
            <button class="btn btn-dark">Update</button>
          </div>
        </form>
  <div v-if="error" class="alert alert-danger" role="alert">
    {{ error }}
  </div>
  <div v-if="message" class="alert alert-success" role="alert">
    {{ message }}
  </div>
    </div>
</div>
</div>
</template>

<script>
import courseData from '../../../services/courses';
import Multiselect from "vue-multiselect";
import offerData from "../../../services/offers";
export default {
  name: "updateOffer",
  components:{
    Multiselect
  },
  props: ["id"],
  data() {
    return {
      offer: {},
      message: "",
      error: "",
      options: [],
    };
  },
  created() {
    offerData
      .getOfferById(this.id)
      .then((res) => {
        this.offer = res.data;
      })
      .catch((err) => {
        this.error = err.response.data;
        this.message = "";
      });

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
  methods:{
      submit(){
          offerData.updateOffer(this.id,this.offer).then((res)=>{
              console.log(res.data);
              this.message = 'offer updated successfully'
              this.error = ''
              this.$store.dispatch("courses/setUpdatedCourses", []);
              this.$store.dispatch("courses/setAllCourses", []);
              setTimeout(()=>{
                this.$router.push({name: 'offers'})
              },1000)
          }).catch((err)=>{
              console.log(err.response)
              this.error = err.response.data;
              this.message = ''
          })
      }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
