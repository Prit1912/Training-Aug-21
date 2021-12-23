<template>
<hr>
<div class="calc my-5">
    <h1 class="display-3 text-danger">Calculator</h1>
    <span> <b>Number 1: </b></span>
    <input type="number" v-model="num1" placeholder="Enter 1st number">
    <br><br>
    <span> <b>Number 2: </b></span>
    <input type="number" v-model="num2" placeholder="Enter 2nd number">
    <br>
    <br>
    <button class="btn btn-success" @click="calculate" value="+">Add</button>&nbsp;
    <button class="btn btn-success" @click="calculate" value="-">Sub</button>&nbsp;
    <button class="btn btn-success" @click="calculate" value="*">Mul</button>&nbsp;
    <button class="btn btn-success" @click="calculate" value="/">Div</button>&nbsp;
    <h3 class="text-primary my-3">Result: {{answer}}</h3>
</div>
</template>

<script>
    export default{
        name: "calc",
        data(){
            return{
                answer: "",
                num1: "",
                num2: ""
            }
        },
        methods:{
            calculate(e){
                const expression = e.target.value;
                switch(expression){
                    case '+':
                    this.answer = this.num1 + this.num2;
                    break;
                    case '-':
                    this.answer = this.num1 - this.num2;
                    break;
                    case '*':
                    this.answer = this.num1 * this.num2;
                    break;
                    case '/':
                    this.answer = this.num1 / this.num2;
                    break;
                }
            }
        }
    }
</script>

<style>

</style>