<template>
  <div id="orders">
  <h1>My Orders:</h1>
    <table class="table orders table-responsive table-hover inventory-table">
      <thead>
        <tr>
          <th></th>
          <th>Order Id</th>
          <th>Order Date</th>
          <th>Name</th>
          <th>Seller</th>
          <th>Price</th>
          <th>Status</th>
          <th>Messages</th>
          <th>Cancel</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" track-by="id">
          <td>
            <img v-bind:src="order.image_url" v-bind:alt="order.image_name" class="inventory-image">
          </td>
          <td>{{order.id}}</td>
          <td>{{order.created_at}}</td>
          <td>{{order.name}}</td>
          <td>{{order.seller}}</td>
          <td>${{order.total_cents}}</td>
          <td>{{order.status}}</td>
          <td><router-link :to="{ name: 'MessageDetail', params: { id: order.seller_id }}">Message seller</router-link></td>
          <td><a href="#" v-if="order.status === 'waiting'" v-on:click.prevent.stop="cancelOrder(order.id)">Cancel</a></td>
        </tr>
        <tr v-if="!orders">
          <td colspan="5" class="p-y-3 text-xs-center">
            <strong>You don't have any order!</strong>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created () {
    this.$store.dispatch('fetchOrders');
  },
  computed: {
    ...mapGetters({
      orders: 'getOrders'
    })
  },
  methods: {
    cancelOrder(orderId) {
      this.$store.dispatch('cancelOrder', orderId)
    }
  },
}
</script>

<style>
.orders {
  margin-left: 10% !important;
}
</style>

