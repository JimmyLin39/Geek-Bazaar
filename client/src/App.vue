<template>
  <div>
    <header class="app-header">
      <navbar></navbar>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  components: {
    Navbar,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oxygen');
body {
  font-family: 'Oxygen', sans-serif;
}
.container {
  margin-top: 5% !important;
}
</style>
