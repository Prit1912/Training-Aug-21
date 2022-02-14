<template>
  <div class="container my-5">
    <p class="display-6" style="color: blueviolet">Cart</p>
    <div v-if="error || items.length == 0">
      <h1>Cart is Empty</h1>
    </div>
    <div v-if="items.length != 0">
      <CourseList v-bind:item="items" comp="cart" />
      <h4 class="my-3" v-if="amount">Total : ₹{{ amount }}</h4>
      <button class="btn btn-warning" @click="purchase">Buy</button>
    </div>
  </div>
</template>

<script>
import paymentData from "../../services/payment";
import CourseList from "../../components/Courses/CourseList.vue";
import cartData from "../../services/cart";
import router from '../../routes/index'
export default {
  name: "cart",
  components: {
    CourseList,
  },
  data() {
    return {
      items: "",
      amount: 0,
      name: "",
      email: "",
      phone: "",
      error: ""
    };
  },
  created() {

    // get all cart items
    cartData.getCartItems().then((res) => {
      console.log(res.data);
      this.items = res.data.courses;
      this.error = ""
      for (let c of this.items) {
        if (c.price) {
          if(c.offerPrice){
            console.log(c.offerPrice)
            this.amount += c.offerPrice
          }else{
          this.amount += c.price;
          }
        }
      }
    }).catch((err)=>{
      console.log(err.response.data)
      this.error = err.response.data;
    })
  },

  methods: {
    
    // load script for payment
    async loadScript(src) {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.setAttribute('id','pay')
        if(document.getElementById('pay')){
          resolve(true);
          return
        }
        script.src = src;
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    },

    // purchase course
    async purchase() {
      if(this.amount == 0){
        cartData
        .purchaseCourse()
            .then((res) => {
              console.log(res.data);
              this.items = [];
               router.push({name:'myCourses'})
              return;
            })
            .catch((err) => {
              console.log(err.response);
            });
      }

      const res = await this.loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      let paymentObj = {
        amount: this.amount * 100,
      };
      const data = await paymentData.makePayment(paymentObj);

      console.log(data);

      const options = {
        key: "rzp_test_xfHB8uNca5sUFH",
        currency: data.data.currency,
        amount: data.data.amount.toString(),
        order_id: data.data.id,
        name: "Purchase Courses",
        description: "Do not refress the page untill payment is done",
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
          alert("Transaction successful");

          // if transaction is successfull items are removed from cart
          cartData
            .purchaseCourse()
            .then((res) => {
              console.log(res.data);
              this.items = [];
              router.push({name:'myCourses'})
            })
            .catch((err) => {
              console.log(err.response);
            });
        },
        prefill: {
          name: this.$store.state.user.user.name,
          email: this.$store.state.user.user.email,
          phone_number: this.$store.state.user.user.phone,
        },
      };
      const paymentObject = new window.Razorpay(options);
      console.log(paymentObject);
      // opet razorpay payment window
      paymentObject.open();
    },
  },
};
</script>

<style></style>
