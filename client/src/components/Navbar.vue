<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light" 
    style="background-color: #e3f2fd;">
    <button class="navbar-toggler" type="button" data-toggle="collapse" 
      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <router-link class="navbar-brand" to='/'>Geek Bazaar</router-link>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to='/login'>Login</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#"
            id="dropdown01" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">Users</a>
          <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" href="#">Buy</a>
            <a class="dropdown-item" href="#">Sell</a>
            <router-link to="/users" class="dropdown-item">Profile</router-link>
          </div>
        </li>
        <li class='nav-item'>
          <router-link class="nav-link" to='/orders'>Order</router-link>
        </li>
        <li class='nav-item'>
          <router-link class="nav-link" to='/sales'>Sales</router-link>
        </li>
        <li class='nav-item'>
          <router-link class="nav-link" to='/logout'>Logout</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" 
          v-model="search">
        <router-link to="/search" tag="button" class="btn btn-outline-info my-2 my-sm-0" 
          @click.native="searchInventory(search)">Search</router-link>
      </form>
    </div>
    <div class="nav navbar-nav pull-sm-right">
      <div class="nav-item dropdown dropdown-cart">
        <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" 
          aria-haspopup="true" aria-expanded="false">
          <span v-if="totalItems" class="badge badge-pill badge-danger">{{totalItems}}</span>
          <font-awesome-icon icon="shopping-cart" />
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <shopping-cart></shopping-cart>
        </div>
      </div>
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
.dropdown-cart{
  margin-left: 10px;
}
</style>
