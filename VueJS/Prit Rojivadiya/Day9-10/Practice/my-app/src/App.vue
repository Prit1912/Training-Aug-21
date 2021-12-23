<template>
  <parent />
  <template-ref />
  <click-counter />
  <hover-conter />
  <ref />
  <reactive />
  <v-model />
  <watchers />
  <comp-a />
  <practice-1 />
</template>

<script>
import TemplateRef from './components/TemplateRef.vue'
import ClickCounter from './components/ClickCounter.vue'
import HoverConter from './components/HoverCounter.vue'
import Ref from './components/Ref.vue'
import Reactive from './components/Reactive.vue'
import VModel from './components/VModel.vue'
import Watchers from './components/Watchers.vue'
import CompA from './components/ProvideInject/CompA.vue'
import Practice1 from './components/PropsAndEvents/Practice1.vue'
import Parent from './components/lifeCycle/Parent.vue'

export default {
  name: 'App',
  components: {
    TemplateRef,
    ClickCounter,
    HoverConter,
    Ref,
    Reactive,
    VModel,
    Watchers,
    CompA,
    Practice1,
    Parent
  }
}
</script>
,
    Practice1
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
