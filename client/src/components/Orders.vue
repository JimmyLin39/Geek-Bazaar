<template>
  <div class="orders">
  <h1>My Orders:</h1>
    <table class="table table-responsive table-hover inventory-table">
      <thead>
        <tr>
          <th></th>
          <th>Order Id</th>
          <th>Name</th>
          <th>Seller</th>
          <th>Price</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" track-by="id">
          <td>
            <img v-bind:src="order.image_url" v-bind:alt="order.image_name" class="inventory-image">
          </td>
          <td>{{order.id}}</td>
          <td>{{order.name}}</td>
          <td>{{order.seller}}</td>
          <td>${{order.total_cents}}</td>
          <td>{{order.status}}</td>
          <td><a href="#" v-on:click.prevent.stop="onRemove(inventory.id)">Cancel</a></td>
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
import OrderService from '@/services/OrderService';

export default {
  data() {
    return {
      orders: []
    }
  },
  created: function() {
    this.retrieveOrders(this.orders);
    console.log(this.orders);
    
  },
  methods: {
    retrieveOrders: async (orders) => {
      const response = await OrderService.retrieveOrders();
      // console.log('orders', response.data.resources);
      response.data.resources.forEach((element) => {
        orders.push(element);
      })
    } 
  }
  

}
</script>

