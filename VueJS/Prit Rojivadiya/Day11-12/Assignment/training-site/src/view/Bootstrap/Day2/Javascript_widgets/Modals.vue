<template>
  <!-- modal trigger -->
  <button class="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Launch Modal
  </button>

  <!-- modal -->
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal Title</h5>
          <button class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          expedita impedit et reprehenderit illo nemo quis. Exercitationem
          debitis voluptates, aut, molestiae ipsa eligendi consequuntur dolor
          quia hic iusto facere laboriosam?
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <br /><br />

  <!-- login modal trigger -->
  <button class="btn btn-success" data-toggle="modal" data-target="#loginModal">
    Login Modal
  </button>

  <!-- login modal -->
  <div class="modal" id="loginModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Login</h5>
          <button class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Username"
              />
            </div>
            <div class="form-group">
              <label for="pwd">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Enter Password"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button class="btn btn-success">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modals",
};
</script>

<style></style>
