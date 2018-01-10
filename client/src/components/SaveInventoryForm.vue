<template>
  <form>
    <h4>Sell your game here!</h4>
    <div class="form-group" v-bind:class="[{ 'has-danger': formErrors.name }]">
      <label for="inventoryName"></label>
      <input type="text" v-model="inventory.name" class="form-control" id="inventoryName" maxlength="32" placeholder="Enter your game name">
      <div v-if="formErrors.name" class="form-control-feedback">{{formErrors.name}}</div>
    </div>

    <div class="form-group">
      <label for="inventoryDescription"></label>
      <textarea class="form-control" v-model="inventory.description" id="inventoryDescription" rows="3" maxlength="128" placeholder="Enter your notes (optional)"></textarea>
    </div>

    <div class="form-group" v-bind:class="[{ 'has-danger': formErrors.price }]">
      <label for="price"></label>
      <input type="number" v-model="inventory.price" class="form-control" id="price" placeholder="Enter Price">
      <div v-if="formErrors.price" class="form-control-feedback">{{formErrors.price}}</div>
    </div>

    <div class="form-group" v-bind:class="[{ 'has-danger': formErrors.condition }]">
      <label for="condition"></label>
      <input type="text" v-model="inventory.condition" class="form-control" id="condition" placeholder="Enter condition">
      <div v-if="formErrors.condition" class="form-control-feedback">{{formErrors.condition}}</div>
    </div>

    <div class="form-group">
      <label for="file" class="d-block">inventory image <small class="text-muted">(optional)</small></label>
      <label class="btn btn-info">
        Choose file...<input type="file" name="inventory_image" @change="onImageChanged" accept=".png, .jpg" id="file" class="custom-file-input" hidden>
      </label>
      <small class="form-text text-muted">{{selectedFileName}}</small>
    </div>

    <button type="submit" v-on:click.prevent="onSubmit" class="btn btn-primary">
      {{inventory.id ? 'Update' : 'Add'}} inventory
    </button>
    <button type="submit" v-if="inventory.id" v-on:click.prevent="onCancel" class="btn btn-outline-secondary">Cancel</button>

    <div class="progress" style="height: 10px;">
        <div class="progress-bar" v-bind:style="width"></div>
    </div>
  </form>
</template>

<script>
export default {
  props: ['inventory'],
  data () {
    return {
      formErrors: {},
      selectedFile: undefined,
      selectedFileName: '',
      width: '',
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

      if (!this.inventory.condition) {
        errors.condition = 'Condition is required'
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
        // set the progress bar
        let timer = 1;
        const id = setInterval(() => {
          if (timer >= 100) {
              clearInterval(id);
          } else {
            timer++;
            this.width = `width:${timer}%`
          }
        }, 10)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn-primary {
    color: #ffffff;
    background-color: #E37222;
    border-color: #E37222;
  }
  .btn-primary:hover {
    background-color: #E37222;
    border-color: #E37222;
    opacity: 0.8;
  }
  .form-group {
    margin: auto 15% !important;
  }
  .btn-primary, h4 {
    margin-left: 15%; 
  }
  .progress {
    margin-top: 1%;
  }
  .form-control-feedback {
    color: #E37222;
  }
</style>
