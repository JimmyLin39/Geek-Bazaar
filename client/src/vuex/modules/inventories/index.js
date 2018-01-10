import * as actions from './actions';
import * as getters from './getters';

import {
  FETCH_INVENTORY,
  FETCH_INVENTORIES,
  CREATE_INVENTORY,
  UPDATE_INVENTORY,
  DELETE_INVENTORY,
  FETCH_SEARCH,
} from './mutation-types';

// initial state
const initialState = {
  all: [],
  searchResult: [],
};

// mutations
const mutations = {
  [FETCH_INVENTORY](state, inventory) {
    const index = state.all.findIndex(p => p.id === inventory.id);
    if (index === -1) {
      state.all.push(inventory);
    } else {
      state.all.splice(index, 1, inventory);
    }
  },

  [FETCH_INVENTORIES](state, inventories) {
    // assign the inventories that we got from our FETCH_INVENTORIES event to state.all
    state.all = inventories;
  },

  [CREATE_INVENTORY](state, inventory) {
    state.all.push(inventory);
  },

  [UPDATE_INVENTORY](state, inventory) {
    const index = state.all.findIndex(p => p.id === inventory.id);
    if (index !== -1) {
      // We need to replace the array entirely so that vue can recognize
      // the change and re-render entirely.
      // See http://vuejs.org/guide/list.html#Caveats
      state.all.splice(index, 1, inventory);
    }
  },

  [DELETE_INVENTORY](state, inventoryId) {
    state.all = state.all.filter(p => p.id !== inventoryId);
  },

  [FETCH_SEARCH](state, searchResult) {
    state.searchResult = searchResult;
  },
};

export default {
  state: { ...initialState },
  actions,
  getters,
  mutations,
};
