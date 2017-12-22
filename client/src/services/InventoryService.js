// Used for hitting the inventory route
import Api from '@/services/Api';

export default {
  retrieveInventory() {
    return Api().get('inventories');
  },
  createInventory(inventory) {
    return Api().post('inventories', inventory);
  },
};
