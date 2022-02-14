import http from '../http-common'
import store from '../store/index';

class offerServices{
    
    // get all offers
    getAllOffers(){
        return http.get("api/admin/offers",{
            headers:{
                'x-access-token': store.state.user.token
            }
        });
    }

    // get offer by id
    getOfferById(id){
        return http.get(`api/admin/offers/${id}`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // update offer by id
    updateOffer(id,offer){
        return http.put(`api/admin/offers/${id}`,offer,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // delete offer
    deleteOffer(id){
        return http.delete(`api/admin/offers/${id}/delete`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // add offer
    addOffer(offer){
        return http.post('api/admin/offers',offer,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // make offer live
    goLive(id){
        return http.put(`api/admin/offers/${id}/golive`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    // remove offer
    removeOffer(id){
        return http.put(`api/admin/offers/${id}/remove`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }
}

export default new offerServices();