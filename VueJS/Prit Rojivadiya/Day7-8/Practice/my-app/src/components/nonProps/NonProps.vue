<template>
    <NonProps1 class="dateTime" name="dataTime"  @change="submitChange" />
</template>

<script>
import NonProps1 from './NonProps1.vue'
    export default{
        name: 'NonProps',
        components: {
            NonProps1
        },
        methods:{
            submitChange(event){
                console.log(event.target.value)
            }
        }
    }
</script>