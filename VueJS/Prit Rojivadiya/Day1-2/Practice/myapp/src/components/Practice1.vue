<template>
  <h1>Hello</h1>

    {{msg}}

    <br>

  <!-- binding text -->
  {{ name }}

  <!-- simple expression -->
  {{ 1 + 2 }}
  <br />

  <!-- use mounted method -->
  {{ counter }} <br>

  <!-- bind attribute -->
  <div v-bind:class="message">
      hi
  </div>

  <!-- handling user input -->
  <p>{{msg1}}</p>
  <button v-on:click="reverseMsg" class="btn btn-success">Reverse Message</button>

  <p>{{inputText}}</p>
  <input type="text" v-model="inputText">


  <!-- conditions and loops -->
  <br>
  <span v-if="seen">Now you can see</span>
  <ol>
    <li v-for="(todo,index) in todos" v-bind:key="index">
      {{ todo.text }}
    </li>
  </ol>


  <div v-if="currHour>5 && currHour<12">
      <h3>Good morning</h3>
  </div>
    <div v-if="currHour>=12&& currHour<17">
      <h3>Good Afternoon</h3>
  </div>
  <div v-if="currHour>=17 && currHour<=24">
      <h3>Good Evening</h3>
  </div>

</template>

<script>
export default {
  name: "Practice1",
  props: {
    msg: String,
  },
  data() {
    return {
      name: "Prit Rojivadiya",
      counter: 0,
      message: 'messages',
      msg1: 'This message will get reversed',
      inputText: 'This is input text',
      seen: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
      currHour: 11
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  },
  methods:{
      reverseMsg(){
          this.msg1 = this.msg1.split('').reverse().join('')
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.messages{
    color: blue;
}
</style>
