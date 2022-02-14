import http from '../http-common'
import store from '../store/index';

class categoryService{

    // get all categories
    getAllCategories(){
        return http.get('api/admin/category')
    }

    // get category by id
    getCategoryById(id){
        return http.get(`api/admin/category/${id}`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // update category by ie
    updateCategoyById(id,name){
        return http.put(`api/admin/category/${id}`,name,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // get category information by category name
    getCategoryInfoByName(cname){
        return http.get(`api/admin/category/name/${cname}`)
    }

    // add category
    addCategory(cname){
        return http.post(`api/admin/category`,cname,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

}

export default new categoryService();