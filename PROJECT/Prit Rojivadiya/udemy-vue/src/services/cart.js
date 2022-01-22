import http from '../http-common'
import { userStore } from '../store/user.js';

class cartServices{
    getCartItems(){
        return http.get("api/user/cart",{
            headers:{
                'x-access-token': userStore.state.token
            }
        });
    }

    removeCartItem(id){
        return http.delete(`api/user/cart/${id}`,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }

    purchaseCourse(){
        return http.post(`api/user/cart/buy`,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }
}

export default new cartServices();