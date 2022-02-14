<template>
  <div class="container my-5">
      <div class="display-6" style="color: blueviolet" >Wishlist</div>
    <div v-if="error || items.length == 0" >
        <h1>Wishlist is Empty</h1>
    </div>
    <div v-if="items" >
      <CourseList v-bind:item="items" comp='wishlist' />
    </div>
  </div>
</template>

<script>
import CourseList from '../../components/Courses/CourseList.vue'
import wishlistData from '../../services/wishlist'
export default {
    name: 'wishlist',
    components:{
        CourseList
    },
    data(){
        return{
            items: "",
            error: ""
        }
    },
    created(){
        // get all wishlist items
        wishlistData.getwishlistItems().then((res)=>{
            console.log(res.data[0]);
            this.items = res.data[0].courses;
            this.error = "";
        }).catch((err)=>{
            console.log(err.response.data)
            this.error = err.response.data;
        })
    }
}
</script>

<style>

</style>