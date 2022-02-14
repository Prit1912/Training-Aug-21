<template>
  <div class="container" >

      <h3 class="my-3" style="color: blueviolet" >Admin Panel</h3>
      <hr>
      <div class="my-5" v-if="this.$store.state.user.isLoggedIn && this.$store.state.user.user.role == 'admin'" >
          <h2> Welcome, <span style="color: blueviolet">{{name}}</span> </h2>
      </div>
      <p><i class="fas fa-arrow-circle-right"></i> Total Categories - {{noOfCategories}} </p>
      <p><i class="fas fa-arrow-circle-right"></i> Total Offers - {{noOfOffers}} </p>
      <p><i class="fas fa-arrow-circle-right"></i> Live Offers - {{noOfLiveOffers}} </p>
      <p><i class="fas fa-arrow-circle-right"></i> Total Courses - {{noOfCourses}} </p>
      <p><i class="fas fa-arrow-circle-right"></i> Total Users - {{noOfUsers}} </p>
  </div>
</template>

<script>

import userData from '../../services/users'
import categoryData from '../../services/category'
import offerData from '../../services/offers'
import courseData from '../../services/courses'
export default {
    name: 'home',
    data(){
        return{
            name: '',
            noOfCategories: 0,
            noOfSubCategories: 0,
            noOfOffers: 0,
            noOfLiveOffers: 0,
            noOfCourses: 0,
            noOfUsers: 0
        }
    },
    created(){

        // get user information
        userData.userInfo().then((res)=>{
            this.name = res.data.name
        })

        // get all categories
        categoryData.getAllCategories().then((res)=>{
            this.noOfCategories = res.data.length;
        })

        // get all offers
        offerData.getAllOffers().then((res)=>{
            this.noOfOffers = res.data.length;
        })

        // get live offers
        offerData.getAllOffers().then((res)=>{
            let offers = res.data;
            offers = offers.filter((offer)=>{
                return offer.isLive == true;
            })
            this.noOfLiveOffers = offers.length
        })

        // get all courses
        courseData.getCoursesByAdmin().then((res)=>{
            this.noOfCourses = res.data.length;
        })

        // get all users
        userData.getAllUsers().then((res)=>{
            this.noOfUsers = res.data.length;
        })

    },
}
</script>

<style>

</style>