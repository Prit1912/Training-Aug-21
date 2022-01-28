import http from '../http-common'
import store from '../store/index';

class userServices{
    userLogin(user){
        return http.post("api/user/login",user)
    }

    userSignup(user){
        return http.post("/api/user/signup",user)
    }

    forgotPassword(email){
        return http.post("/api/user/forgot-password",email)
    }

    resetPassword(password,token){
        return http.post(`api/user/reset-password/${token}`,password)
    }

    userInfo(){
        return http.get('api/user/profile',{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    updateProfile(user){
        return http.put('api/user/profile/update',user,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    getAllUsers(){
        return http.get('api/admin/users',{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    blockUser(id){
        return http.delete(`api/admin/users/${id}`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    unblockUser(id){
        return http.put(`api/admin/users/${id}/restore`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    getUserInfo(id){
        return http.get(`api/admin/users/${id}`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    updateUserByAdmin(id,updatedVal){
        return http.put(`api/admin/users/${id}`,updatedVal,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })

    }

    rateCourse(id,review){
        return http.post(`api/user/courses/${id}/review`,review,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }
}

export default new userServices();