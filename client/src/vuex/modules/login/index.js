import Vue from 'vue';
import VueCookie from 'vue-cookie';
import * as actions from './actions';
// import * as getters from './getters';
import {
  SETUP_COOKIES,
} from './mutation-types';

Vue.use(VueCookie);

const initialState = {
  email: '',
  password: '',
  errors: '',
  cookies: false,
};

// mutations:
const mutations = {
  [SETUP_COOKIES](state, payload) {
    console.log('cookie in mutation', payload.cookies);
    console.log('userId in mutation', payload.userId);
    if (payload.cookies === true) {
      Vue.cookie.set('userId', payload.userId, 1);
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
