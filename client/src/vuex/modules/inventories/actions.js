// import Vue from 'vue';
import InventoryService from '@/services/InventoryService';

import {
  // FETCH_INVENTORY,
  FETCH_INVENTORIES,
  CREATE_INVENTORY,
  UPDATE_INVENTORY,
  // DELETE_INVENTORY,
} from './mutation-types';

// export function fetchProduct ({ commit }, productId) {
//   return Vue.http.get(`products/${productId}`)
//     .then((response) => commit(FETCH_PRODUCT, response.body.data))
// }

export function fetchInventories({ commit }) {
  return InventoryService.retrieveInventory()
    .then(response => commit(FETCH_INVENTORIES, response.data.resources));
}

export function createInventory({ commit }, { inventory, image }) {
  return InventoryService.createInventory(inventory)
    .then((response) => {
      console.log('resources', response.data.resources);
      commit(CREATE_INVENTORY, response.data.resources[0]);
      return response.data.resources[0].id;
    });
    // Only upload image if an image has been defined
    // .then((productId) => image && uploadProductImage({ commit }, image, productId))
}

export function updateInventory({ commit }, { inventory, image }) {
  return InventoryService.updateInventory(inventory)
    .then((response) => {
      console.log('updated inventory', response.data.resources[0]);
      commit(UPDATE_INVENTORY, response.data.resources[0]);
    });
    // Only upload image if an image has been defined
    // .then((inventoryId) => image && uploadProductImage({ commit }, image, product.id))
}

// export function deleteProduct ({ commit }, productId) {
//   return Vue.http.delete(`products/${productId}`)
//     .then((response) => commit(DELETE_PRODUCT, productId))
// }

export function saveInventory({ commit, state }, { inventory, image }) {
  const index = state.all.findIndex(p => p.id === inventory.id);
  console.log('saveInventory index:', index);
  // update product if it exists or create it if it doesn't
  if (index !== -1) {
    return updateInventory({ commit }, { inventory, image });
  }
  return createInventory({ commit }, { inventory, image });
}

// function uploadProductImage ({ commit }, image, productId) {
//   var formData = new global.FormData()

//   formData.append('product_id', productId)
//   formData.append('product_image', image)

//   // Upload (PUT) the product image before resolving the response
//   return Vue.http.put('products/upload', formData)
//     .then((response) => response.body.data)
//     // Since the server has associated the product with the image
//     // we now need to refresh (GET) the product data to get this information
//     .then(() => fetchProduct({ commit }, productId))
// }
