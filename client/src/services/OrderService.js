// Used for hitting the inventory route
import Api from '@/services/Api';

export default {
  retrieveOrders() {
    return Api().get('orders');
  },
};
