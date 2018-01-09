import Api from '@/services/Api';

export default {
  retrieveUsers() {
    return Api().get('users');
  },
  retrieveUser(userId) {
    console.log(userId);
    return Api().get(`users/${userId}`);
  },
};
