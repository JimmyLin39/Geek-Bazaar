import AuthenticationService from '@/services/AuthenticationService';

import {
  SETUP_COOKIES,
  DELETE_COOKIES,
} from './mutation-types';

export function login({ commit, state }, credentials) {
  // check user credentials
  return AuthenticationService.login({
    email: credentials.email,
    password: credentials.password,
  }).then((response) => {
    const { message, cookies, userId } = response.data;
    commit(SETUP_COOKIES, { message, cookies, userId });
  });
}

export function logout({ commit }) {
  commit(DELETE_COOKIES);
}
