<template>
  <div class="container my-5">
    <p class="display-6" style="color: blueviolet">Cart</p>
    <div v-if="items.length == 0">
      <h1>cart is empty</h1>
    </div>
    <div v-else>
      <CourseList v-bind:item="items" comp="cart" />
      <h4 class="my-3" v-if="amount">Total : {{ amount }}</h4>
      <button class="btn btn-warning" @click="purchase">Buy</button>
    </div>
    <!-- <div class="row my-5">
      <div class="col-md-4 offset-md-4">
        <div class="card">
          <div class="card-body">
            <form  @submit="purchase">
              <div class="form-group">
                <label for="">Name: </label>
                <input v-model="name" class="form-control" type="text" name="name">
              </div>
              <div class="form-group">
                <label for="">Email: </label>
                <input v-model="email" class="form-control" type="text" name="email">
              </div>
              <div class="form-group">
                <label for="">Phone: </label>
                <input v-model="phone" class="form-control" type="text" name="phone">
              </div>
                <div class="form-group">
                <label for="">Amount: </label>
                <input class="form-control" disabled v-model="amount" type="text" name="amount">
              </div>
              <div class="form-group">
                <button class="btn form-control btn-primary">Pay Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// import $ from "jquery";
import paymentData from "../../services/payment";
import CourseList from "../../components/Courses/CourseList.vue";
import cartData from "../../services/cart";

// var orderId ;
// $(document).ready(function(){
//     var settings = {
//   "url": "/api/payment",
//   "method": "POST",
//   "timeout": 0,
//   "headers": {
//     "Content-Type": "application/json"
//   },
//   "data": JSON.stringify({
//     "amount": 5000
//   }),
// };

// //creates new orderId everytime
// $.ajax(settings).done(function (response) {

//   orderId=response.orderId;
//   console.log(orderId);
//   $("button").show();
// });
// });

export default {
  name: "cart",
  components: {
    CourseList,
  },
  data() {
    return {
      items: [],
      amount: 0,
      name: "",
      email: "",
      phone: "",
    };
  },
  created() {
    cartData.getCartItems().then((res) => {
      console.log(res.data);
      this.items = res.data.courses;
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
    });
  },
  methods: {
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
    async purchase() {

      if(this.amount == 0){
        cartData
        .purchaseCourse()
            .then((res) => {
              console.log(res.data);
              this.items = [];
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

      // const data = await fetch("http://localhost:8000/api/payment", {
      //   method: "POST",
      // }).then((t) => t.json());

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
        name: "Donation",
        description: "Thank you for nothing. Please give us some money",
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
          alert("Transaction successful");
          cartData
            .purchaseCourse()
            .then((res) => {
              console.log(res.data);
              this.items = [];
              this.$router.go();
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
      paymentObject.open();
    },
  },
};
</script>

<style></style>
