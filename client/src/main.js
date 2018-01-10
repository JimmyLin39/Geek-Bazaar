// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import VueCookie from 'vue-cookie';
import App from './App';
import router from './router';
import store from './vuex/store';

// import global styles
import './styles/style.scss';
import fontawesome from '@fortawesome/fontawesome';
import faSolid from '@fortawesome/fontawesome-free-solid';

Vue.use(VueCookie);
fontawesome.library.add(faSolid);

Vue.config.productionTip = false;

// Popper.js for dropdowns
try {
  window.$ = window.jQuery = require('jquery');
  window.Popper = require('popper.js').default;
  require('bootstrap');
} catch (e) {}

// check authorization befor each route
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.meta.Auth && !Vue.cookie.get('userId')) {
    next({ path: '/login' });
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
});
