// Used for hitting the inventory route
import Api from '@/services/Api';

export default {
  retrieveInventory() {
    return Api().get('inventory');
  },
};
