import Vue from 'vue';
import VueCookie from 'vue-cookie';
import CartService from '@/services/CartService';

import {
  FETCH_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUBTRACT_FROM_CART,
  RESET_CART,
} from './mutation-types';

Vue.use(VueCookie);

export function fetchCart({ commit }) {
  const userId = Vue.cookie.get('userId');
  if (userId) {
    return CartService.retrieveCart(userId)
    .then((response) => {
      commit(FETCH_CART, response.data.resources);
    });
  }
  return commit(RESET_CART);
}

export function addToCart({ commit, state }, inventory) {
  const userId = Vue.cookie.get('userId');
  return CartService.addToCart(inventory, userId)
    .then((response) => {
      const record = state.inventories.find(p => p.id === inventory.id);
      if (!record || record.quantity < 1) {
        commit(ADD_TO_CART, inventory);
      }
    });
}

export function removeFromCart({ commit }, inventoryId) {
  const userId = Vue.cookie.get('userId');
  return CartService.removeFromCart(inventoryId, userId)
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
  const userId = Vue.cookie.get('userId');
  state.inventories.forEach((element) => {
    orders.push({
      buyer_id: userId,
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
      // reset cart
      return commit(RESET_CART);
    });
}

export function resetCart({ commit }) {
  return commit(RESET_CART);
}
