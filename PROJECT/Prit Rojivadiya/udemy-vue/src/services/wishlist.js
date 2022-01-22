import http from '../http-common'
import { userStore } from '../store/user.js';

class wishlistService{
    getwishlistItems(){
        return http.get("api/user/wishlist",{
            headers:{
                'x-access-token': userStore.state.token
            }
        });
    }

    removeFromWishlist(id){
        return http.delete(`api/user/wishlist/${id}`,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }
    
    wishlistToCart(id){
        return http.post(`api/user/wishlist/${id}/addtocart`,{
            headers:{
                'x-access-token': userStore.state.token
            }
        })
    }
}

export default new wishlistService();