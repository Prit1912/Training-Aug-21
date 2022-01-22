<template>
  {{offers}}
</template>

<script>
import offerData from '../../../services/offers'
export default {
    name: 'offers',
    data(){
        return{
            offers: ""
        }
    },
    created(){
        offerData.getAllOffers().then((res)=>{
            this.offers = res.data;
        })
    }
}
</script>

<style>

</style>