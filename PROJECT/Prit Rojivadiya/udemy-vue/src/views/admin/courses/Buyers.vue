<template>
  {{buyers}}
</template>

<script>
import courseData from '../../../services/courses'
export default {
    name: 'buyers',
    props: ['id'],
    data(){
        return{
            buyers: ""
        }
    },
    created(){
        courseData.showCourseBuyers(this.id).then((res)=>{
            this.buyers = res.data
        })
    }
}
</script>

<style>

</style>