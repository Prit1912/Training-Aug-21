<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-10 col-sm-8 col-md-6 col-lg-4">
        <h4 class="text-center">Create Udemy Account !!</h4>
        <hr />
        <div v-if="error" class="alert alert-danger" role="alert">
          {{ error }}
        </div>
        <form @submit="submit" class="row row-cols-lg-auto g-3 align-items-center">
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
                v-model="user.name"
              />
            </div>
            <span class="error" >{{errorName}}</span>
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
                v-model="user.email"
              />
            </div>
            <span class="error" >{{errorEmail}} </span>
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
                v-model="user.phone"
              />
            </div>
            <span class="error" >{{errorPhone}}</span>
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
                v-model="user.password"
              />
            </div>
            <span class = "error" >{{errorPassword}}</span>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="password">Role</label>
            <div class="input-group">
              <div class="input-group-text"><i class="fas fa-user-tag"></i></div>
              <select v-model="user.role" class="form-select" aria-label="Default select example">
                <option value="user">User</option>
                <option value="instructor">Instructor</option>
              </select>
            </div>
            <span class="error" >{{errorRole}}</span>
          </div>

          <div class="col-12">
            <button
              class="btn btn-primary d-block w-100"
              style="background-color: blueviolet"
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
import '../../assets/css/style.css'
import {useField, useForm} from 'vee-validate';
import * as yup from 'yup';
import userData from "../../services/users";
export default {
  name: "signup",
  data() {
    let user = {
      name: "",
      email: "",
      phone: null,
      password: "",
      role: "user",
    }


    const validationSchema = yup.object({
      name: yup.string().min(2).required(),
      email: yup.string().email('must be a valid email').required('email is required'),
      phone: yup.number().required(),
      password: yup.string().min(4, "minimum 4 character required").required('Password is required'),
      role: yup.string().required()
    })

    const { handleSubmit } = useForm({
      validationSchema
    })

    const {value: name, errorMessage: errorName} = useField('name');
    const {value: email, errorMessage: errorEmail} = useField('email');
    const {value: phone, errorMessage: errorPhone} = useField('phone');
    const {value: password, errorMessage: errorPassword} = useField('password');
    const {value: role, errorMessage: errorRole} = useField('role');

    user.name = name;
    user.email = email;
    user.phone = phone;
    user.password = password;
    user.role = role;

    const submit = handleSubmit((values)=>{
      console.log(values);
      this.signup(values);
    })

    return {
      user,
      submit,
      errorName,
      errorEmail,
      errorPhone,
      errorPassword,
      errorRole,
      error: "",
    };
  },
  methods: {
    signup(user) {
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
