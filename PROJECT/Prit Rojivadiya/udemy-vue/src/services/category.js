import http from '../http-common'
import { userStore } from '../store/user.js';

class categoryService{
    getAllCategories(){
        return http.get('api/admin/category')
    }

    getCategoryById(id){
        return http.get(`api/admin/category/${id}`,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }

    updateCategoyById(id,name){
        return http.put(`api/admin/category/${id}`,name,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }

    getCategoryInfoByName(cname){
        return http.get(`api/admin/category/name/${cname}`)
    }

    addCategory(cname){
        return http.post(`api/admin/category`,cname,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }

}

export default new categoryService();