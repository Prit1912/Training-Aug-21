<template>
  <div class="container my-5">
    <SearchBar @query='searchUser' />
    <br>
    <div class="table-responsive">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user of filteredUsers" :key="user._id">
            <td>{{ user._id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.role }}</td>
            <td>
              <button
                class="btn btn-dark me-2"
                style="background-color: blueviolet"
                @click="
                  this.$router.push({
                    name: 'updateUser',
                    params: { id: user._id },
                  })
                "
              >
                Update
              </button>
              <button
                class="btn btn-dark"
                v-if="user.isActive"
                @click="block(user._id)"
              >
                Block
              </button>
              <button
                class="btn btn-outline-dark"
                v-else
                @click="unblock(user._id)"
              >
                Unblock
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <v-pagination
      v-model="page"
      :pages="pages"
      :range-size="1"
      active-color="#DCEDFF"
      @update:modelValue="updateHandler(page)"
    />
    <!-- <div v-for="user of users" :key="user._id">
    {{ user }} -
    <button v-if="user.isActive" @click="block(user._id)">Block</button>
    <button v-else @click="unblock(user._id)">Unblock</button>
    <button @click="this.$router.push({name: 'updateUser',params: {id: user._id}})" >View / Update</button>
  </div> -->
  </div>
</template>

<script>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import userData from "../../../services/users";
import SearchBar from '../../../components/Search/SearchBar.vue'
export default {
  name: "user",
  components:{
    VPagination,
    SearchBar
  },
  data() {
    return {
      users: "",
      usersList: "",
      page: 1,
      pages: null,
      queryString: ""
    };
  },
  created() {
    userData.getAllUsers().then((res) => {
      this.users = res.data;
      this.usersList = this.users.slice(0,10);
      this.pages = (this.usersList.length/10)+1;
    });
  },
  computed: {
    filteredUsers: function(){
      return this.usersList.filter((user)=>{
        return(
          user.name.toLowerCase().match(this.queryString) ||
          user.role.toLowerCase().match(this.queryString)
        )
      })
    },
  },
  methods: {
    block(id) {
      userData.blockUser(id).then((res) => {
        console.log(res.data);
        userData.getAllUsers().then((res) => {
          this.users = res.data;
          this.usersList = this.users.slice(10 * (this.page - 1), this.page * 10)
        });
      });
    },
    unblock(id) {
      userData.unblockUser(id).then((res) => {
        console.log(res.data);
        userData.getAllUsers().then((res) => {
          this.users = res.data;
          this.usersList = this.users.slice(10 * (this.page - 1), this.page * 10)
        });
      });
    },
    updateHandler(page) {
      console.log(page);
      this.usersList = this.users.slice(10 * (page - 1), page * 10);
    },
    searchUser(str){
      this.queryString = str.toLowerCase();
    } 
  },
};
</script>

<style></style>
