<template>
  <h1 class="display-1" :style="{color: $store.state.colorCode}" >{{$store.state.counter}}</h1>
  <h3>Counter Square: {{$store.state.counter}} <sup>2</sup> = {{$store.getters.counterSquare }} </h3>
  <button class="btn btn-success" @click="$store.dispatch('increment')">Increment</button>&nbsp;
  <button class="btn btn-success" @click="$store.dispatch('decrement')">Decrement</button>
  <br><br>
  <input v-model="colorCode" type="text" placeholder="Enter color code">
</template>

<script>
export default {
    name: 'Counter',
    computed:{
      colorCode:{
        get(){
          return this.$store.state.colorCode
        },
        set(newVal){
          this.$store.dispatch('setColorCode',newVal);
        }
      }
    }
}
</script>

<style>

</style>