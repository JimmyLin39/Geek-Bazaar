<template>
<div class="container">
  <div class="row">
    <div class="col-sm-6 col-md-4" v-for="inventory in inventories">
      <section class="card card-product">
        <figure class="card-img-top card-product-image">
          <img v-bind:src="inventory.image_url" alt="Product image">
        </figure>
        <div class="card-content">
          <aside class="card-overlay">
            <button class="btn btn-info overlay-button" type="button" name="button">
              <router-link :to="{ name: 'Detail', params: { id: inventory.id }}">See Detail</router-link>
            </button>            
            <button class="btn btn-info overlay-button" type="button" name="button">Add to cart</button>
          </aside>
          <div class="card-body">
            <header class="product-info">
              <h1 class="title">{{inventory.name}}</h1>
              <span class="title">{{inventory.condition}}</span>
              <span class="price">${{inventory.price}}</span>
            </header>
            <p class="description">{{inventory.description}}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>
</template>

<script>
import InventoryService from '@/services/InventoryService'
export default {
  data() {
    return {
      inventories: [],
    }
  },
  created: function() {
    this.retrieveInventory(this.inventories);
  },
  methods: {
    // talk to back end server to retrieve all inventories
    retrieveInventory: async (inventories) => {
      const response = await InventoryService.retrieveInventories();
      console.log('response:', response.data.resources);
      
      response.data.resources.forEach((element) => {
        inventories.push(element);
      })
      // console.log(this.inventories);
    }
  }
}
</script>


<style lang="scss" scoped>
.overlay-button {
  margin: 0 auto;
}

.product-info {
  display: flex;
  align-items: center;


  .title {
    flex-grow: 1;
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
  }

  .price {
    margin-left: .5rem;
    font-size: 1.25rem;
    font-weight: 700;
    flex-shrink: 0;
  }
}

.description {
  margin: 16px 0 0;
  display: none;
}

.card-product:hover .description {
  display: block;
}

a {
  color: white;
}

</style>
