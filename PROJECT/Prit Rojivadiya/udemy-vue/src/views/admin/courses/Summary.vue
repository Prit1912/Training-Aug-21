<template>
  {{course}}
</template>

<script>
import courseData from '../../../services/courses'
export default {
    name: 'summary',
    props: ['id'],
    data(){
        return{
            course: ""
        }
    },
    created(){
        courseData.showCourseSummary(this.id).then((res)=>{
            this.course = res.data
        })
    }
}
</script>

<style>

</style>