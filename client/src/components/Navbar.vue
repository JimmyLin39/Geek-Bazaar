<template>
  <nav class="navbar navbar-expand-sm navbar-light navbar-jw">
    <a class="navbar-brand" href="#"></a>

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
          <a class="nav-link" href="#">
            <router-link to='/logout'>Logout</router-link>
          </a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>

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
export default {
  components: {
    ShoppingCart,
    FontAwesomeIcon
  },
  computed: {
    totalItems () {
      return this.inCart.reduce((sum, p) => sum + p.quantity, 0)
    },
    ...mapGetters({
      inCart: 'getCartItems'
    })
  }
}
</script>

<style>
.dropdown-cart{
  margin-left: 10px;
}
</style>
