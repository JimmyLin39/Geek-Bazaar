import Vue from 'vue';
import VueCookie from 'vue-cookie';
import MessagesService from '@/services/MessagesService';

import {
  FETCH_MESSAGES,
  ADD_MESSAGE,
} from './mutation-types';

Vue.use(VueCookie);

export function fetchMessages({ commit }) {
  const userId = Vue.cookie.get('userId');
  return MessagesService.retrieveMessages(userId)
    .then(response => commit(FETCH_MESSAGES, response.data.result));
}
