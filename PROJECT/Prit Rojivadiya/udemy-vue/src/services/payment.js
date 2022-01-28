import http from '../http-common'
import store from '../store/index';

class paymentServices{
    makePayment(items){
        return http.post('api/payment',items,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }
}

export default new paymentServices();