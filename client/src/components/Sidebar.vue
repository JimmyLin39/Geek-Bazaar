<template>
  <div>

    <head>

      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="description" content="">
      <meta name="author" content="">

      <title>User Profile</title>

      <!-- Bootstrap core CSS -->
      <!-- <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"> -->

      <!-- Custom styles for this template -->
      <!-- <link href="css/simple-sidebar.css" rel="stylesheet"> -->

    </head>

    <main>

      <div id="wrapper">

        <!-- Sidebar -->
        <div id="sidebar-wrapper">
          <div class='side-bar-welcome-msg'>
            <p>Welcome User!<br/>
              Update your profile</p>
          </div>
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">Full Name</a>
                </li>
                <li>
                    <a href="#">Display Name</a>
                </li>
                <li>
                    <a href="#">Email</a>
                </li>
                <li>
                    <a href="#">Password</a>
                </li>
            </ul>
        </div>
        <!-- /#sidebar-wrapper -->
        <!-- Page Content -->
        <!-- <div id="page-content-wrapper">
          <div class="container-fluid">
            <h1>Simple Sidebar</h1>
            <p>
              This template has a responsive menu toggling system.
              The menu will appear collapsed on smaller screens, and will
              appear non-collapsed on larger screens. When toggled using the
              button below, the menu will appear/disappear. On small screens,
              the page content will be pushed off canvas.
            </p>
            <p>
              Make sure to keep all page content within the
              <code>#page-content-wrapper</code>.</p>
            <a href="#menu-toggle" class="btn btn-secondary"
              id="menu-toggle">Toggle Menu</a>
          </div>
        </div> -->
        <!-- /#page-content-wrapper -->
        <!-- /#wrapper -->

      </div>

    </main>

  </div>

</template>

<script>
export default {

}
</script>

<style>
#sidebar-wrapper {
  padding-top: 60px;
  z-index: 1000;
  width: 220px;
  height: 100%;
  padding-left: 20px;
  color: white;
  border: 1px solid #292b2c!important;
  background-color: #292b2c!important;
}
.sidebar-nav ul, li, a {
  list-style-type: none;
  height: 100%;
  margin: 5px 0;
  color: white;
}
.side-bar-welcome-msg {
  padding-left: 30px;
}

</style>
