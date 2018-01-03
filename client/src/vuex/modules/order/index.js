import * as actions from './actions';
import * as getters from './getters';

const moment = require('moment');

import {
  FETCH_ORDERS,
} from './mutation-types';

// initial state
const initialState = {
  orders: [],
};

// mutations
const mutations = {
  [FETCH_ORDERS](state, orders) {
    // change date format
    orders.forEach((element) => {
      element.created_at = moment(element.created_at).format('YYYY-MM-DD, h:mm a');
    });
    // assign the orders that we got from our FETCH_ORDERS event to state.orders
    state.orders = orders;
  },
};

export default {
  state: { ...initialState },
  actions,
  getters,
  mutations,
};
