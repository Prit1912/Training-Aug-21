<template>
    Student Data
  <table class="table">
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Marks</th>
      <th>Year of Passing</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Prit</td>
      <td>
        <table class="table">
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
          <tr>
            <td>Web Programming</td>
            <td>AA</td>
          </tr>
          <tr>
            <td>Android</td>
            <td>AB</td>
          </tr>
        </table>
      </td>
      <td>2022</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Raj</td>
      <td>
        <table class="table">
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
          <tr>
            <td>Web Programming</td>
            <td>AB</td>
          </tr>
          <tr>
            <td>Android</td>
            <td>AB</td>
          </tr>
        </table>
      </td>
      <td>2022</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Abhi</td>
      <td>
        <table class="table">
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
          <tr>
            <td>Web Programming</td>
            <td>BB</td>
          </tr>
          <tr>
            <td>Android</td>
            <td>AA</td>
          </tr>
        </table>
      </td>
      <td>2022</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "practice1",
};
</script>

<style scoped>
tr,
td,
th,
table {
  text-align: center;
  border: 1px solid black;
}
</style>
