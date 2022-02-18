<template>
    <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-10 col-sm-8 col-md-6 col-lg-4">
        <h4 class="text-center display-6 " style="color: blueviolet" >Profile</h4>
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
                v-model="profile.name"
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
                v-model="profile.email"
              />
            </div>
               <span class="error" >{{errorEmail}}</span>
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
                v-model="profile.phone"
              />
            </div>
               <span class="error" >{{errorPhone}}</span>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="role">role</label>
            <div class="input-group">
              <div class="input-group-text"><i class="fas fa-user-tag"></i></div>
              <input
                type="role"
                class="form-control"
                id="role"
                placeholder="role"
                v-model="profile.role"
                disabled
              />
            </div>
          </div>

          <div class="col-12">
            <button
              class="btn btn-primary d-block w-100"
              style="background-color: blueviolet"
            >
              Update Profile
            </button>
          </div>
        </form>
         <div v-if="success" class="alert alert-success alert-dismissible fade show mt-3" role="alert">
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          {{ success }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userData from '../../services/users'
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
export default {
    name: 'profile',
    data(){
      const validationSchema = yup.object({
      email: yup
        .string()
        .email("must be a valid email")
        .required("Email is required"),
      name: yup.string().min(2, "minimum 2 character required").required('Name is required'),
      phone: yup.number().required()
    });

    const { handleSubmit } = useForm({
      validationSchema,
    });

        const { value: email, errorMessage: errorEmail } = useField("email");
        const { value: name, errorMessage: errorName } = useField("name");
        const { value: phone, errorMessage: errorPhone } = useField("phone");

        let profile = {
          name: name,
          email: email,
          phone: phone
        }

  const submit = handleSubmit((values) => {
      console.log(values);
      this.update(values);
    });

        return{
          errorEmail,
          errorName,
          errorPhone,
          submit,
          profile,
            // profile:{},
            error: "",
            success: ""
        }
    },
    created (){

      // get user information
        userData.userInfo().then((res)=>{
            console.log(res.data)
            this.profile.name = res.data.name
            this.profile.email = res.data.email
            this.profile.phone = res.data.phone
            this.profile.role = res.data.role
        })
    },
    methods:{
        update(){
            let user = {
                name: this.profile.name,
                phone: this.profile.phone,
                email: this.profile.email
            }
            userData.updateProfile(user).then((res)=>{
                console.log(res.data);
                this.success = "Profile updated successfully";
                this.error = ""
            }).catch((err)=>{
                this.error = err.response.data
            })
        }
    }
}
</script>

<style>

</style>