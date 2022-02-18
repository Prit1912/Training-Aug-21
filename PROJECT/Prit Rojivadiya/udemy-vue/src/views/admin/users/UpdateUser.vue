<template>

  <div class="container my-5">
    <h4 v-if="error" >{{error}}</h4>
    <div class="row">
      <div class="col-md-4 ms-auto me-auto">
        <form class="row row-cols-lg-auto g-3 align-items-center">
          <div class="col-12">
            <label class="visually-hidden" for="name">name</label>
            <div class="input-group">
              <div class="input-group-text">
                <i class="fas fa-user"></i>
              </div>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Username"
                v-model="profile.name"
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="email">email</label>
            <div class="input-group">
              <div class="input-group-text">
                <i class="fas fa-envelope"></i>
              </div>
              <input
                type="text"
                class="form-control"
                id="email"
                placeholder="Email"
                v-model="profile.email"
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="phone">phone</label>
            <div class="input-group">
              <div class="input-group-text">
                <i class="fas fa-phone"></i>
              </div>
              <input
                type="number"
                class="form-control"
                id="phone"
                placeholder="Phone"
                v-model="profile.phone"
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="password">Role</label>
            <div class="input-group">
              <div class="input-group-text">
                <i class="fas fa-user-tag"></i>
              </div>
              <select
                v-model="profile.role"
                class="form-select"
                aria-label="Default select example"
              >
                <option value="user">User</option>
                <option value="instructor">Instructor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          <div class="col-12">
            <button
              type="button"
              class="btn btn-primary d-block w-100"
              style="background-color: blueviolet"
              @click="update(profile._id)"
            >
              Update Profile
            </button>
          </div>
        </form>

         <div v-if="message">
            <div
              class="alert alert-success alert-dismissible fade show"
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
  </div>
</template>

<script>
import userData from "../../../services/users";
export default {
  name: "updateUser",
  props: ["id"],
  data() {
    return {
      profile: "",
      message: "",
      error: ""
    };
  },
  created() {

    // get user information
    userData.getUserInfo(this.id).then((res) => {
      console.log(res.data);
      this.profile = res.data;
    }).catch((err)=>{
        this.error = err.response.data;
    })
  },
  methods: {

    // update user by admin
    update(id) {
        this.message = ""
      userData
        .updateUserByAdmin(id, this.profile)
        .then((res) => {
          console.log(res.data);
          this.message = "User updated successfully";
        })
        .catch((err) => {
          this.error = err.response.data
        });
    },
  },
};
</script>

<style></style>
