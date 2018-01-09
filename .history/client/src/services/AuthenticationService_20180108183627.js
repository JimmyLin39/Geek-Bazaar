// Used for hitting the register end point route
import Api from '@/services/Api'

export default {
  register(credentials) {
    return Api().post('register', credentials)
  },
  login(credentials) {
    return Api().post('login', credentials)
  },
  logout() {
<<<<<<< HEAD
    return Api().post('logout')
=======
    return Api().post('logout');
>>>>>>> f3130de1a86d1e08a56a4d4745391cbf41606e30
  }
}
