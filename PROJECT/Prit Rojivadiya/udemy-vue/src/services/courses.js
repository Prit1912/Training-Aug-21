import http from '../http-common'
import { userStore } from '../store/user.js';

class courseService{
    getEnrolledCourses(){
        return http.get("api/user/courses",{
            headers:{
                'x-access-token': userStore.state.token
            }
        });
    }

    getAllCourses(){
        return http.get('api/courses')
    }

    getCategoryWiseCourses(id){
        return http.get(`api/courses/category/${id}`)
    }

    getSubCategoryWiseCourses(cId,sId){
        return http.get(`api/courses/category/${cId}/subcategory/${sId}`)
    }

    getCourseById(id){
        return http.get(`api/courses/${id}`)
    }

    addCourseToWishlist(id){
        return http.post(`api/courses/${id}/addtowishlist`,{
            Headers:{
                'x-access-token': userStore.state.token
            }
        })
    }

    addCourseToCart(id){
        return http.post(`api/courses/${id}/addtocart`,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }

    getInstructorCourses(){
        return http.get('api/courses/inst-courses',{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }

    getInstructorCourseById(id){
        return http.get(`api/courses/inst-courses/${id}`,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }

    courseReview(id){
        return http.get(`api/courses/inst-courses/${id}/reviews`,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }

    courseBuyers(id){
        return http.get(`api/courses/inst-courses/${id}/summary`,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }

    uplodadCourse(course){
        return http.post(`api/courses/inst-courses`,course,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }

    getCoursesByAdmin(){
        return http.get(`api/admin/courses`,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }

    showCourseSummary(id){
        return http.get(`api/admin/courses/summary/${id}`,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }

    showCourseBuyers(id){
        return http.get(`api/admin/courses/summary/${id}/buyers`,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }

    deactivateCourse(id){
        return http.delete(`api/admin/courses/${id}`,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }

    activateCourse(id){
        return http.put(`api/admin/courses/${id}/restore`,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })   
    }

}

export default new courseService();