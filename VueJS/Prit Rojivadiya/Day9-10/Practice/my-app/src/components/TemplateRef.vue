<template>
    <div>
        <h3>Template Ref</h3>
        <input type="text" ref="inputRef">
            <br><br>
        <input type="text">
        <br><br>
        <input type="text" ref="inputRef1">
    </div>
    <br><br>
</template>

<script>
import {ref, onMounted} from 'vue'
export default {
    name: 'TemplateRef',
    setup(){
        const inputRef1 = ref(null)

        onMounted(()=>{
            inputRef1.value.focus()
        })

        return{
            inputRef1
        }
    },
    // mounted() {
    //     this.$refs.inputRef.focus()
    // }
}
</script>

<style>

</style>