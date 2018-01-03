import OrderService from '@/services/OrderService';

import {
  FETCH_ORDERS,
  DELETE_ORDER,
} from './mutation-types';

export function fetchOrders({ commit }) {
  return OrderService.retrieveOrders()
    .then(response => commit(FETCH_ORDERS, response.data.resources));
}

export function cancelOrder({ commit }, orderId) {
  return OrderService.cancelOrder(orderId)
    .then((response) => {
      console.log(response.data.message);
      commit(DELETE_ORDER, orderId);
    });
}

export function fetchSales({ commit }) {
  return OrderService.retrieveSales()
    .then(response => commit(FETCH_ORDERS, response.data.resources));
}

export function updateStatus({ commit }, payload) {
  const orderId = payload.id;
  const status = { status: payload.e.target.value };
  return OrderService.updateStatus(orderId, status)
    .then((response) => {
      console.log(response.data.message);
    });
}
