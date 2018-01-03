import CartService from '@/services/CartService';

import {
  FETCH_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUBTRACT_FROM_CART,
  RESET_CART,
} from './mutation-types';

export function fetchCart({ commit }) {
  return CartService.retrieveCart()
    .then((response) => {
      console.log('cart', response.data.resources);
      commit(FETCH_CART, response.data.resources);
    });
}

export function addToCart({ commit, state }, inventory) {
  // FIXME: update to current userId
  const userId = 1;
  return CartService.addToCart(inventory, userId)
    .then((response) => {
      console.log(response.data.message);
      const record = state.inventories.find(p => p.id === inventory.id);
      if (!record || record.quantity < 1) {
        commit(ADD_TO_CART, inventory);
      }
    });
}

export function removeFromCart({ commit }, inventoryId) {
  return CartService.removeFromCart(inventoryId)
    .then(() => {
      commit(REMOVE_FROM_CART, inventoryId);
    });
}

export function subtractFromCart({ commit }, inventoryId) {
  commit(SUBTRACT_FROM_CART, inventoryId);
}

export function checkoutCart({ commit, state }) {
  // calculate total price for all cart items
  const orders = [];
  state.inventories.forEach((element) => {
    orders.push({
      // FIXME: update to current userID
      buyer_id: 1,
      seller_id: element.user_id,
      inventory_id: element.id,
      total_cents: element.price,
      status: 'waiting',
      type: 'sale',
    });
  });
  // add orders to orders table
  return CartService.checkoutCart(orders)
    .then((response) => {
      console.log('response:', response.data.message);
      // reset cart
      commit(RESET_CART);
    });
}
