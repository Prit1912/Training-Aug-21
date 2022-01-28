<template>

  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-10 col-sm-8 col-md-6 col-lg-4">
        <h4 class="text-center">Reset Password</h4>
        <hr />

        <div v-if="error" class="alert alert-danger" role="alert">
          {{error}}
        </div>

        <form @submit="submit" class="row row-cols-lg-auto g-3 align-items-center">
          <div class="col-12">
            <label class="visually-hidden" for="password">Password</label>
            <div class="input-group">
              <div class="input-group-text"><i class="fas fa-lock"></i></div>
              <input
                type="text"
                class="form-control"
                id="password"
                placeholder="Password"
                v-model="user.password"
              />
            </div>
            {{errorPassword}}
          </div>

          <div>
              Enter your new password here !!
          </div>

          <div class="col-12">
            <button
              class="btn btn-primary d-block w-100"
              style="background-color: blueviolet"
            >
              Reset
            </button>
          </div>

        </form>

      </div>
    </div>
  </div>


  <!-- <form>
      <input type="text" v-model="password" placeholder="Enter new password"><br>
      <button type="button" @click="reset" >Resest</button>
  </form> -->
</template>

<script>
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import userData from '../../services/users'
export default {
    name: 'resetPassword',
    data(){
      let user = {
        password: ""
      }

      const validationSchema = yup.object({
        password: yup.string().min(4, "minimum 4 character required").required('Password is required'),
      })

      const { handleSubmit } = useForm({
        validationSchema
      })

      const { value: password, errorMessage: errorPassword } = useField("password");

      user.password = password;

      const submit = handleSubmit((values)=>{
        console.log(values);
        this.reset(values);
      })

        return{
          user,
          submit,
          errorPassword,
          token: ""
        }
    },
    mounted(){
        console.log(this.$router.currentRoute.value.params.token)
    },
    methods:{
        reset(user){
            this.token = this.$router.currentRoute.value.params.token
            userData.resetPassword(user,this.token).then((res)=>{
                console.log(res.data);
                this.$router.push({name: 'login'})
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>