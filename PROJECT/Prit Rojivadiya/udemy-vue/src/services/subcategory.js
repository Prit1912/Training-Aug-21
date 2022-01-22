import http from '../http-common'
import { userStore } from '../store/user.js';

class subcategoryService{
    getAllSubCategories(id){
        return http.get(`api/admin/category/${id}/subcategory`,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }

    getSubCategoryById(cId,sId){
        return http.get(`api/admin/category/${cId}/subcategory/${sId}`,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }

    updateSubCategoryById(cId,sId,name){
        return http.put(`api/admin/category/${cId}/subcategory/${sId}`,name,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }

    getSubCateInfoByName(sname){
        return http.get(`api/admin/category/:cId/subcategory/name/${sname}`)
    }

    addSubCategory(cId,subCategory){
        return http.post(`api/admin/category/${cId}/subcategory`,subCategory,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }
}

export default new subcategoryService();