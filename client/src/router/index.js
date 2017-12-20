import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Register from '@/components/Register';
import Autocomplete from '@/components/Autocomplete';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/search',
      name: 'Search',
      component: Autocomplete,
    },
  ],
});
