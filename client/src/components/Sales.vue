<template>
  <div id="sales"  class="container">
    <table class="table sales table-responsive table-hover">
      <thead>
        <tr>
          <th></th>
          <th>Order Id</th>
          <th>Order Date</th>
          <th>Name</th>
          <th>Buyer</th>
          <th>Price</th>
          <th>Status</th>
          <th>Messages</th>
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
          <td>{{order.buyer}}</td>
          <td>${{order.total_cents}}</td>
          <td>
            <select :value="order.status" @input="updateStatus(order.id, $event)" class="custom-select">
              <option disabled value="">Please select one</option>
              <option>sending</option>
              <option>waiting</option>
              <option>complete</option>
            </select>
          </td>
          <td><router-link :to="{ name: 'MessageDetail', params: { id: order.buyer_id }}">Message buyer</router-link></td>
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
    this.$store.dispatch('fetchSales');
  },
  computed: {
    ...mapGetters({
      orders: 'getOrders'
    })
  },
  methods: {
    updateStatus(id, e){
      this.$store.dispatch('updateStatus', { id, e })
    },
    getUserCookies() {
      const userCookies = this.$cookie.get('userCookies')
      console.log(userCookies)
    }
  },
}
</script>

<style>
.inventory-image {
  background-color: #fff;
  height: 48px !important;
}

.sales {
  margin-left: 5%;
}
</style>
