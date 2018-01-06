// Used for hitting the inventory route
import Api from '@/services/Api';

export default {
  retrieveCart(userId) {
    return Api().get(`cart/${userId}`);
  },
  addToCart(inventory, userId) {
    return Api().post('cart', {
      inventory,
      userId,
    });
  },
  removeFromCart(inventoryId) {
    return Api().delete(`cart/${inventoryId}`);
  },
  checkoutCart(orders) {
    return Api().post('cart/checkout', orders);
  },
};
