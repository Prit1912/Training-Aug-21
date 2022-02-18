import http from '../http-common'
import store from '../store/index';

class userServices{

    // user login
    userLogin(user){
        return http.post("api/user/login",user)
    }

    // user signup
    userSignup(user){
        return http.post("/api/user/signup",user)
    }

    // send mail forgot password
    forgotPassword(email){
        return http.post("/api/user/forgot-password",email)
    }

    // reset password
    resetPassword(password,token){
        return http.post(`api/user/reset-password/${token}`,password)
    }

    // user information
    userInfo(){
        console.log(store.state.user)
        return http.get('api/user/profile',{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // update user profile
    updateProfile(user){
        return http.put('api/user/profile/update',user,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // get all users
    getAllUsers(){
        return http.get('api/admin/users',{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // block user
    blockUser(id){
        return http.delete(`api/admin/users/${id}`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // unblock user
    unblockUser(id){
        return http.put(`api/admin/users/${id}/restore`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // get user information
    getUserInfo(id){
        return http.get(`api/admin/users/${id}`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // update user by admin
    updateUserByAdmin(id,updatedVal){
        return http.put(`api/admin/users/${id}`,updatedVal,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // review course
    rateCourse(id,review){
        return http.post(`api/user/courses/${id}/review`,review,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // get video Progress
    getProgress(id){
        return http.get(`api/user/courses/${id}/getProgress`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // set video progress
    setProgress(id,data){
        return http.post(`api/user/courses/${id}/setProgress`,data,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }
}

export default new userServices();