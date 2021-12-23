<template>
  <h1>Login Form</h1>
  <form action="">
    <label for="">Username</label>
    <input type="text" name="Username" placeholder="Enter Username" />
    <br /><br />
    <label for="">Password</label>
    <input
      type="password"
      name="password"
      placeholder="Enter Password"
      minlength="8"
    />
    <br /><br />
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  name: "Practice3",
};
</script>

<style scoped></style>
