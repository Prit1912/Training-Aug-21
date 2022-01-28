import http from '../http-common'
import store from '../store/index';

class wishlistService{
    getwishlistItems(){
        return http.get("api/user/wishlist",{
            headers:{
                'x-access-token': store.state.user.token
            }
        });
    }

    removeFromWishlist(id){
        return http.delete(`api/user/wishlist/${id}`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }
    
    wishlistToCart(id){
        return http.post(`api/user/wishlist/${id}/addtocart`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }
}

export default new wishlistService();