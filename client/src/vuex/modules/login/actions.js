import AuthenticationService from '@/services/AuthenticationService';

import {
  SETUP_COOKIES,
} from './mutation-types';

export function login({ commit, state }, credentials) {
  console.log("We're in the actions!");
  console.log('credentials.email', credentials.email);
  console.log('credentials.password', credentials.password);
  return AuthenticationService.login({
    email: credentials.email,
    password: credentials.password,
  }).then((response) => {
    console.log((response.data.cookies).toString());
    const cookies = response.data.cookies;
    commit(SETUP_COOKIES, cookies);
  });
}

export function logout({ commit, state }, userCookies) {
  return state.$cookie.delete('userCookies');
}
