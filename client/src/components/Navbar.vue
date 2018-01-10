<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <router-link class="navbar-brand" to='/'>Geek Bazaar</router-link>
      <ul v-if="!cookies" class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link  class="nav-link" to='/login'>Login</router-link>
        </li>
        <li class="nav-item">
          <router-link  class="nav-link" to='/register'>Register</router-link>
        </li>
      </ul>
      <ul v-else class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to='/index'>Explore</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to='/inventories'>Inventories</router-link>
        </li>
        <li class='nav-item'>
          <router-link class="nav-link" to='/orders'>Orders</router-link>
        </li>
        <li class='nav-item'>
          <router-link class="nav-link" to="/sales">Sales</router-link>
        </li>
        <li class='nav-item'>
          <router-link class="nav-link" to="/messages">Messages</router-link>
        </li>
      </ul>
    </div>
    <div v-if="cookies" class="nav navbar-nav pull-sm-right">
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" v-model="search">
        <router-link to="/search" tag="button" class="btn btn-outline-info my-2 my-sm-0" @click.native="searchInventory(search)">Search</router-link>
      </form>
      <div class="nav-item dropdown dropdown-profile">
        <button class="btn btn-profile dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <font-awesome-icon icon="user" />
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <router-link class="dropdown-item nav-link" to="/" @click.native="logout()">Logout</router-link>
        </div>
      </div>
      <div class="nav-item dropdown dropdown-cart">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span v-if="totalItems" class="badge badge-pill">{{totalItems}}</span>
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
import ShoppingCart from './ShoppingCart'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { mapGetters } from 'vuex'

export default {
  data(){
    return {
      search: null,
    }
  },
  components: {
    ShoppingCart,
    FontAwesomeIcon,
  },
  computed: {
    totalItems () {
      return this.inCart.reduce((sum, p) => sum + p.quantity, 0)
    },
    ...mapGetters({
      inCart: 'getCartItems',
      cookies: 'getCookies'
    })
  },
  methods: {
    searchInventory(search) {
      this.$store.dispatch('searchInventory', search)
    },
    logout() {
      this.$store.dispatch('resetCart');
      this.$store.dispatch('logout');
    },
  }
}
</script>

<style>
.navbar {
  background-color: white;
}

.btn-primary {
  color: #ffffff !important;
  background-color: #E37222 !important;
  border-color: #E37222 !important;
}
.btn-primary:hover {
  background-color: #E37222 !important;
  border-color: #E37222 !important;
  opacity: 0.8 !important;
}
.show > .btn-primary.dropdown-toggle {
  background-color: #E37222 !important;
  border-color: #E37222 !important;
}

.badge-pill {
  color: #E37222 !important;
  background-color: #ffffff !important;
}

.dropdown-profile {
  margin-left: 10px;
}

.btn-profile {
  color: #ffffff;
  background-color: #33A2AA;
  border-color: #33A2AA;
}
.btn-profile:hover {
  background-color: #33A2AA;
  border-color: #33A2AA;
  opacity: 0.8;
}
.show > .btn-profile.dropdown-toggle {
  background-color: #33A2AA;
  border-color: #33A2AA;
}

.dropdown-cart {
  margin-left: 10px;
}
</style>
