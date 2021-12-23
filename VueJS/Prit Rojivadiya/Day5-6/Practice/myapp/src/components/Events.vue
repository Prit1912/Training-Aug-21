<template>
  <!-- onclick method -->
  <div id="basic-event">
    <button class="btn btn-success" @click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>

  <!-- specifying method name -->
  <div id="event-with-method">
    <button class="btn btn-warning" @click="greet">Greet</button>
  </div>

  <!-- methods in inline handlers -->
  <div id="inline-handler" class="my-2">
    <button class="btn btn-info" @click="say('hi')">Say hi</button>
    <button class="btn btn-info" @click="say('what')">Say what</button>
  </div>

  <!-- multiple event handlers -->
  <button @click="one($event), two($event)">Submit</button>

  <!-- event modifiers -->
  <br>
  <button class="btn btn-info" @click.once="doThis">click</button>
  <form @submit.prevent >
      <input type="text">
      <button class="btn btn-primary" type="submit">Submit</button>
  </form>

  <!-- key modifiers -->
  <div @click.ctrl="doSomething">ctrl + click here to display alert</div>
  alt + Enter : <input @keyup.alt.enter="clear" />

</template>

<script>

export default {
  name: "Events",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    greet(event) {
      if (event) {
        alert(event.target.tagName);
      }
    },
    say(message) {
      alert(message);
    },
    one(event){
        console.log(event);
    },
    two(event){
        console.log(event);
    },
    doThis(){
        alert('button will work 1 time only')
    },
    doSomething(){
        alert('ctrl + click')
    },
    clear(){
        alert('alt + enter on input field ')
    }
  },
};
</script>

<style></style>
