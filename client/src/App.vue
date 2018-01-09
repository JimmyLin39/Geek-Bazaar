<template>
  <div>
    <head>
      <title>Geek Bazaar</title>
    </head>
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
.container {
  margin-top: 5% !important;
}
</style>
