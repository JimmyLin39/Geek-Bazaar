<template>
  <table class="table table-responsive table-hover inventory-table">
    <thead>
      <tr>
        <th class="inventory-image-col"></th>
        <th class="inventory-name-col">Name</th>
        <th class="inventory-desc-col">Notes</th>
        <th class="inventory-condition-col">Condition</th>
        <th class="inventory-price-col">Price</th>
        <th class="inventory-delete-col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="inventory in inventories" v-if="inventory.user_id === 1 " track-by="id" v-on:click.prevent="onEdit(inventory)">
        <td>
          <img v-bind:src="inventory.image_url" v-bind:alt="inventory.image_name" class="inventory-image">
        </td>
        <td>{{inventory.name}}</td>
        <td class="inventory-desc-col">{{inventory.description}}</td>
        <td>{{inventory.condition}}</td>
        <td>${{inventory.price}}</td>
        <td><a href="#" v-on:click.prevent.stop="onRemove(inventory.id)">remove</a></td>
      </tr>
      <tr v-if="!inventories">
        <td colspan="5" class="p-y-3 text-xs-center">
          <strong>You should add some games!</strong>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['inventories'],
  methods: {
    onEdit (inventory) {
      this.$emit('edit', inventory)
    },
    onRemove (inventoryId) {
      if (confirm('Are you sure you want to remove?') == true) {
        this.$emit('remove', inventoryId)
      }
    }
  }
}
</script>
