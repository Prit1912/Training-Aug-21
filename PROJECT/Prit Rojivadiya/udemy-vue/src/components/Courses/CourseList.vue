<template>
  <div class="container my-5">
    <div class="Newcourses d-flex flex-nowrap">
      <div v-for="i in item" :key="i._id">
        <div class="card col-sm-3 mx-2" style="width: 18rem">
          <img
            :src="i.courseImage.url"
            class="courseImage img-fluid card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ i.name }}</h5>
            <p v-if="i.price">Price : ₹{{ i.price }}</p>
            <p v-else>Price : Free</p>
            <p>Rating : {{ i.rating }}/5</p>
            <span v-if="comp == 'wishlist'">
          <button class="btn btn-dark me-2 mb-2" :disabled="cartItems.includes(i._id)" @click="addToCart(i._id)">Add to cart</button>
          <button class="btn btn-outline-dark me-2 mb-2" @click="removeFromWishlist(i._id)">Remove</button>
        </span>
        <button v-if="comp == 'cart'" class="btn btn-outline-dark me-2 mb-2" @click="removeFromCart(i._id)">
          Remove
        </button>
        <button v-if="(comp == 'myCourses')" class="btn btn-dark me-2 mb-2" @click="this.$router.push({name: 'enrolledCourse', params: {id: i._id}})">View Course</button>
        <button v-else class="btn btn-dark me-2 mb-2" @click="viewCourse(i._id)">View Course</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div v-for="i in item" :key="i._id">
     <div
      class="d-flex flex-column flex-sm-row align-items-center main-container my-2"
    >
      <div class="flex-shrink-0 ">
        <img
          :src="i.courseImage.url"
          class="img img-fluid courseImage"
          alt="..."
        />
      </div>
      <div class="flex-grow-1 ms-3 ps-2 content-container">
        <h4 class="text-justify">{{ i.name }}</h4>
        <p v-if="i.price" >Price : ₹{{ i.price }}</p>
        <p v-else>Price : Free</p>
        <p>Rating : {{ i.rating }}/5</p>
        <span v-if="comp == 'wishlist'">
          <button class="btn btn-dark me-2 mb-2" @click="addToCart(i._id)">Add to cart</button>
          <button class="btn btn-outline-dark me-2 mb-2" @click="removeFromWishlist(i._id)">Remove</button>
        </span>
        <button v-if="comp == 'cart'" class="btn btn-outline-dark me-2 mb-2" @click="removeFromCart(i._id)">
          Remove
        </button>
        <button v-if="(comp == 'myCourses')" class="btn btn-primary me-2 mb-2" @click="this.$router.push({name: 'enrolledCourse', params: {id: i._id}})">View Course</button>
        <button v-else class="btn btn-dark me-2 mb-2" @click="viewCourse(i._id)">View Course</button>
      </div>
    </div> 
  </div> -->
</template>

<script>
import wishlistData from "../../services/wishlist";
import cartData from "../../services/cart";
export default {
  name: "courseList",
  props: ["item", "comp"],
  data() {
    return {
      cartItems: []
    };
  },
  created(){
    cartData.getCartItems().then((res)=>{
      let courses = res.data.courses;
      for(let course of courses){
        this.cartItems.push(course._id);
      }
    }).catch((err)=>{
      console.log(err.response);
    })
  },
  methods: {
    removeFromWishlist(id) {
      wishlistData
        .removeFromWishlist(id)
        .then(() => {
          this.$router.go();
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    addToCart(id) {
      wishlistData
        .wishlistToCart(id)
        .then((res) => {
          console.log(res);
          this.$router.go();
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    removeFromCart(id) {
      cartData
        .removeCartItem(id)
        .then((res) => {
          console.log(res);
          this.$router.go();
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    viewCourse(id) {
      this.$router.push({ name: "courseInfo", params: { id: id } });
    },
  },
};
</script>

<style scoped >
.card{
  border: 1px solid blueviolet;
  height: 450px;
}
.card:hover{
  border: 2px solid black;
  box-shadow: 3px 3px 15px black;
}

.card-body{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.courseImage {
  width: 18rem;
  height: 10rem;
  border-bottom: 1px solid black;
}

.main-container {
  border: 2px solid;
}

.content-container {
  border-left: 2px solid;
}

.Newcourses {
  overflow-x: auto;
}
</style>
