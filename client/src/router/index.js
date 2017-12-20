import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Register from '@/components/Register';
import LandingPage from '@/components/LandingPage';
import Login from '@/components/Login';

Vue.use(Router);

export default new Router({

  routes: [
    {
      path: '/',
      name: 'Landing Page',
      component: LandingPage,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
