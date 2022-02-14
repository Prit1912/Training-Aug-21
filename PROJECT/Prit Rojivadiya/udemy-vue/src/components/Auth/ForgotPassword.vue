<template>

  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-10 col-sm-8 col-md-6 col-lg-4">
        <h4 class="text-center">Enter Your Email First !!</h4>
        <hr />
        <div v-if="error" class="alert alert-danger" role="alert">
          {{error}}
        </div>
        <form @submit="submit" class="row row-cols-lg-auto g-3 align-items-center">
          <div class="col-12">
            <label class="visually-hidden" for="username">username</label>
            <div class="input-group">
              <div class="input-group-text">
                <i class="fas fa-envelope"></i>
              </div>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Email"
                v-model="user.email"
              />
            </div>
            <p class="error" >{{errorEmail}}</p>
          </div>

          <div>
              Password reset link will be sent to you email address...
          </div>

          <div class="col-12">
            <button
              class="btn btn-primary d-block w-100"
              style="background-color: blueviolet"
            >
              Send Mail
            </button>
          </div>

        </form>

        <div v-if="success" class="alert alert-success mt-3" role="alert">
          {{success}}
        </div>

      </div>
    </div>
  </div>
  
</template>

<script>
import '../../assets/css/style.css';
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import userData from '../../services/users'
export default {
    name: 'forgotPassword',
    data(){
      let user = {
        email: ""
      }

      const validationSchema = yup.object({
        email: yup.string().email().required()
      })

      const { handleSubmit } = useForm({
        validationSchema
      });

      const { value: email, errorMessage: errorEmail } = useField("email");

      user.email = email;

      const submit = handleSubmit((values)=>{
        console.log(values);
        this.sendMail(values)
      })
        return{
            user,
            submit,
            errorEmail,
            error: "",
            success: "",
        }
    },
    methods:{
      // send mail with token to reset password
        sendMail(user){
            userData.forgotPassword(user).then((res)=>{
                console.log(res.data);
                this.error = ""
                this.success = "Mail sent successfully"
            }).catch((err)=>{
                console.log(err.response)
                this.error = err.response.data
                this.success = ""
            })
        }
    }
}
</script>

<style>
</style>