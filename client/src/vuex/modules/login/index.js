import Vue from 'vue';
import VueCookie from 'vue-cookie';
import * as actions from './actions';
// import * as getters from './getters';
import {
  SETUP_COOKIES,
} from './mutation-types';

Vue.use(VueCookie);

function generateRandomId() {
  const randomId = Math.random().toString(36).replace(/^[A-Za-z0-9_.]+$/).substring(2, 30);
  return randomId;
}

const initialState = {
  email: '',
  password: '',
  errors: '',
  cookies: false,
};

// mutations:
const mutations = {
  [SETUP_COOKIES](state, cookies) {
    // state.errors = response.data.message;
    // this.state.cookies = response.data.cookies;
    console.log('cookie in mutation', cookies);
    
    if (cookies === true) {
      Vue.cookie.set('userCookies', generateRandomId(), 1);
      state.errors = 'Cookies succesfully set!';
    } else {
      state.errors = 'Cookies not set!';
    }
  },
};

export default {
  state: { ...initialState },
  actions,
  mutations,
};
