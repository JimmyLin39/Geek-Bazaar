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
import { mapGetters, mapActions } from 'vuex'
import Inventories from './Inventories';
import SaveInventoryForm from './SaveInventoryForm'

export default {
  components: {
    Inventories,
    SaveInventoryForm,
  },
  data() {
    return {
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
    this.$store.dispatch('fetchInventories');
  },
  computed: mapGetters({
    inventories: 'getInventories'
  }),
  methods: {
    ...mapActions([
      'saveInventory',
      // 'deleteProduct'
    ]),
    onFormSave (inventory, image) {
      this.saveInventory({ inventory, image })//.then(() => this.resetProductInForm())
    },
    onEditClicked (inventories) {
      this.inventoryInForm = { ...inventories }
    },
  }
  
}
</script>
