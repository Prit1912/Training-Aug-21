<template>
  <div class="container my-5">
    <form>
      <div class="row">
        <div class="col-sm-4">
          <input
            type="text"
            class="form-control"
            v-model="globalSearch"
            placeholder="Search globally"
          />
        </div>
        <div class="col-sm-2 mt-2 mt-sm-0">
          <button class="btn btn-dark" @click="searchGlobbaly">Search</button>
        </div>
      </div>
    </form>
    <br /><br />

    <div class="row">
      <div class="col-lg-6 d-flex flex-wrap justify-content-between rounded bg-dark p-5 ">
        <button class="btn btn-outline-light" @click="allUsers" >All</button>
        <button class="btn btn-outline-light" @click="searchBlockedUser" >Blocked user</button>
        <button class="btn btn-outline-light" @click="searchNormalUser" >Normal user</button>
        <button class="btn btn-outline-light" @click="searchInstructor" >Instructor</button>
        <button class="btn btn-outline-light" @click="searchAdmin" >Admin</button>
      </div>
    </div>

    <br><br>
    <div class="usersData border border-2 p-3">
      <SearchBar @query="searchUser" />
      <br />
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
          <tbody v-if="usersList" >
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
                  v-if="!blockedUsers.includes(user._id)"
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
    </div>
  </div>
</template>

<script>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import userData from "../../../services/users";
import SearchBar from "../../../components/Search/SearchBar.vue";
export default {
  name: "user",
  components: {
    VPagination,
    SearchBar,
  },
  data() {
    return {
      users: "",
      usersList: "",
      page: 1,
      pages: null,
      queryString: "",
      globalSearch: "",
      blockedUsers: [],
    };
  },
  created() {
    userData.getAllUsers().then((res) => {
      this.users = res.data;
      this.usersList = this.users.slice(0, 10);
      this.pages = this.usersList.length / 10 + 1;

      let blockedUser = this.users.filter((user)=>{
        return user.isActive == false;
      })
      for(let user of blockedUser){
        if(!this.blockedUsers.includes(user._id)){
          this.blockedUsers.push(user._id);
        }
      }

    });

     
  },
  computed: {
    filteredUsers: function () {
      return this.usersList.filter((user) => {
        return (
          user.name.toLowerCase().match(this.queryString) ||
          user.role.toLowerCase().match(this.queryString)
        );
      });
    },
    globallyFilteredUsers: function () {
      return this.users.filter((user) => {
        return (
          user.name.toLowerCase().match(this.globalSearch) ||
          user.role.toLowerCase().match(this.globalSearch)
        );
      });
    },
  },
  methods: {
    block(id) {
      userData.blockUser(id).then((res) => {
        console.log(res.data);
        this.blockedUsers.push(id);
      });
    },
    unblock(id) {
      userData.unblockUser(id).then((res) => {
        console.log(res.data);
        this.blockedUsers = this.blockedUsers.filter((UserId)=>{
          return UserId != id
        })
      });
    },
    updateHandler(page) {
      console.log(page);
      this.usersList = this.users.slice(10 * (page - 1), page * 10);
    },
    searchUser(str) {
      this.queryString = str.toLowerCase();
    },
    searchGlobbaly() {
      this.page = 1;
      this.usersList = this.globallyFilteredUsers.slice(
        10 * (this.page - 1),
        this.page * 10
      );
      this.pages = this.globallyFilteredUsers.length / 10 + 1;
    },
    searchBlockedUser(){
      this.page = 1;
      let blockedUser = this.users.filter((user)=>{
        return user.isActive == false;
      })
      this.pages = blockedUser.length/10 + 1
      this.usersList = blockedUser.slice(10 * (this.page - 1), this.page * 10)
    },
    searchNormalUser(){
      this.page = 1;
      let normalUsers = this.users.filter((user)=>{
        return user.role == 'user';
      })
      this.pages = normalUsers.length/10 + 1
      this.usersList = normalUsers.slice(10 * (this.page - 1), this.page * 10)
    },
    allUsers(){
      this.page = 1;
      let allUsers = this.users
      this.pages = allUsers.length/10+1
      this.usersList = allUsers.slice(10 * (this.page - 1), this.page * 10)
    },
    searchInstructor(){
      this.page = 1;
      let instructors = this.users.filter((user)=>{
        return user.role == 'instructor';
      })
      this.pages = instructors.length/10 + 1
      this.usersList = instructors.slice(10 * (this.page - 1), this.page * 10)
    },
    searchAdmin(){
      this.page = 1;
      let admins = this.users.filter((user)=>{
        return user.role == 'admin';
      })
      this.pages = admins.length/10 + 1
      this.usersList = admins.slice(10 * (this.page - 1), this.page * 10)
    }
  },
};
</script>

<style></style>
