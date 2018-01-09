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
import Messages from '@/components/Messages';
import MessageDetail from '@/components/MessageDetail';

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
  routes: router,
});
