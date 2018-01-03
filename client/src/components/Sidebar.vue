<template>
  <div>
    <div class='sidebar'>
      <div class='sidebar-title'>
        <h1>Sidebar</h1>
      </div>
    </div>
    <div class='sidebar-contents-main-box'>
      <div class='side-bar-center-box'>
        <p>Main Content</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sidebar {
  display: flex;
  width: 30%;
  border: 1px solid black;
  float: left;
  padding-top: 50px;
}
.sidebar-contents-main-box {
  float: center;
}

</style>
