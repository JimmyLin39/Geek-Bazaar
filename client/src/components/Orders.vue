<template>
  <div class="orders">
  <h1>My Orders:</h1>
    <table class="table table-responsive table-hover inventory-table">
      <thead>
        <tr>
          <th class="inventory-name-col">Name</th>
          <th class="inventory-price-col">Price</th>
          <th class="inventory-delete-col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" v-if="order.buyer_id === 1 " track-by="id">
          <td>{{inventory.name}}</td>
          <td>${{order.price}}</td>
          <td><a href="#">remove</a></td>
          <!-- v-on:click.prevent.stop="onRemove(inventory.id) -->
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
  data () {
    return {
      orders: []
    }
  },
  computed() {
    return OrderService.retrieveOrders()
      .then((response) => {
        console.log('orders', response.data.resources);
        
      });
  }

}
</script>

