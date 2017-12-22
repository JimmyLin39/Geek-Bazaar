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
        // TODO: userId to current userid and product id
        userId: 1,
        productId: 3,
      }
    }
  },
  created: async function() {
    this.inventories = await this.retrieveInventory();
  },
  computed: {

  },
  methods: {
    // talk to back end server to retrieve all inventories
    async retrieveInventory() {
      const response = await InventoryService.retrieveInventory();
      // console.log('response resources:', response.data.resources);
      return response.data.resources;

      // console.log(this.inventories);
    },
    onFormSave: async (inventory) => {
      const response = await InventoryService.createInventory(inventory);
      console.log(response.data);
      // FIXME:
      const inventoryResponse = await InventoryService.retrieveInventory();
   },
    onEditClicked (inventories) {
      this.inventoryInForm = { ...inventories }
    },
  }
  
}
</script>
