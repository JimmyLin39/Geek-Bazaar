<template>
  <div>
    <usersProfileNavbar></usersProfileNavbar>
    <usersProfileSidebar></usersProfileSidebar>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';

export default {
  data() {
    return {

    };
  },
  methods: {

  },
  components: {
    usersProfileNavbar: Navbar,
    usersProfileSidebar: Sidebar,
  }
}

</script>

<style>


</style>
