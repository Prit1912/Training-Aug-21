import http from '../http-common'
import store from '../store/index';

class offerServices{
    getAllOffers(){
        return http.get("api/admin/offers",{
            headers:{
                'x-access-token': store.state.user.token
            }
        });
    }

    getOfferById(id){
        return http.get(`api/admin/offers/${id}`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    updateOffer(id,offer){
        return http.put(`api/admin/offers/${id}`,offer,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    deleteOffer(id){
        return http.delete(`api/admin/offers/${id}/delete`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    addOffer(offer){
        return http.post('api/admin/offers',offer,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    goLive(id){
        return http.put(`api/admin/offers/${id}/golive`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }

    removeOffer(id){
        return http.put(`api/admin/offers/${id}/remove`,{
            headers:{
                'x-access-token': store.state.user.token
            }
        })
    }
}

export default new offerServices();