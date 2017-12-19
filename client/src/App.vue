<template>
  <div>
    <header class=“app-header”>
      <Navbar></Navbar>
    </header>
    <main class=“container”>
      <!-- <router-view></router-view> -->
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  components: {
    Navbar,
  },

//  created () {
//     this.$store.dispatch('fetchProducts')
//   }
}
</script>

<style>
</style>
