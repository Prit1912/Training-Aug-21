<template>
  <div class="container my-5">
    <button
      class="btn btn-dark"
      @click="this.$router.push({ name: 'addUserByAdmin' })"
    >
      Add User
    </button>

    <div class="row my-5">
      <div
        class=" filterContiner col-lg-6 d-flex flex-wrap justify-content-between rounded p-5"
      >
        <button class="btn btn-outline-dark" @click="allUsers">All</button>
        <button class="btn btn-outline-dark" @click="searchBlockedUser">
          Blocked user
        </button>
        <button class="btn btn-outline-dark" @click="searchNormalUser">
          Normal user
        </button>
        <button class="btn btn-outline-dark" @click="searchInstructor">
          Instructor
        </button>
        <button class="btn btn-outline-dark" @click="searchAdmin">
          Admin
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-4">
        <NormalSearch @query="searchUser" />
      </div>
    </div>


    <br /><br />
    <div class="usersData border border-dark p-3">
      Users Per Page:
      <input
        type="number"
        ref="numOfUsers"
        value="10"
        @change="changeUsersPerPage"
        style="width: 50px"
      />
      <br /><br />
      <div class="table-responsive">
        <table class="table table-hover table-bordered ">
          <thead class="bg-secondary text-light" >
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
          <tbody v-if="usersList">
            <tr v-for="user of usersList" :key="user._id">
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
          <div v-if="usersList.length == 0" >
             <h3> No user found </h3>
          </div>
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
  </div>
</template>

<script>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import userData from "../../../services/users";
import NormalSearch from "../../../components/Search/NormalSearch.vue";
export default {
  name: "user",
  components: {
    VPagination,
    NormalSearch,
  },
  data() {
    return {
      users: "",
      usersList: "",
      updatedUsersList: "",
      page: 1,
      pages: null,
      queryString: "",
      globalSearch: "",
      blockedUsers: [],
      usersPerPage: 10,
    };
  },
  created() {
    userData.getAllUsers().then((res) => {
      this.users = res.data;
      this.updatedUsersList = res.data;
      this.usersList = this.users.slice(0, this.usersPerPage);
      this.pages =
        (this.users.length / this.usersPerPage) % 1 == 0
          ? this.users.length / this.usersPerPage
          : this.users.length / this.usersPerPage + 1;

      let blockedUser = this.users.filter((user) => {
        return user.isActive == false;
      });
      for (let user of blockedUser) {
        if (!this.blockedUsers.includes(user._id)) {
          this.blockedUsers.push(user._id);
        }
      }
    });
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
        this.blockedUsers = this.blockedUsers.filter((UserId) => {
          return UserId != id;
        });
      });
    },
    updateHandler(page) {
      console.log(page);
      this.usersList = this.updatedUsersList.slice(
        this.usersPerPage * (page - 1),
        page * this.usersPerPage
      );
    },
    searchUser(str) {
      this.queryString = str.toLowerCase();
      let filteredUsers = this.users.filter((user) => {
        return (
          user.name.toLowerCase().match(this.queryString) ||
          user.role.toLowerCase().match(this.queryString)
        );
      });
      this.updatedUsersList = filteredUsers;
      this.page = 1;
      this.usersList = filteredUsers.slice(
        this.usersPerPage * (this.page - 1),
        this.page * this.usersPerPage
      );
      this.pages =
        (filteredUsers.length / this.usersPerPage) % 1 == 0
          ? filteredUsers.length / this.usersPerPage
          : filteredUsers.length / this.usersPerPage + 1;
    },
    searchGlobbaly() {
      this.page = 1;
      this.updatedUsersList = this.globallyFilteredUsers;
      this.usersList = this.globallyFilteredUsers.slice(
        this.usersPerPage * (this.page - 1),
        this.page * this.usersPerPage
      );
      this.pages =
        (this.globallyFilteredUsers.length / this.usersPerPage) % 1 == 0
          ? this.globallyFilteredUsers.length / this.usersPerPage
          : this.globallyFilteredUsers.length / this.usersPerPage + 1;
    },
    searchBlockedUser() {
      this.page = 1;
      let blockedUser = this.users.filter((user) => {
        return user.isActive == false;
      });
      this.pages =
        (blockedUser.length / this.usersPerPage) % 1 == 0
          ? blockedUser.length / this.usersPerPage
          : blockedUser.length / this.usersPerPage + 1;
      this.updatedUsersList = blockedUser;
      this.usersList = blockedUser.slice(
        this.usersPerPage * (this.page - 1),
        this.page * this.usersPerPage
      );
    },
    searchNormalUser() {
      this.page = 1;
      let normalUsers = this.users.filter((user) => {
        return user.role == "user";
      });
      this.pages =
        (normalUsers.length / this.usersPerPage) % 1 == 0
          ? normalUsers.length / this.usersPerPage
          : normalUsers.length / this.usersPerPage + 1;
      this.updatedUsersList = normalUsers;
      this.usersList = normalUsers.slice(
        this.usersPerPage * (this.page - 1),
        this.page * this.usersPerPage
      );
    },
    allUsers() {
      this.page = 1;
      let allUsers = this.users;
      this.pages =
        (allUsers.length / this.usersPerPage) % 1 == 0
          ? allUsers.length / this.usersPerPage
          : allUsers.length / this.usersPerPage + 1;
      this.updatedUsersList = allUsers;
      this.usersList = allUsers.slice(
        this.usersPerPage * (this.page - 1),
        this.page * this.usersPerPage
      );
    },
    searchInstructor() {
      this.page = 1;
      let instructors = this.users.filter((user) => {
        return user.role == "instructor";
      });
      this.pages =
        (instructors.length / this.usersPerPage) % 1 == 0
          ? instructors.length / this.usersPerPage
          : instructors.length / this.usersPerPage + 1;
      this.updatedUsersList = instructors;
      this.usersList = instructors.slice(
        this.usersPerPage * (this.page - 1),
        this.page * this.usersPerPage
      );
    },
    searchAdmin() {
      this.page = 1;
      let admins = this.users.filter((user) => {
        return user.role == "admin";
      });
      this.pages =
        (admins.length / this.usersPerPage) % 1 == 0
          ? admins.length / this.usersPerPage
          : admins.length / this.usersPerPage + 1;
      this.updatedUsersList = admins;
      this.usersList = admins.slice(
        this.usersPerPage * (this.page - 1),
        this.page * this.usersPerPage
      );
    },
    changeUsersPerPage() {
      console.log(this.updatedUsersList)
      this.page = 1;
      this.usersPerPage = this.$refs["numOfUsers"].value <= 0 ? 1 : this.$refs["numOfUsers"].value;
      this.pages =
        (this.updatedUsersList.length / this.usersPerPage) % 1 == 0
          ? this.updatedUsersList.length / this.usersPerPage
          : this.updatedUsersList.length / this.usersPerPage + 1;
      this.usersList = this.updatedUsersList.slice(
        this.usersPerPage * (this.page - 1),
        this.page * this.usersPerPage
      );
    },  
  },
};
</script>

<style scoped>

.filterContiner {
    position: relative;
    border-radius: 5px;
    z-index: 0;
    background: linear-gradient(0deg,blueviolet,white);
}

.filterContiner::before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    /* right: 0px;
    bottom: 0px; */
    height: 100%;
    width: 100%;
    background: linear-gradient(0deg,white,blueviolet);
    opacity: 0;
    z-index: -1;
    transition: all 0.8s ease-in-out;
}

.filterContiner:hover::before {
    opacity: 1;
}
</style>
