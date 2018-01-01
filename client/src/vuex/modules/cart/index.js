import * as getters from './getters'
import * as actions from './actions'

import {
  FETCH_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUBTRACT_FROM_CART
} from './mutation-types'
import { RESET_CART } from './mutation-types';

const initialState = {
  inventories: []
}

// mutations
const mutations = {
  [FETCH_CART](state, inventories) {
    // assign the inventories that we got from our FETCH_CART event to state.inventories
    state.inventories = inventories;
  },
  [ADD_TO_CART] (state, inventory) {
    const record = state.inventories.find(p => p.id === inventory.id)
    if (!record) {
      state.inventories.push({
        id: inventory.id,
        name: inventory.name,
        price: inventory.price,
        user_id: inventory.user_id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },
  [REMOVE_FROM_CART] (state, inventoryId) {
    state.inventories = state.inventories.filter(p => p.id !== inventoryId)
  },
  [SUBTRACT_FROM_CART] (state, inventoryId) {
    const record = state.inventories.find(p => p.id === inventoryId)
    if (record && record.quantity === 1) {
      state.inventories = state.inventories.filter(p => p.id !== inventoryId)
    } else if (record) {
      record.quantity--
    }
  },
  [RESET_CART] (state) {
    state.inventories = initialState.inventories
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
