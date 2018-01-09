import Vue from 'vue';
import VueCookie from 'vue-cookie';
import * as actions from './actions';
import * as getters from './getters';

import {
  SETUP_COOKIES,
  DELETE_COOKIES,
} from './mutation-types';

Vue.use(VueCookie);

const isLoggedIn = Vue.cookie.get('userId');

const initialState = {
  email: '',
  password: '',
  errors: '',
  cookies: isLoggedIn,
};


// mutations:
const mutations = {
  [SETUP_COOKIES](state, payload) {
    if (payload.cookies === true) {
      Vue.cookie.set('userId', payload.userId, 1);
      state.cookies = true;
      state.errors = '';
    } else {
      state.errors = payload.message;
      console.log(state.errors);
    }
  },
  [DELETE_COOKIES](state) {
    Vue.cookie.delete('userId');
    state.cookies = false;
  },
};

export default {
  state: { ...initialState },
  getters,
  actions,
  mutations,
};
