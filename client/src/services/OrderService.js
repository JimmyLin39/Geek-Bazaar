// Used for hitting the inventory route
import Api from '@/services/Api';

export default {
  retrieveOrders() {
    return Api().get('orders');
  },
  cancelOrder(id) {
    return Api().delete(`orders/${id}`);
  },
  retrieveSales() {
    return Api().get('sales');
  },
  updateStatus(id, status) {
    return Api().put(`orders/${id}/status`, status);
  },
};