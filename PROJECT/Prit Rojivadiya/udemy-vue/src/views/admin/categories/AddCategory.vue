<template>
  <div class="container">
    <form @submit.prevent class="my-5">
      Category Name: <input type="text" v-model="cname" /> <br /><br />
      <button class="btn btn-dark" @click="addCategory">Add</button>
    </form>

    <div v-if="message" class="alert alert-success col-sm-4" role="alert">
      {{ message }}
    </div>
    <div v-if="error" class="alert alert-danger col-sm-4" role="alert">
      {{ error }}
    </div>
  </div>
</template>

<script>
import categoryData from "../../../services/category";
export default {
  name: "addCategory",
  data() {
    return {
      cname: "",
      error: "",
      message: "",
    };
  },
  methods: {
    addCategory() {
      let category = {
        name: this.cname,
      };
      categoryData
        .addCategory(category)
        .then((res) => {
          console.log(res);
          this.error = "";
          this.message = "category added successfully";
        })
        .catch((err) => {
          this.error = err.response.data;
          this.message = "";
        });
    },
  },
};
</script>

<style></style>
