<template>
  <h1 class="text-danger mb-5">Form Validation</h1>
  <form @submit="submit">
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input
          type="text"
          name="email"
          class="form-control"
          id="inputEmail3"
          v-model="data.email"
        />
        <p>{{ errorEmail }}</p>
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label"
        >Password</label
      >
      <div class="col-sm-10">
        <input
          type="password"
          name="password"
          class="form-control"
          id="inputPassword3"
          v-model="data.password"
        />
      <p>{{ errorPassword }}</p>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>

  {{data}}
</template>

<script>
import { useField, useForm } from "vee-validate";
import * as yup from 'yup'

export default {
  name: "Form",
  data(){
      return{
          data:{
            email: "",
            password: ""
          }
      }
  },
  setup() {
      // const required = (value)=>{
      //     const requiredMessage = 'This field is required'
      //     if(value === undefined || value === null ) return requiredMessage
      //     if(!String(value).length) return requiredMessage
      //     return true;
      // }
    
      //   const minlength = (number, value)=>{
      //       if(String(value).length < number) return `please type atleas ${number} character`
      //       return true;
      //   }

        // const validationSchema = {
        //     email: required,
        //     password: value=>{
        //         const req = required(value);
        //         if(req !== true) return req

        //         const min = minlength(4,value);
        //         if(min !== true) return min

        //         return true
        //     }
        // }


        const validationSchema = yup.object({
          email: yup.string().email('must be a valid email').required('email is required'),
          password: yup.string().required('password is required').min(4)
        })

        const {handleSubmit} = useForm({
            validationSchema
        })

        const {value: email, errorMessage: errorEmail} = useField('email')
        const {value: password, errorMessage: errorPassword} = useField('password')

        const submit = handleSubmit(values => {
            const data = {
                email: values.email,
                pwd: values.password
            }
            console.log('Submit', data)
        })


        return{
            submit,
            email,
            errorEmail,
            password,
            errorPassword
        }
  },
};
</script>
