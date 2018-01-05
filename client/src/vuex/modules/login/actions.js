import AuthenticationService from '@/services/AuthenticationService';
import Vue from 'vue';
import VueCookie from 'vue-cookie';

Vue.use(VueCookie);

export function login ({ commit, state }, userCookies) {
  console.log("We're in the actions!");
  return AuthenticationService.login({
    email: state.email,
    password: state.password
  }).then((response) => {
    state.errors = response.data.message
    state.cookies = response.data.cookies
    if (response.data.cookies === true) {
      const userCookies = state.$cookie.set('userCookies', generateRandomId(), 1)
      state.errors = 'Cookies succesfully set!'
    } else {
      state.errors = 'Cookies not set!'
    }
  });
}

export function logout({ commit, state }, userCookies) {
  return state.$cookie.delete('userCookies');
}
