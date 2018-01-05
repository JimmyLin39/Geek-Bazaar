import AuthenticationService from '@/services/AuthenticationService';

import {
  SETUP_COOKIES,
} from './mutation-types';

export function login({ commit, state }, credentials) {
  // check user credentials
  return AuthenticationService.login({
    email: credentials.email,
    password: credentials.password,
  }).then((response) => {
    const cookies = response.data.cookies;
    const userId = response.data.userId;
    commit(SETUP_COOKIES, { cookies, userId });
  });
}

export function logout({ commit, state }, userCookies) {
  return state.$cookie.delete('userCookies');
}
