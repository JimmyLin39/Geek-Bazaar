// Used for hitting the register end point route
import Api from '@/services/Api';

export default {
  register(credentials) {
    console.log("registered info received!");
    return Api().post('register', credentials);
  },
};

// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// });
//
