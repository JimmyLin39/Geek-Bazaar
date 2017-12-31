import CartService from "@/services/CartService";

import {
  FETCH_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUBTRACT_FROM_CART
} from './mutation-types'

export function fetchCart({ commit }) {
  return CartService.retrieveCart()
    .then(response => {
      console.log('cart', response.data.resources);
      
      commit(FETCH_CART, response.data.resources)
    });
}

export function addToCart ({ commit, state }, inventory) {
  // FIXME: update to current userId
  const userId = 1;
  return CartService.addToCart(inventory, userId)
    .then((response) => {
      console.log(response.data.resources);
        
      const record = state.inventories.find((p) => p.id === inventory.id)
      
      if (!record || record.quantity < 1) {
        commit(ADD_TO_CART, inventory)
      }
    })
}

export function removeFromCart ({ commit }, inventoryId) {
  return CartService.removeFromCart(inventoryId)
    .then(() => {
      commit(REMOVE_FROM_CART, inventoryId);
    })
}

export function subtractFromCart ({ commit }, inventoryId) {
  commit(SUBTRACT_FROM_CART, inventoryId)
}
