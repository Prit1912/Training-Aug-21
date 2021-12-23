<template>

    <div class = "static" :class="{ active: isActive, 'text-danger': hasError }"></div>
    <div :class="classObject"></div>

    <!-- array syntax -->
    <div :class="[activeClass, errorClass]"></div>
    <div :class="[isActive ? activeClass : '', errorClass]"></div>
    <div :class="[{ active: isActive }, errorClass]"></div>

    <!-- add class while calling component -->
    <div>
        <p class="class1" :class="$attrs.class">class will be added when parent component will call child component</p>
    </div>

    <!-- Binding Inline Styles -->
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">Binding style</div>
    <div :style="styleObject"></div>
    <div :style="[styleObject, styleObject1]" style="font-weight:bold">hello</div>

</template>

<script>
    export default{
        name: 'ClassesAndStyle',
        data(){
            return{
                isActive: true,
                hasError: false,
                classObject: {
                    active: true,
                    'text-danger': false
                },
                activeClass: 'active',
                errorClass: 'text-danger',
                activeColor: 'red',
                fontSize: 30,
                styleObject: {
                    color: 'red',
                    fontSize: '13px'
                },
                styleObject1: {
                    // "background-color": 'green' // if you are using kebab case then use quotes
                    backgroundColor: 'green'
                }
            }
        }
    }
</script>

<style scoped>

</style>