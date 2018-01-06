<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
            aria-expanded="false">Profile</a>
          <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" href="#">Buy</a>
            <a class="dropdown-item" href="#">Sell</a>
            <a class="dropdown-item" href="#"></a>
          </div>
        </li>
        <li class='nav-item'>
          <router-link class="nav-link" to='/orders'>Order</router-link>
        </li>
        <li class='nav-item'>
          <router-link class="nav-link" to="/sales">Sales</router-link>
        </li>
        <li class='nav-item'>
          <router-link class="nav-link" to="/" @click.native="logout()">Logout</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" v-model="search">
        <router-link to="/search" tag="button" class="btn btn-outline-info my-2 my-sm-0" @click.native="searchInventory(search)">Search</router-link>
      </form>
    </div>
    <div class="nav navbar-nav pull-sm-right">
      <div class="nav-item dropdown dropdown-cart">
        <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
import ShoppingCart from './ShoppingCart'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { mapGetters } from 'vuex'
import Login from './Login'

export default {
  data(){
    return {
      search: null,
      cookies: '',
    }
  },
  components: {
    ShoppingCart,
    FontAwesomeIcon,
    Login
  },
  computed: {
    totalItems () {
      return this.inCart.reduce((sum, p) => sum + p.quantity, 0)
    },
    ...mapGetters({
      inCart: 'getCartItems'
    })
  },
  methods: {
    searchInventory(search) {
      console.log('search', search);
      this.$store.dispatch('searchInventory', search)
    },
    logout() {
      this.$store.dispatch('resetCart');
      this.$cookie.delete('userId')
    },
    getUserId() {
      const userId = this.$cookie.get('userId')
      console.log(userId);
    },
    hasCookies() {
      const userId = this.$cookie.get('userId')
      if (!userId) {
        console.log('You need to be logged in to make a sale!');
        // TODO: Show message above in the browser

      } else {
        console.log('Proceed to the sales!');
        // TODO: Redirect link to the sales vue

      }
    }
  }
}
</script>

<style>
.dropdown-cart{
  margin-left: 10px;
}
</style>
