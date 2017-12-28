<template>
<div>
  <h1>hello {{ id }}</h1>

  <img v-bind:src="inventory[0].image_url" alt="Product image">
  <h1>Name: {{ inventory[0].name }}</h1>
  price: {{ inventory[0].price }}
  Description: {{ inventory[0].description }}
  Condition: {{ inventory[0].condition }}
  Seller: {{ inventory[0].user_id }}
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
      console.log('response:', response.data.resources[0]);
      inventory.push(response.data.resources[0]);
      // response.data.resources.forEach((element) => {
      //   inventory.push(element);
      // })
      console.log(inventory);
    }
  }
}
</script>
