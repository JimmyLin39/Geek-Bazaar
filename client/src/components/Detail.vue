<template>
<div class="container">
  <div class="row">
    <div class="col-md-4">
      <img v-bind:src="inventory[0].image_url" alt="Product image" width="300" height="300">
      <h1>{{ inventory[0].name }}</h1>
      <h3>${{ inventory[0].price }}</h3>
      <strong>Notes:</strong> {{ inventory[0].description }}<br>
      <strong>Condition:</strong> {{ inventory[0].condition }}<br>
      <strong>Seller:</strong> {{ inventory[0].full_name }}<br>
      <br>
      <button type="button" class="btn btn-info" v-on:click.prevent="bggApi(inventory[0].name)">See More Details from boardgamegeek.com</button>
    </div>
    <div class="col-md-8" v-if="bgg.description">
      <img v-bind:src="bgg.image" alt="Product image" width="300" height="300">
      <p><span v-html="bgg.description"></span></p>
      <strong>Max Players:</strong> {{ bgg.maxplayers.value }} people <br>
      <strong>Min Players:</strong> {{ bgg.minplayers.value }} people<br>
      <strong>Min Play Age:</strong> {{ bgg.minage.value }}
    </div>
  </div>

  <div class="progress" style="height: 2px;">
      <div class="progress-bar bg-info" v-bind:style="width"></div>
  </div>
</div>
</template>

<script>
import InventoryService from '@/services/InventoryService'
import BggApiService from '@/services/BggApiService'
export default {
  props: ['id'],
  data() {
    return {
      inventory: [],
      bgg: {},
      width: '',
    }
  },
  created: function() {
    this.retrieveInventory(this.inventory, this.id);
  },
  methods: {
    // talk to back end server to retrieve all inventories
    retrieveInventory: async (inventory, id) => {
      const response = await InventoryService.retrieveInventory(id);
      console.log('response:', response.data.resources);
      inventory.push(response.data.resources[0]);
      // response.data.resources.forEach((element) => {
      //   inventory.push(element);
      // })
      console.log(inventory);
      
    },
    async bggApi(name) {
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
      const response = await BggApiService.searchResult(name);
      console.log('response:', response.data.allResults[0].items.item);
      this.bgg = response.data.allResults[0].items.item;
      console.log(this.bgg);
    }
  }
}
</script>

<style lang="scss">
.row {
  margin-top: 2.5%; //!important;
}
</style>

