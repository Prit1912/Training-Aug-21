<template>
  <div class="container my-5">
    <form @submit.prevent class="my-5">
      Sub category : <br />
      <input type="text" v-model="sname" /> <br /><br />
      Category : <br />
      <input type="text" disabled v-model="cname" /> <br /><br />
      <button class="btn btn-dark" @click="update">Update</button>
    </form>

<div class="row">
    <div class="col-sm-4">
            <div
      v-if="error"
      class="alert alert-danger alert-dismissible fade show w-sm-25"
      role="alert"
    >
      {{ error }}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    <div
      v-if="message"
      class="alert alert-success alert-dismissible fade show w-sm-25"
      role="alert"
    >
      {{ message }}
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
import subCategoryData from "../../../services/subcategory";
export default {
  name: "updateSubCategory",
  props: ["cId", "sId"],
  data() {
    return {
      cname: "",
      sname: "",
      error: "",
      message: "",
    };
  },
  created() {
    categoryData
      .getCategoryById(this.cId)
      .then((res) => {
        this.cname = res.data.name;
        this.error = "";
      })
      .catch((err) => {
        this.error = err.response.data;
      });

    subCategoryData
      .getSubCategoryById(this.cId, this.sId)
      .then((res) => {
        this.sname = res.data[0].name;
        this.error = "";
      })
      .catch((err) => {
        this.error = err.response.data;
      });
  },
  methods: {
    update() {
      let subcategory = {
        name: this.sname,
      };
      subCategoryData
        .updateSubCategoryById(this.cId, this.sId, subcategory)
        .then((res) => {
          console.log(res.data);
          this.error = "";
          this.message = "updated successfully";
          setTimeout(()=>{
            this.$router.push({name: 'categories'})
          },1000)
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
