<template>
    <h1>Template Syntax</h1>

    <!-- The most basic form of data binding is text interpolation using the 
    "Mustache" syntax (double curly braces): -->

    <!-- v-once -->
    <span v-once>{{msgOnce}}</span>
    <button v-on:click = "changeText" class="btn btn-warning">Change Text</button>

    <!-- v-html -->
    <div v-html="htmlText"></div>

    <!-- Mustaches cannot be used inside HTML attributes. Instead, use a v-bind directive: -->
    <div v-bind:id="dynamicId"></div>

    <!-- v-if -->
    <p v-if="seen">now you can see this</p>

    <!-- v-on -->
    <button v-on:click="doSomething">show alert</button>

    <!-- .prevent modifiers -->
    <form v-on:submit.prevent = "onSubmit">
        <input type="text">
        <button class="btn btn-success">Submit</button>
    </form>

    <!-- sorthand for v-bind is `:` and v-on is '@' -->
    <a :href = "url">google link</a>
    <button @click = "handleClick" class="btn btn-info">Click Here</button>

</template>

<script>
    export default{
        name: 'TemplateSyntax',
        data(){
            return{
                msgOnce: 'This message will never change',
                htmlText: `<h3>html interpolation</h3>`,
                dynamicId: 'id1',
                seen: true,
                url: "https://www.google.com"
            }
        },methods:{
            changeText(){
                this.msgOnce = 'hi'
            },
            doSomething(){
                alert('hello')
            },
            handleClick(){
                alert('button clicked')
            }
        }
    }
</script>

<style scoped>

</style>