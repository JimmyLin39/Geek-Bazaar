// Used for hitting the inventory route
import Api from '@/services/Api';

export default {
  retrieveMessages(userId) {
    return Api().get(`messages/${userId}`);
  },
  addMessage(message) {
    return Api().post('messages', message);
  },
};
