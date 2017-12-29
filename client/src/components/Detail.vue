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
      <button v-on:click.prevent="bggApi(inventory[0].name)">more on bgg</button>
    </div>
    <div class="col-md-8">
      <h1></h1>
    </div>
  </div>
</div>
</template>

<script>
import InventoryService from '@/services/InventoryService'
import BggApiService from '@/services/BggApiService'
export default {
  props: ['id'],
  data() {
    return {
      inventory: [],
      bgg: {}
    }
  },
  created: function() {
    this.retrieveInventory(this.inventory, this.id);
  },
  beforeDestroy: function() {
    this.bggApi(inventory.name);
  },
  methods: {
    // talk to back end server to retrieve all inventories
    retrieveInventory: async (inventory, id) => {
      const response = await InventoryService.retrieveInventory(id);
      console.log('response:', response.data.resources);
      // return response.data.resources
      inventory.push(response.data.resources[0]);
      // response.data.resources.forEach((element) => {
      //   inventory.push(element);
      // })
      console.log(inventory);
      
    },
    async bggApi(name) {
      console.log(name);
      const response = await BggApiService.searchResult(name);
      console.log('response:', response.data.allResults[0].items.item);
      this.bgg = response.data.allResults[0].items.item;
      console.log(this.bgg);
    }
  }
}
</script>

<style lang="scss">
.row {
  margin-top: 2.5%; //!important;
}
</style>

