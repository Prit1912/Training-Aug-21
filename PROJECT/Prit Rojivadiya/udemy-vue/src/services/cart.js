import http from '../http-common'
import store from '../store/index';

class cartServices{

    // get all cart items
    getCartItems(){
        return http.get("api/user/cart",{
            headers:{
                'x-access-token': store.state.user.token
            }
        });
    }

    // remove course from cart
    removeCartItem(id){
        return http.delete(`api/user/cart/${id}`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // purchase course
    purchaseCourse(){
        return http.post(`api/user/cart/buy`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }
}

export default new cartServices();