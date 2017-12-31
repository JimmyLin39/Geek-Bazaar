<template>
  <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#"></a>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            <router-link to='/'>Home</router-link>
            <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to='/login'>Login</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#"></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="http://example.com"
            id="dropdown01" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">Profile</a>
          <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" href="#">Buy</a>
            <a class="dropdown-item" href="#">Sell</a>
            <a class="dropdown-item" href="#"></a>
          </div>
        </li>
        <li class='nav-item'>
          <a class="nav-link" href="#" @click='logOut'>
            <router-link to='/'>Logout</router-link>
          </a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'
import Vue from 'vue'
import VueCookie from 'vue-cookie'
Vue.use(VueCookie)

export default {
  name: 'app',
  methods: {
    async logOut() {
      const response = await AuthenticationService.logout({
        userCookies: this.$cookies.get('newUser')
      })
      if (response.data.logout === true) {
        this.$cookies.remove(userCookies)
      }
    }
  }
};
</script>

<style>

</style>
