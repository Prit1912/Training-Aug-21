import http from '../http-common'
import store from '../store/index';

class wishlistService{

    // get wishlist items
    getwishlistItems(){
        return http.get("api/user/wishlist",{
            headers:{
                'x-access-token': store.state.user.token
            }
        });
    }

    // remove item from wishlist
    removeFromWishlist(id){
        return http.delete(`api/user/wishlist/${id}`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }
    
    // add item to cart from wishlist
    wishlistToCart(id){
        return http.post(`api/user/wishlist/${id}/addtocart`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }
}

export default new wishlistService();