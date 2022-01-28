<template>
  <div class="container my-5">
    <p class="display-6" style="color: blueviolet" >Cart</p>
    <div v-if="items.length == 0">
      <h1>cart is empty</h1>
    </div>
    <div v-else>
      <CourseList v-bind:item="items" comp="cart" />
      <h4 class="my-3" v-if="amount" >Total : {{amount}}</h4>
      <button class="btn btn-warning" @click="purchase" >Buy</button>
    </div>
  </div>
</template>

<script>
import paymentData from '../../services/payment'
import CourseList from "../../components/Courses/CourseList.vue";
import cartData from "../../services/cart";
export default {
  name: "cart",
  components: {
    CourseList,
  },
  data() {
    return {
      items: [],
      amount: 0
    };
  },
  created() {
    cartData.getCartItems().then((res) => {
      console.log(res.data);
      this.items = res.data.courses;
      for(let c of this.items){
          if(c.price){
          this.amount += c.price;
          }
      }
    });
  },
  methods:{
    purchase(){
      paymentData.makePayment(this.items).then((res)=>{
        console.log(res.data);
      }).catch((err)=>{
        console.log(err.response)
      })
      // cartData.purchaseCourse().then((res)=>{
      //   console.log(res.data);
      //   this.items = [];
      // }).catch((err)=>{
      //   console.log(err.response)
      // })
    }
  }
};
</script>

<style></style>
