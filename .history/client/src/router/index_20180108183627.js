import Vue from 'vue';
import Router from 'vue-router';
import Register from '@/components/Register';
import LandingPage from '@/components/LandingPage';
import Login from '@/components/Login';
import Index from '@/components/Index';
import ManageInventories from '@/components/ManageInventories';
import Detail from '@/components/Detail';
import Orders from '@/components/Orders';
import Sales from '@/components/Sales';
import Search from '@/components/Search';
<<<<<<< HEAD
import Users from '@/components/Users';
=======
import Messages from '@/components/Messages';
import MessageDetail from '@/components/MessageDetail';
>>>>>>> f3130de1a86d1e08a56a4d4745391cbf41606e30

Vue.use(Router);

const router =
  [
    { path: '/', name: 'Landing Page', component: LandingPage },
    { path: '/register', meta: { Auth: false }, name: 'Register', component: Register },
    { path: '/login', meta: { Auth: false }, name: 'Login', component: Login },
    { path: '/index', meta: { Auth: true }, name: 'Index', component: Index },
    { path: '/inventories', meta: { Auth: true }, name: 'Inventories', component: ManageInventories },
    { path: '/inventories/:id', meta: { Auth: true }, name: 'Detail', component: Detail, props: true },
    { path: '/orders', meta: { Auth: true }, name: 'Orders', component: Orders },
    { path: '/sales', meta: { Auth: true }, name: 'Sales', component: Sales },
    { path: '/search', meta: { Auth: true }, name: 'search', component: Search },
    { path: '/messages', meta: { Auth: true }, name: 'messages', component: Messages },
    { path: '/messages/:id', meta: { Auth: true }, name: 'MessageDetail', component: MessageDetail, props: true },
  ];
export default new Router({
<<<<<<< HEAD

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
      props: true,
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders,
    },
    {
      path: '/sales',
      name: 'Sales',
      component: Sales,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    }
  ],
=======
  routes: router,
>>>>>>> f3130de1a86d1e08a56a4d4745391cbf41606e30
});
