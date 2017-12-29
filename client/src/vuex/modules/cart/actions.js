import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUBTRACT_FROM_CART
} from './mutation-types'

export function addToCart ({ commit, state }, inventory) {
  const record = state.inventories.find((p) => p.id === inventory.id)

  if (!record || record.quantity < 10) {
    commit(ADD_TO_CART, inventory)
  }
}

export function removeFromCart ({ commit }, inventoryId) {
  commit(REMOVE_FROM_CART, inventoryId)
}

export function subtractFromCart ({ commit }, inventoryId) {
  commit(SUBTRACT_FROM_CART, inventoryId)
}
