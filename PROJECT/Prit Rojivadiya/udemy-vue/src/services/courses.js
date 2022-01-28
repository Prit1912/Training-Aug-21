import http from '../http-common'
import store from '../store/index.js';

class courseService{
    getEnrolledCourses(){
        return http.get("api/user/courses",{
            headers:{
                'x-access-token': store.state.user.token
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
        console.log(store)
        console.log(store.state.user)
        return http.post(`api/courses/${id}/addtowishlist`,{
            Headers:{
                'x-access-token': store.state.user.token
            }
        })
    }
    
    addCourseToCart(id){
        console.log(store.state.user)
        return http.post(`api/courses/${id}/addtocart`,{
            // headers:{
            //     // 'x-access-token': store.state.user.token
            //     'x-access-token': store.state.user.token
            // }
        })
    }

    getInstructorCourses(){
        return http.get('api/courses/inst-courses',{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    getInstructorCourseById(id){
        return http.get(`api/courses/inst-courses/${id}`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    courseReview(id){
        return http.get(`api/courses/inst-courses/${id}/reviews`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    courseBuyers(id){
        return http.get(`api/courses/inst-courses/${id}/summary`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    uplodadCourse(course){
        return http.post(`api/courses/inst-courses`,course,{
            headers:{
                'x-access-token': store.state.user.token,
            }
        })
    }

    updateInstCourse(id,course){
        return http.put(`api/courses/inst-courses/${id}`,course,{
            headers:{
                'x-access-token': store.state.user.token,
            }
        })
    }

    getCoursesByAdmin(){
        return http.get(`api/admin/courses`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    showCourseSummary(id){
        return http.get(`api/admin/courses/summary/${id}`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    showCourseBuyers(id){
        return http.get(`api/admin/courses/summary/${id}/buyers`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    deactivateCourse(id){
        return http.delete(`api/admin/courses/${id}`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    activateCourse(id){
        return http.put(`api/admin/courses/${id}/restore`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })   
    }
}

export default new courseService();