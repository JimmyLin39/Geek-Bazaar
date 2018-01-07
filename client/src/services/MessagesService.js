// Used for hitting the inventory route
import Api from '@/services/Api';

export default {
  retrieveMessages(userId) {
    return Api().get(`messages/${userId}`);
  },
  retrieveMessage(userId, senderId) {
    return Api().get(`messages/${userId}/detail/${senderId}`);
  },
  addMessage(receiverId, senderId, content) {
    return Api().post('messages', receiverId, senderId, content);
  },
};
