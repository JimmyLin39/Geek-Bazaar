<template>
  <section>
    <inventories
      :inventories="inventories"
      v-on:edit="onEditClicked"
      v-on:remove="onRemoveClicked"
    ></inventories>
    <save-inventory-form
      :inventory="inventoryInForm"
      v-on:submit="onFormSave"
      v-on:cancel="resetInventoryInForm"
    ></save-inventory-form>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Inventories from './Inventories';
import SaveInventoryForm from './SaveInventoryForm'

const initialData = () => {
  return {
    inventoryInForm: {
      // id: null,
      name: '',
      description: '',
      condition: '',
      price: '',
      // TODO: userId to current userid and product id
      userId: 1,
    }
  }
}

export default {
  components: {
    Inventories,
    SaveInventoryForm,
  },
  data: initialData,
  created () {
    this.$store.dispatch('fetchInventories');
  },
  computed: mapGetters({
    inventories: 'getInventories'
  }),
  methods: {
    ...mapActions([
      'saveInventory',
      'deleteInventory'
    ]),
    onFormSave (inventory, image) {
      this.saveInventory({ inventory, image }).then(() => this.resetInventoryInForm())
    },
    resetInventoryInForm () {
      this.inventoryInForm = initialData().inventoryInForm
    },
    onEditClicked (inventory) {
      this.inventoryInForm = { ...inventory }
    },
    onRemoveClicked (inventoryId) {
      this.deleteInventory(inventoryId).then(() => {
        if (inventoryId === this.inventoryInForm.id) {
          this.resetInventoryInForm()
        }
      })
    }
  }
  
}
</script>
