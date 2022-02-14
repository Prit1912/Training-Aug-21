<template>
  <div class="container my-5">
    <div class="row my-3">
      <div class="col-sm-4">
        <select class="form-select" @change="filter" aria-label="Default select example">
          <option selected value="all" >Filter by rating</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
      </div>
    </div>
    <div v-if="reviewList">
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Review</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(review, index) of reviewList" :key="index">
              <td>{{ index }}</td>
              <td>{{ review.user.name }}</td>
              <td>{{ review.user.email }}</td>
              <td>{{ review.review }}</td>
              <td>{{ review.rating }}</td>
            </tr>
          </tbody>
        </table>
          <h3 v-if="error || reviewList.length == 0">{{ error }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import courseData from "../../services/courses";
export default {
  name: "reviews",
  props: ["courseId"],
  data() {
    return {
      reviews: "",
      reviewList: [],
      error: "",
    };
  },
  created() {
    // see all course reviews
    courseData
      .courseReview(this.courseId)
      .then((res) => {
        this.reviews = res.data;
        this.reviewList = res.data;
        this.error = ""
      })
      .catch((err) => {
        this.error = err.response.data;
      });
  },
  methods:{
      filter(event){
        //   console.log(event.target.value)
        if(event.target.value == 'all'){
            this.reviewList = this.reviews
            if(this.reviewList.length == 0){
                this.error = 'no reviews'
            }else{
              this.error = ""
            }
        }else{
          this.reviewList = this.reviews.filter((review)=>{
              return review.rating == event.target.value;
          })
          if(this.reviewList.length == 0){
                this.error = 'no reviews'
            }else{
              this.error = ""
            }
        }
      }
  }
};
</script>

<style></style>
