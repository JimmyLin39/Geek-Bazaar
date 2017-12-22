<template>
  <section>
    <inventories
      :inventories="inventories"
    ></inventories>
    <save-inventory-form
      :inventory="inventoryInForm"
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
        id: null,
        name: '',
        description: '',
        condition: '',
        price: '',
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
      console.log('response resources:', response.data.resources);
      return response.data.resources;

      // console.log(this.inventories);
    },
    onEditClicked (inventories) {
      this.inventoryInForm = { ...inventories }
    },
  }
  
}
</script>
