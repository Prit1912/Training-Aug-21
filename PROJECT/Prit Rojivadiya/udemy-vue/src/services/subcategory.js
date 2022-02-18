import http from '../http-common'
import store from '../store/index';

class subcategoryService{

    // get all subcategory
    getAllSubCategories(id){
        return http.get(`api/admin/category/${id}/subcategory`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // get subcategory by id
    getSubCategoryById(cId,sId){
        return http.get(`api/admin/category/${cId}/subcategory/${sId}`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // update subcategory by id
    updateSubCategoryById(cId,sId,name){
        return http.put(`api/admin/category/${cId}/subcategory/${sId}`,name,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // get subcategory information by name
    getSubCateInfoByName(sname){
        return http.get(`api/admin/category/:cId/subcategory/name/${sname}`)
    }

    // add subcategory
    addSubCategory(cId,subCategory){
        return http.post(`api/admin/category/${cId}/subcategory`,subCategory,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // delete subCategory
    deleteSubCategory(cId,sId){
        return http.delete(`api/admin/category/${cId}/subcategory/${sId}`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }
}

export default new subcategoryService();