import * as actions from './actions';
import * as getters from './getters';

const moment = require('moment');

import {
  FETCH_MESSAGE,
  FETCH_MESSAGES,
  UPDATE_MESSAGE,
} from './mutation-types';

// initial state
const initialState = {
  message: [],
  messages: [],
};

const groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

// mutations
const mutations = {
  // fetch all messages for current user
  [FETCH_MESSAGES](state, messages) {
    // change date format
    messages.forEach((element) => {
      element.created_at = moment(element.created_at).format('YYYY-MM-DD, h:mm a');
    });
    // assign the orders that we got from our FETCH_MESSAGES event to state.messages
    state.messages = groupBy(messages, 'sender_id');
  },
  // fetch meassage between specific sender and current user
  [FETCH_MESSAGE](state, messages) {
    // change date format
    messages.forEach((element) => {
      element.created_at = moment(element.created_at).format('YYYY-MM-DD, h:mm a');
    });
    // assign the orders that we got from our FETCH_MESSAGES event to state.messages
    state.message = messages;
  },
  [UPDATE_MESSAGE](state, message) {
    message.created_at = moment(message.created_at).format('YYYY-MM-DD, h:mm a');
    state.message.push(message);
  },
};

export default {
  state: { ...initialState },
  actions,
  getters,
  mutations,
};

