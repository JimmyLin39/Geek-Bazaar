// import Vue from 'vue';
import InventoryService from '@/services/InventoryService';

import {
  FETCH_INVENTORY,
  FETCH_INVENTORIES,
  CREATE_INVENTORY,
  UPDATE_INVENTORY,
  DELETE_INVENTORY,
} from './mutation-types';

export function fetchInventory ({ commit }, inventoryId) {
  return InventoryService.retrieveInventory(inventoryId)
    .then((response) => {
      console.log(response.data.resources[0]);
      
      commit(FETCH_INVENTORY, response.data.resources[0])
    })
}

export function fetchInventories({ commit }) {
  return InventoryService.retrieveInventories()
    .then(response => commit(FETCH_INVENTORIES, response.data.resources));
}

export function createInventory({ commit }, { inventory, image }) {
  return InventoryService.createInventory(inventory)
    .then((response) => {
      // console.log('resources', response.data.resources);
      commit(CREATE_INVENTORY, response.data.resources[0]);
      return response.data.resources[0].id;
    })
    // Only upload image if an image has been defined
    .then((inventoryId) => image && uploadInventoryImage({ commit }, image, inventoryId))
}

export function updateInventory({ commit }, { inventory, image }) {
  return InventoryService.updateInventory(inventory)
    .then((response) => {
      console.log('updated inventory', response.data.resources[0]);
      commit(UPDATE_INVENTORY, response.data.resources[0]);
    })
    // Only upload image if an image has been defined
    .then((inventoryId) => image && uploadInventoryImage({ commit }, image, inventory.id))
}

export function deleteInventory({ commit }, inventoryId) {
  return InventoryService.deleteInventory(inventoryId)
    .then((response) => {
      console.log('delete message:', response.data.message);
      commit(DELETE_INVENTORY, inventoryId);
    });
}

export function saveInventory({ commit, state }, { inventory, image }) {
  const index = state.all.findIndex(p => p.id === inventory.id);
  console.log('saveInventory index:', index);
  // update product if it exists or create it if it doesn't
  if (index !== -1) {
    return updateInventory({ commit }, { inventory, image });
  }
  return createInventory({ commit }, { inventory, image });
}

export function uploadInventoryImage({ commit }, image, inventoryId) {
  const formData = new global.FormData();

  formData.append('inventory_id', inventoryId);
  formData.append('inventory_image', image);

  // Upload (PUT) the product image before resolving the response
  return InventoryService.uploadImage(formData)
    .then(response => response.data.message)
    // Since the server has associated the product with the image
    // refresh (GET) the product data to get this information
    .then(() => fetchInventory({ commit }, inventoryId));
}

export function searchInventory({ commit }, name) {
  console.log(name);
  return InventoryService.searchInventory(name)
    .then((response) => {
      console.log(response.data.resources);
    });
}
