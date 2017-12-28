import Vue from 'vue';
import Router from 'vue-router';
import Register from '@/components/Register';
import LandingPage from '@/components/LandingPage';
import Login from '@/components/Login';
import Index from '@/components/Index';
import ManageInventories from '@/components/ManageInventories';
import Detail from "@/components/Detail";

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
    {
      path: '/index',
      name: 'Index',
      component: Index,
    },
    {
      path: '/inventories',
      name: 'Inventories',
      component: ManageInventories,
    },
    {
      path: '/inventories/:id',
      name: 'Detail',
      component: Detail,
    }
  ],
});
