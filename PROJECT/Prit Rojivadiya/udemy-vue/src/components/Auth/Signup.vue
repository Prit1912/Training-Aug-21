<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-10 col-sm-8 col-md-6 col-lg-4">
        <h4 class="text-center">Create Udemy Account !!</h4>
        <hr />
        <div v-if="error" class="alert alert-danger" role="alert">
          {{ error }}
        </div>
        <form class="row row-cols-lg-auto g-3 align-items-center">
          <div class="col-12">
            <label class="visually-hidden" for="name">name</label>
            <div class="input-group">
              <div class="input-group-text">
                <i class="fas fa-user"></i>
              </div>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Username"
                v-model="name"
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="email">email</label>
            <div class="input-group">
              <div class="input-group-text">
                <i class="fas fa-envelope"></i>
              </div>
              <input
                type="text"
                class="form-control"
                id="email"
                placeholder="Email"
                v-model="email"
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="phone">phone</label>
            <div class="input-group">
              <div class="input-group-text">
                <i class="fas fa-phone"></i>
              </div>
              <input
                type="number"
                class="form-control"
                id="phone"
                placeholder="Phone"
                v-model="phone"
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="password">Password</label>
            <div class="input-group">
              <div class="input-group-text"><i class="fas fa-lock"></i></div>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                v-model="password"
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="password">Role</label>
            <div class="input-group">
              <div class="input-group-text"><i class="fas fa-user-tag"></i></div>
              <select v-model="role" class="form-select" aria-label="Default select example">
                <option value="user">User</option>
                <option value="instructor">Instructor</option>
              </select>
            </div>
          </div>

          <div class="col-12">
            <button
              type="button"
              class="btn btn-primary d-block w-100"
              style="background-color: blueviolet"
              @click="signup"
            >
              Sign up
            </button>
          </div>

          <div class="col-12">
            <p class="text-center" >Already have an account? <router-link :to="{name: 'login'}" >Login</router-link> </p>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- name: <input type="text" v-model="name" >
  <br>
  email: <input type="text" v-model="email" >
  <br>
  phone: <input type="number" v-model="phone" >
  <br>
  password: <input type="password" v-model="password" >
  <br>
  role: <select name="role" id="" v-model="role" >
      <option value="user">User</option>
      <option value="instructor">Instructor</option>
  </select>
  <br>
  <button @click="signup" >Signup</button>
  <br>
  <p v-if="error">{{error}}</p> -->
</template>

<script>
import userData from "../../services/users";
export default {
  name: "signup",
  data() {
    return {
      name: "",
      email: "",
      phone: null,
      password: "",
      role: "user",
      error: "",
    };
  },
  methods: {
    signup() {
      let user = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        password: this.password,
        role: this.role,
      };
      console.log(user);
      userData
        .userSignup(user)
        .then((res) => {
          console.log(res.data);
          this.error = "";
          this.$router.push({ name: "login" });
        })
        .catch((err) => {
          console.log(err.response);
          this.error = err.response.data;
        });
    },
  },
};
</script>

<style></style>
