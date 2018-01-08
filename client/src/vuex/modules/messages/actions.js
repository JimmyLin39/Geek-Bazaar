import Vue from 'vue';
import VueCookie from 'vue-cookie';
import MessagesService from '@/services/MessagesService';

import {
  FETCH_MESSAGE,
  FETCH_MESSAGES,
  ADD_MESSAGE,
} from './mutation-types';

Vue.use(VueCookie);

export function fetchMessages({ commit }) {
  const userId = Vue.cookie.get('userId');
  return MessagesService.retrieveMessages(userId)
    .then(response => commit(FETCH_MESSAGES, response.data.result));
}

export function fetchMessage({ commit }, senderId) {
  const userId = Vue.cookie.get('userId');
  return MessagesService.retrieveMessage(userId, senderId)
    .then(response => commit(FETCH_MESSAGE, response.data.result));
}

export function addMessage({ commit }, payload) {
  const senderId = Vue.cookie.get('userId');
  const receiverId = payload.receiverId;
  const content = payload.content;
  return MessagesService.addMessage({ senderId, receiverId, content })
    .then((response) => {
      console.log(response.data.messages);
    });
}
