<template>
<div class="container my-5">
    <div v-if="buyers">
      <h3 style="color: blueviolet">Buyers</h3>
      <div class="row">
        <div class="col-sm-4">
          <NormalSearch @query="searchUser" />
        </div>
        <div class="col-sm-8 d-flex align-self-center">
          Buyers Per Page : &nbsp; <input
            v-model="buyersPerPage"
            type="number"
            style="width: 50px"
            ref= 'numInput'
            @change="updateBuyersPerPage"
          />
        </div>
      </div>
      <div class="table-responsive">
        <table
          class="table table-bordered border-dark table-striped table-hover my-3"
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="buyer of buyersList" :key="buyer.user._id">
              <td>{{ buyer.user._id }}</td>
              <td>{{ buyer.user.name }}</td>
              <td>{{ buyer.user.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <v-pagination
        ref="pagination"
        v-model="page"
        :pages="pages"
        :range-size="1"
        active-color="#DCEDFF"
        @update:modelValue="updateHandler(page)"
      />
    </div>
    <h1 v-if="error">{{ error }}</h1>
  </div>
</template>

<script>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import NormalSearch from '../Search/NormalSearch.vue'
import courseData from '../../services/courses'
export default {
    name: 'buyers',
    props: ['courseId'],
    components: {
        VPagination,
        NormalSearch,
    },
    data(){
        return{
            buyers: "",
            buyersList: "",
            error: "",
            updatedBuyersList: "",
            buyersPerPage: 5,
            page: 1,
            pages: null,
        }
    },
    created(){

      // get list of course buyers
      courseData
      .courseBuyers(this.courseId)
      .then((res) => {
        this.buyers = res.data;
        this.updatedBuyersList = res.data;
        this.buyersList = this.buyers.slice(0, this.buyersPerPage);
        this.page = 1;
        this.pages =
          (this.updatedBuyersList.length / this.buyersPerPage) % 1 == 0
            ? this.updatedBuyersList.length / this.buyersPerPage
            : Math.ceil(this.updatedBuyersList.length / this.buyersPerPage);
      })
      .catch((err) => {
        this.error = err.response.data;
      });
    },

    methods: {

    // update buyers to diplay on different pages
    updateHandler(page) {
      this.buyersList = this.updatedBuyersList.slice(
        this.buyersPerPage * (page - 1),
        page * this.buyersPerPage
      );
    },

    // get buyers of particular course
    searchUser(str) {
      console.log(str);
      this.page = 1;
      let buyers = this.buyers.filter((buyer) => {
        return (
          buyer.user.name.toLowerCase().match(str.toLowerCase()) ||
          buyer.user.email.toLowerCase().match(str.toLowerCase())
        );
      });
      this.updatedBuyersList = buyers;
      this.buyersList = this.updatedBuyersList.slice(
        this.buyersPerPage * (this.page - 1),
        this.buyersPerPage * this.page
      );
      this.pages =
        (buyers.length / this.buyersPerPage) % 1 == 0
          ? buyers.length / this.buyersPerPage
          : Math.ceil(buyers.length / this.buyersPerPage);
    },

    // update number of buyers to display per page
    updateBuyersPerPage(){
        this.page = 1;
        this.buyersPerPage = this.$refs['numInput'].value <= 0 ? 1 : this.$refs['numInput'].value;
        this.pages = (this.updatedBuyersList.length/this.buyersPerPage)%1 == 0 ? this.updatedBuyersList.length/this.buyersPerPage : Math.ceil(this.updatedBuyersList.length/this.buyersPerPage)
        this.buyersList = this.updatedBuyersList.slice(this.buyersPerPage*(this.page-1), this.buyersPerPage*(this.page))
    }
  },
}
</script>

<style>

</style>