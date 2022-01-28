import http from '../http-common'
import store from '../store/index';

class subcategoryService{
    getAllSubCategories(id){
        return http.get(`api/admin/category/${id}/subcategory`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    getSubCategoryById(cId,sId){
        return http.get(`api/admin/category/${cId}/subcategory/${sId}`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    updateSubCategoryById(cId,sId,name){
        return http.put(`api/admin/category/${cId}/subcategory/${sId}`,name,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    getSubCateInfoByName(sname){
        return http.get(`api/admin/category/:cId/subcategory/name/${sname}`)
    }

    addSubCategory(cId,subCategory){
        return http.post(`api/admin/category/${cId}/subcategory`,subCategory,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }
}

export default new subcategoryService();