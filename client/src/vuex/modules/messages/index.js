import * as actions from './actions';
import * as getters from './getters';

const moment = require('moment');

import {
  FETCH_MESSAGES,
  ADD_MESSAGE,
} from './mutation-types';

// initial state
const initialState = {
  messages: [],
};

// mutations
const mutations = {
  [FETCH_MESSAGES](state, messages) {
    // change date format
    messages.forEach((element) => {
      element.created_at = moment(element.created_at).format('YYYY-MM-DD, h:mm a');
    });
    // assign the orders that we got from our FETCH_MESSAGES event to state.messages
    state.messages = messages;
  },
};

export default {
  state: { ...initialState },
  actions,
  getters,
  mutations,
};

