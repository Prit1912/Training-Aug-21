<template>
  <div class="container my-5">
    <h3 style="color: blueviolet">Offers</h3>
    <button
      class="btn btn-dark my-3"
      @click="this.$router.push({ name: 'addOffer' })"
    >
      Add Offer
    </button>
    <div class="offersDiv border border-2 p-3">
      <div class="row">
        <div class="col-sm-4">
          <NormalSearch @query="searchOffer" />
        </div>
      </div>
    <br>
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Index</th>
            <th>OfferName</th>
            <th>Courses' Ids</th>
            <th>Discount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="offersList" >
          <tr v-for="(offer, index) in filteredOffer" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ offer.offerName }}</td>
            <td>
              <span v-for="(course,index) of offer.courses" :key="course.id">{{course.id}}<span v-if="index != offer.courses.length-1" >,</span></span>
            </td>
            <td>{{ offer.discount }}</td>
            <td>
              <span v-if="liveOffer.includes(offer._id)">
                <button
                  class="btn btn-outline-dark me-2"
                  @click="removeOffer(offer._id)"
                >
                  Remove
                </button>
              </span>
              <span v-else>
                <button
                  class="btn btn-dark me-2"
                  @click="makeOfferLive(offer._id)"
                >
                  Make Live
                </button>
              </span>
              <button
                class="btn text-light me-2"
                :disabled="liveOffer.includes(offer._id)"
                @click="
                  this.$router.push({
                    name: 'updateOffer',
                    params: { id: offer._id },
                  })
                "
                style="background: blueviolet"
              >
                Update
              </button>
              <button
                class="btn btn-danger text-light"
                :disabled="liveOffer.includes(offer._id)"
                @click="deleteOffer(offer._id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <v-pagination
        v-model="page"
        :pages="pages"
        :range-size="1"
        active-color="#DCEDFF"
        @update:modelValue="updateHandler(page)"
      />
    </div>
    </div>
  </div>
</template>

<script>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import NormalSearch from '../../../components/Search/NormalSearch.vue';
import offerData from "../../../services/offers";

export default {
  name: "offers",
  data() {
    return {
      offers: "",
      offersList: "",
      queryString: "",
      page: 1,
      pages: null,
      liveOffer: []
    };
  },
  components:{
    VPagination,
    NormalSearch
  },
  created() {
    offerData.getAllOffers().then((res) => {
      this.offers = res.data;
      for(let offer of this.offers){
        if(offer.isLive == true){
          this.liveOffer.push(offer._id)
        }
      }
      this.offersList = this.offers.slice(0,10)
      this.pages = this.offersList.length / 10 + 1;
    });
  },
  computed:{
    filteredOffer: function(){
      return this.offersList.filter((offer)=>{
        return(
          offer.offerName.toLowerCase().match(this.queryString)
        )
      })
    }
  },
  methods: {

    // delete offer permenantly
    deleteOffer(id) {
      offerData
        .deleteOffer(id)
        .then((res) => {
          console.log(res.data);
          offerData.getAllOffers().then((res) => {
            this.offers = res.data;
            this.offersList = this.offers.slice(10 * (this.page - 1), this.page * 10);
          });
        })
        .catch((err) => {
          console.log(err.response);
        });
    },

    // make offer live
    makeOfferLive(id) {
      console.log(id);
      offerData
        .goLive(id)
        .then((res) => {
          console.log(res.data);
          this.liveOffer.push(id)
           this.$store.dispatch("courses/setUpdatedCourses", []);
        this.$store.dispatch("courses/setAllCourses", []);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },

    // remove offer
    removeOffer(id) {
      offerData
        .removeOffer(id)
        .then((res) => {
          console.log(res.data);
         this.liveOffer = this.liveOffer.filter((offerId)=>{
           return offerId != id;
         })
          this.$store.dispatch("courses/setUpdatedCourses", []);
        this.$store.dispatch("courses/setAllCourses", []);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },

    // search offer
    searchOffer(str){
      this.queryString = str.toLowerCase();
    },

    // update list of offer to display on different pages
    updateHandler(page) {
      console.log(page);
      this.offersList = this.offers.slice(10 * (page - 1), page * 10);
    },
  },
};
</script>

<style></style>
