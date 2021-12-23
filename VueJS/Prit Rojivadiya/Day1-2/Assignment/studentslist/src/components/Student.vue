<template>
  <div class="card m-5">
    <div class="card-body">
      <h1>{{ item.id }}.</h1>
      <div class="row">
        <h3 class="text-primary">Student Details</h3>
        <div class="col-12 col-sm-6 align-self-center">
          <p><b>First Name: </b>{{ item.fname }}</p>
          <p><b>Last Name: </b>{{ item.lname }}</p>
          <p><b>DOB: </b>{{ item.dob }}</p>
        </div>
        <div class="col-12 col-sm-6 align-self-center text-center">
            <p><b>Student Photo</b></p>
              <img :src="item.image" class="img-fluid rounded-circle img-thumbnail" alt="stuImg" />
        </div>
      </div>
      <hr />
      <div class="row">
        <h3 class="text-primary">College Details</h3>
        <div class="col-12 col-sm-6 align-self-center">
            <p><b>Name: </b>{{item.collegeName}}</p>
            <p><b>Address: </b>{{item.collegeAddress}}</p>
        </div>
        <div class="col-12 col-sm-6 align-self-center text-center">
            <p><b>College Logo</b></p>
            <img :src="item.clgLogo" class="img-fluid rounded-circle img-thumbnail" alt="clgLogo">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Student",
  props: {
    item: Object,
  }
};
</script>

<style scoped>
  .card{
    box-shadow: 5px 5px 20px black;
  }

  img{
    width: 150px;
    height: 150px;
  }
</style>
