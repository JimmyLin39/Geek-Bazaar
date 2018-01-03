// Used for hitting the inventory route
import Api from '@/services/Api';

export default {
  retrieveInventories() {
    return Api().get('inventories');
  },
  retrieveInventory(inventoryId) {
    return Api().get(`inventories/${inventoryId}`);
  },
  createInventory(inventory) {
    return Api().post('inventories', inventory);
  },
  updateInventory(inventory) {
    return Api().put(`inventories/${inventory.id}`, inventory);
  },
  deleteInventory(inventoryId) {
    return Api().delete(`inventories/${inventoryId}`);
  },
  uploadImage(formData) {
    return Api().put('inventories/upload', formData);
  },
};
