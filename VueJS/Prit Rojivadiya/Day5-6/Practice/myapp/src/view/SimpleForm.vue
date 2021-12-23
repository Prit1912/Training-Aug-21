<template>
  <form class="text-center" @submit="submit">
    <h1 class="text-danger text-center my-3">Simple Form</h1>
    <fieldset>
      <legend class="text-success">Create an Event</legend>
      <BaseSelect
        :options="categories"
        v-model="category"
        label="Select Category"
        :error="categoryError"
      />
    </fieldset>
    <br />

    <BaseInput v-model="title" :error="titleError" label="title" type="text"/>
    <br />
    <BaseInput v-model="description" :error="descriptionError" label="description" type="text" />
    <br />
    <BaseInput v-model="location" :error="locationError" label="location" type="text" />
    <br />

    <h5>Extras</h5>
    <BaseCheckbox v-model="catering" :error="cateringError" label="Catering" />

    <BaseCheckbox v-model="music" :error="musicError" label="Live Music" />

    <br />
    <br />
    <h5>Are pets allowed?</h5>

    <BaseRadioGroup v-model="event.pets" name="pets" :options="petOptions" />
    <!-- <BaseRadio v-model="event.pets" :value="1" label="yes" name="pets" />

  <BaseRadio v-model="event.pets" :value="0" label="no" name="pets" /> -->
    <br /><br />
    <button class="btn btn-success" type="submit">Submit</button>
  </form>

</template>

<script>
import axios from "axios";
import {useField, useForm} from 'vee-validate'
import BaseInput from "../components/BaseInput.vue";
import BaseSelect from "../components/BaseSelect.vue";
import BaseCheckbox from "../components/BaseCheckbox.vue";
// import BaseRadio from "../components/BaseRadio.vue";
import BaseRadioGroup from "../components/BaseRadioGroup.vue";

export default {
  name: "SimpleForm",
  components: {
    BaseInput,
    BaseSelect,
    BaseCheckbox,
    // BaseRadio,
    BaseRadioGroup,
  },
  data() {
    return {
      categories: [
        "sustainibility",
        "nature",
        "animal welfare",
        "housing",
        "education",
        "food",
        "community",
      ],
      event: {
        category: "",
        title: "",
        description: "",
        location: "",
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
      petOptions: [
        { label: "yes", value: 1 },
        { label: "no", value: 0 },
      ],
    };
  },
  methods: {
    sendForm() {
      axios
        .post(
          "https://my-json-server.typicode.com/Code-Pop/Vue-3-forms/events",
          this.event
        )
        .then((res) => {
          console.log("Response", res);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    },
  },
  setup(){
      
      const required = (value)=>{
          console.log('working')
          const requiredMessage = 'This field is required'
          if(value === undefined || value === null ) return requiredMessage
          if(!String(value).length) return requiredMessage
          return true;
      }
    
        const minlength = (number, value)=>{
            console.log('minl')
            if(String(value).length < number) return `please type atleas ${number} character`
            return true;
        }

        const anything = ()=>{
            return true
        }

     const validationSchema = {
         category: required,
         title: (value)=>{
             const req = required(value)
             if(req !== true){
                 return req
             }
             const min = minlength(3, value)
             if(min !== true) return min

             return true
         },
         description: required,
         location: undefined,
         pets: anything,
         catering: anything,
         musix: anything
     }

     console.log(validationSchema)

     const {handleSubmit} = useForm({
         validationSchema
     })

    const {value:category,errorMessage:categoryError} = useField('category')
    const {value:title,errorMessage:titleError} = useField('title')
    const {value:description,errorMessage:descriptionError} = useField('description')
    const {value:location,errorMessage:locationError} = useField('location')
    const {value:pets,errorMessage:petsError} = useField('pets',undefined,{initialValue: 1}) // second parameter is validation method which we already defined
    const {value:catering,errorMessage:cateringError} = useField('catering')
    const {value:music,errorMessage:musicError} = useField('music')

    const submit = handleSubmit(values =>{
        console.log('submit', values)
    })

    return{
        category,
        categoryError,
        title,
        titleError,
        description,
        descriptionError,
        location,
        locationError,
        pets,
        petsError,
        cateringError,
        catering,
        music,
        musicError,
        submit
    }
  }
};
</script>

<style>
.field {
  width: 300px;
  height: 35px;
}
</style>
