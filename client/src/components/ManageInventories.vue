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
import { mapGetters } from 'vuex'
import Inventories from './Inventories';
import SaveInventoryForm from './SaveInventoryForm'

export default {
  components: {
    Inventories,
    SaveInventoryForm,
  },
  data() {
    return {
      // inventories: null,
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
  created () {
    this.$store.dispatch('fetchProducts');
    // return this.$store.getters.getInventories;
  },
  computed: mapGetters({
    inventories: 'getProducts'
  }),
  methods: {
    onFormSave: async (inventory) => {
      const response = await InventoryService.createInventory(inventory);
      // console.log(response.data);
      // FIXME:
      // const inventoryResponse = await InventoryService.retrieveInventory();
   },
    onEditClicked (inventories) {
      this.inventoryInForm = { ...inventories }
    },
  }
  
}
</script>
