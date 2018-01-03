import OrderService from '@/services/OrderService';

import {
  FETCH_ORDERS,
} from './mutation-types';

export function fetchOrders({ commit }) {
  return OrderService.retrieveOrders()
    .then(response => commit(FETCH_ORDERS, response.data.resources));
}

