import * as getters from './getters'
import * as actions from './actions'

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUBTRACT_FROM_CART
} from './mutation-types'

const initialState = {
  inventories: []
}

// mutations
const mutations = {
  [ADD_TO_CART] (state, inventory) {
    const record = state.inventories.find(p => p.id === inventory.id)
    if (!record) {
      state.inventories.push({
        id: inventory.id,
        name: inventory.name,
        price: inventory.price,
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
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
