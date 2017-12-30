<template>
  <div>
    <head>
      <title>Geek Bazaar</title>
    </head>
    <header class="app-header">
      <navbar></navbar>
      <!-- <Pagefooter></Pagefooter> -->
    </header>
    <main class="container">
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
.container {
  margin-left: auto !important;
  margin-right: auto !important;
}
</style>
