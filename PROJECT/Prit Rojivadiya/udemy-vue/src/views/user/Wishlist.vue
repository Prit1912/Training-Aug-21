<template>
  <div class="container my-5">
      <div class="display-6" style="color: blueviolet" >Wishlist</div>
    <div v-if="(items.length == 0)" >
        <h1>wishlist is empty</h1>
    </div>
      <CourseList v-bind:item="items" comp='wishlist' />
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
            items: [],
        }
    },
    mounted(){
        wishlistData.getwishlistItems().then((res)=>{
            console.log(res.data[0]);
            this.items = res.data[0].courses;
        })
    }
}
</script>

<style>

</style>