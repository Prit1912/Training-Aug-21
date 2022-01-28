import http from '../http-common'
import store from '../store/index';
// console.log(store.state)

class cartServices{
    getCartItems(){
        return http.get("api/user/cart",{
            headers:{
                'x-access-token': store.state.user.token
            }
        });
    }

    removeCartItem(id){
        return http.delete(`api/user/cart/${id}`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    purchaseCourse(){
        return http.post(`api/user/cart/buy`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }
}

export default new cartServices();