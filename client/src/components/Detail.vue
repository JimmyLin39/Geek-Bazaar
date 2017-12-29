<template>
<div class="container">
  <div class="row">
    <div class="col-md-4">
      <img v-bind:src="inventory[0].image_url" alt="Product image" width="300" height="300">
      <h1>{{ inventory[0].name }}</h1>
      <h3>${{ inventory[0].price }}</h3>
      <strong>Notes:</strong> {{ inventory[0].description }}<br>
      <strong>Condition:</strong> {{ inventory[0].condition }}<br>
      <strong>Seller:</strong> {{ inventory[0].full_name }}<br>
    </div>
    <div class="col-md-8">
    </div>
  </div>
</div>
</template>

<script>
import InventoryService from '@/services/InventoryService'
export default {
  props: ['id'],
  data() {
    return {
      inventory: [],
    }
  },
  created: function() {
    this.retrieveInventory(this.inventory, this.id);
  },
  methods: {
    // talk to back end server to retrieve all inventories
    retrieveInventory: async (inventory, id) => {
      const response = await InventoryService.retrieveInventory(id);
      console.log('response:', response.data.resources);
      inventory.push(response.data.resources[0]);
      // response.data.resources.forEach((element) => {
      //   inventory.push(element);
      // })
      console.log(inventory);
    }
  }
}
</script>

<style lang="scss">
.row {
  margin-top: 2.5%; //!important;
}
</style>

