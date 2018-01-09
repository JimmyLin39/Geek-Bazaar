import Vue from 'vue';
import Vuex from 'vuex';
import inventories from './modules/inventories';
import cart from './modules/cart';
import order from './modules/order';
import login from './modules/login';
import messages from './modules/messages';


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

// const userCookies = this.$cookie.set('userCookies', generateRandomId(), 1)

export default new Vuex.Store({
  modules: {
    inventories,
    cart,
    order,
    login,
    messages,
  },
  strict: debug,
});
