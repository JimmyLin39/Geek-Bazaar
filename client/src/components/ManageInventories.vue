<template>
  <section>
    <!-- <save-product-form
      :product="productInForm"
      v-on:submit="onFormSave"
      v-on:cancel="resetProductInForm"
    ></save-product-form> -->
    <inventories
      :inventories="inventories"
      v-on:edit="onEditClicked"
      v-on:remove="onRemoveClicked"
    ></inventories>
  </section>
</template>

<script>
import Inventories from './Inventories';
import InventoryService from '@/services/InventoryService'

export default {
  components: {
    Inventories,
  },
  data() {
    return {
      inventories: null,
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
    }
  }
  
}
</script>
