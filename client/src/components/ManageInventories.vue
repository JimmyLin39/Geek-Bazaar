<template>
  <section>
    <inventories
      :inventories="inventories"
    ></inventories>
    <save-inventory-form
      :inventory="inventoryInForm"
      v-on:submit="onFormSave"
    ></save-inventory-form>
  </section>
</template>

<script>
import Inventories from './Inventories';
import SaveInventoryForm from './SaveInventoryForm'
import InventoryService from '@/services/InventoryService'

export default {
  components: {
    Inventories,
    SaveInventoryForm,
  },
  data() {
    return {
      inventories: null,
      inventoryInForm: {
        // id: null,
        name: '',
        description: '',
        condition: '',
        price: '',
        userId: 1,
        productId: 3,
      }
    }
  },
  created: async function() {
    this.inventories = await this.retrieveInventory();
  },
  methods: {
    // talk to back end server to retrieve all inventories
    retrieveInventory: async () => {
      const response = await InventoryService.retrieveInventory();
      // console.log('response resources:', response.data.resources);
      return response.data.resources;

      // console.log(this.inventories);
    },
    onFormSave: async (inventory) => {
      const response = await InventoryService.createInventory(inventory);
      console.log(response.data);
   },
    onEditClicked (inventories) {
      this.inventoryInForm = { ...inventories }
    },
  }
  
}
</script>
