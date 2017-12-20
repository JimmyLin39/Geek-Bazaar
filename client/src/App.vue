<template>
  <div>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="description" content="">
      <meta name="author" content="">
      <link rel="icon" href="../../favicon.ico">

      <title>Geek Bazaar</title>

      <!-- Bootstrap core CSS -->
      <link href="../bootstrap-4.0.0-alpha.6/dist/css/bootstrap.min.css" rel="stylesheet">

      <!-- Custom styles for this template -->
      <link href="../bootstrap-4.0.0-alpha.6/docs/examples/jumbotron/jumbotron.css" rel="stylesheet">
    </head>
    <header class=“app-header”>
      <Navbar></Navbar>     
      <!-- <Pagefooter></Pagefooter> -->
    </header>
    <main class=“container”>      
      <router-view></router-view>
    </main>
    
  </div>
</template>

<script>

import Navbar from './components/Navbar';
// import Titlebar from './components/Titlebar';
// import Register from './components/Register';

// import Pagefooter from './components/Pagefooter';

export default {
  components: {
    Navbar,
    // Register,
    // Pagefooter
  },
}

</script>


<style>

</style>
