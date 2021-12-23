<template>
  <div class="container">
    <NonProps />
    <CustomEvent />
    <Slot />
    <CompA />
    <MainComp />
    <Watcher />
  </div>
</template>

<script>
import NonProps from './components/nonProps/NonProps.vue'
import CustomEvent from './components/customEvent/CustomEvent.vue'
import Slot from './components/slots/Slot.vue'
import CompA from './components/ProvideInject/CompA.vue'
import MainComp from './components/DynamicComponents/MainComp.vue'
import Watcher from './components/watchers/watcher.vue'

export default {
  name: 'App',
  components: {
    NonProps,
    CustomEvent,
    Slot,
    CompA,
    MainComp,
    Watcher
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
