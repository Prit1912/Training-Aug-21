<template>
    <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-10 col-sm-8 col-md-6 col-lg-4">
        <h4 class="text-center display-6 " style="color: blueviolet" >Profile</h4>
        <hr />
        <div v-if="error" class="alert alert-danger" role="alert">
          {{ error }}
        </div>
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
            <label class="visually-hidden" for="role">role</label>
            <div class="input-group">
              <div class="input-group-text"><i class="fas fa-user-tag"></i></div>
              <input
                type="role"
                class="form-control"
                id="role"
                placeholder="role"
                v-model="profile.role"
                disabled
              />
            </div>
          </div>

          <div class="col-12">
            <button
              type="button"
              class="btn btn-primary d-block w-100"
              style="background-color: blueviolet"
              @click="update"
            >
              Update Profile
            </button>
          </div>
        </form>
         <div v-if="success" class="alert alert-success alert-dismissible fade show mt-3" role="alert">
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          {{ success }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userData from '../../services/users'
export default {
    name: 'profile',
    data(){
        return{
            profile:{},
            error: "",
            success: ""
        }
    },
    mounted(){
        userData.userInfo().then((res)=>{
            this.profile = res.data;
        })
    },
    methods:{
        update(){
            let user = {
                name: this.profile.name,
                phone: this.profile.phone,
                email: this.profile.email
            }
            userData.updateProfile(user).then((res)=>{
                console.log(res.data);
                this.success = "Profile updated successfully";
                this.error = ""
            }).catch((err)=>{
                this.error = err.response.data
            })
        }
    }
}
</script>

<style>

</style>