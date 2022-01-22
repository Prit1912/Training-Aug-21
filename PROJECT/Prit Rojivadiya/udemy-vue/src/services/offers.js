import http from '../http-common'
import { userStore } from '../store/user.js';

class offerServices{
    getAllOffers(){
        return http.get("api/admin/offers",{
            headers:{
                'x-access-token': userStore.state.token
            }
        });
    }

    // removeCartItem(id){
    //     return http.delete(`api/user/cart/${id}`,{
    //         headers:{
    //             'x-access-token': userStore.state.token
    //         }
    //     })
    // }
}

export default new offerServices();