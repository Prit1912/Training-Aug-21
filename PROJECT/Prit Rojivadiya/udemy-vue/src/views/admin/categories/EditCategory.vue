<template>
  <div class="container my-5">
    <h3 style="color: blueviolet" class="mb-3">Update Category</h3>
    <form @submit.prevent>
      Category Name: <input type="text" v-model="cname" /> <br /><br />
      <button class="btn btn-dark" @click="update">Update</button>
    </form>
    <br>

<div class="row">
  <div class="col-sm-4">
        <div v-if="message" class="alert alert-success alert-dismissible fade show w-sm-25" role="alert">
      {{message}}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import categoryData from "../../../services/category";
export default {
  name: "editcategory",
  props: ["id"],
  data() {
    return {
      cname: "",
      message: "",
    };
  },
  created() {
    categoryData.getCategoryById(this.id).then((res) => {
      this.cname = res.data.name;
      this.message = ""
    });
  },
  methods: {
    update() {
      let category = {
        name: this.cname,
      };
      categoryData
        .updateCategoyById(this.id, category)
        .then((res) => {
          console.log(res.data);
          this.message = "Name updated successfully";
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>

<style></style>
