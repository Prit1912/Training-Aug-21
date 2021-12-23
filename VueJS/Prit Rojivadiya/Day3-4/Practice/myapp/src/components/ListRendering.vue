<template>
  <!-- simple array iteration -->
  <!-- for array it takes 2 args - value and index -->
  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ index }} - {{ item.message }}
    </li>
  </ul>

  <!-- iterate through object -->
  <!-- for object it takes 3 args - value,key and index -->
  <ul>
    <li v-for="(value, name, index) of myObject" :key="name">
      {{ index }} - {{ name }} - {{ value }}
    </li>
  </ul>

  <!-- Mutation method -->
  <!-- displaying filtered/sorted array -->
  <li v-for="n in evenNumbers" :key="n">{{ n }}</li>

  <ul v-for="(numbers,index) in sets" :key="index">
    <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
  </ul>

  <!-- v-for with range -->
  <span v-for="n in 10" :key="n">{{ n }} </span>

  <!-- v-for with template -->
  <ul>
  <template v-for="item in items" :key="item.message">
    <li>{{ item.message }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>

</template>

<script>
export default {
  name: "ListRendering",
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
      myObject: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
      numbers: [1, 2, 3, 4, 5],
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
    };
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter((n) => n % 2 == 0);
    },
  },
  methods: {
    even(numbers) {
      return numbers.filter((number) => number % 2 === 0);
    },
  },
};
</script>

<style scoped></style>
