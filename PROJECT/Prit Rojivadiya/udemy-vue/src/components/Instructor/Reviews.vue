<template>
  <!-- <h1 v-if="error" >{{error}}</h1>
  <div v-if="reviews" >
      {{reviews}}
  </div> -->
  <div class="container my-5">
      <h3 v-if="error" >{{error}}</h3>
      <div v-if="reviews" >
          <div class="table-responsive" >
            <table class="table table-striped table-bordered" >
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
                    <tr v-for="(review,index) of reviews" :key="index" >
                        <td>{{index}}</td>
                        <td>{{review.user.name}}</td>
                        <td>{{review.user.email}}</td>
                        <td>{{review.review}}</td>
                        <td>{{review.rating}}</td>
                    </tr>
                </tbody>
            </table>
          </div>
      </div>
  </div>
</template>

<script>
import courseData from '../../services/courses'
export default {
    name: 'reviews',
    props: ['courseId'],
    data(){
        return{
            reviews: "",
            error: ""
        }
    },
    created(){
        courseData.courseReview(this.courseId).then((res)=>{
            this.reviews = res.data
        }).catch((err)=>{
            this.error = err.response.data;
        })
    }
}
</script>

<style>

</style>