<template>
  <!-- using v-model -->
  <input v-model="message" placeholder="edit me" />
  <p>Message is: {{ message }}</p>

  <!-- Multiline text -->
  <span>Multiline message is:</span>
  <p style="white-space: pre-line">{{ msg }}</p>
  <br />
  <textarea v-model="msg" placeholder="add multiple lines"></textarea>

  <!-- checkbox -->
  <br />
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>

  <div>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>&nbsp;
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>&nbsp;
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>&nbsp;
    <br />
    <span>Checked names: {{ checkedNames }}</span>
  </div>

  <!-- radio buttons -->
  <div id="v-model-radiobutton">
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <br />
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <br />
    <span>Picked: {{ picked }}</span>
  </div>

  <!-- select -->
  <br />
  <div id="v-model-select" class="demo">
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>

  <!-- multiple selected -->
  <br>
  <select v-model="mul_selected" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br />
  <span>Selected: {{ mul_selected }}</span>

  <!-- form -->
  <h1 class="text-danger">Person Detail</h1>
  <form @submit.prevent="submitData" >
      firstName: <input type="text" v-model="person.fname" ><br><br>
      lastName: <input type="text" v-model="person.lname" ><br><br>
      address: <br>
      &emsp;flatNo: <input type="number" v-model="person.address.flat" ><br><br>
      &emsp;city: <input type="text" v-model="person.address.city"><br><br>
      &emsp;state: <input type="text" v-model="person.address.state"><br><br>
      skills: <br>
      <div v-for="(skill, index) in person.skills" :key="index">
          &emsp;<input type="text" v-model="person.skills[index]">
      </div>
      <br>
      <button class="btn btn-success">Submit</button>
  </form>


</template>

<script>
export default {
  name: "Forms",
  data() {
    return {
      message: "",
      msg: "",
      checked: "",
      checkedNames: [],
      picked: "",
      selected: "",
      mul_selected: [],
      person: {
          fname: "",
          lname: "",
          address: {
              flat: "",
              city: "",
              state: ""
          },
          skills: ["","",""]
      }
    };
  },
  methods:{
      submitData(){
          console.log(this.person)
      }
  }
};
</script>

<style scoped></style>
