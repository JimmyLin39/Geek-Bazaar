<template>
  <form>
    <div class="form-group" v-bind:class="[{ 'has-danger': formErrors.name }]">
      <label for="inventoryName">inventory name</label>
      <input type="text" v-model="inventory.name" class="form-control" id="inventoryName" maxlength="32" placeholder="Enter inventory name">
      <div v-if="formErrors.name" class="form-control-feedback">{{formErrors.name}}</div>
    </div>

    <div class="form-group">
      <label for="inventoryDescription">inventory description <small class="text-muted">(optional)</small></label>
      <textarea class="form-control" v-model="inventory.description" id="inventoryDescription" rows="3" maxlength="128" placeholder="Enter description"></textarea>
    </div>

    <div class="form-group" v-bind:class="[{ 'has-danger': formErrors.price }]">
      <label for="price">Price</label>
      <input type="number" v-model="inventory.price" class="form-control" id="price" placeholder="Enter Price" number>
      <div v-if="formErrors.price" class="form-control-feedback">{{formErrors.price}}</div>
    </div>

    <div class="form-group">
      <label for="file" class="d-block">inventory image <small class="text-muted">(optional)</small></label>
      <label class="custom-file">
        <input type="file" name="inventory_image" @change="onImageChanged" accept=".png, .jpg" id="file" class="custom-file-input">
        <span class="custom-file-control"></span>
      </label>
      <small class="form-text text-muted">{{selectedFileName}}</small>
    </div>

    <button type="submit" v-on:click.prevent="onSubmit" class="btn btn-primary">
      {{inventory.id ? 'Update' : 'Add'}} inventory
    </button>
    <button type="submit" v-if="inventory.id" v-on:click.prevent="onCancel" class="btn btn-secondary">Cancel</button>
  </form>
</template>

<script>
export default {
  props: ['inventory'],
  data () {
    return {
      formErrors: {},
      selectedFile: undefined,
      selectedFileName: ''
    }
  },
  watch: {
    'inventory.id' () {
      this.formErrors = {}
      this.selectedFile = undefined
      this.selectedFileName = this.inventory.imageName
    }
  },
  methods: {
    validateForm () {
      const errors = {}

      if (!this.inventory.name) {
        errors.name = 'Name is required'
      }

      if (!this.inventory.price) {
        errors.price = 'Price is required'
      }

      this.formErrors = errors

      return Object.keys(errors).length === 0
    },
    onCancel () {
      this.formErrors = {}

      this.$emit('cancel')
    },
    onImageChanged (event) {
      this.selectedFile = event.target.files[0]
      this.selectedFileName = event.target.files[0].name
    },
    onSubmit () {
      if (this.validateForm()) {
        this.$emit('submit', this.inventory, this.selectedFile)
      }
    }
  }
}
</script>

<style scoped>
  .form-group {
    margin: auto 15% !important;
  }
  .btn {
    margin-left: 15%; 
  }
</style>
