import Vue from 'vue';
import Router from 'vue-router';
import Orders from '@/containers/Orders/Orders';
import Menu from '@/containers/Menu/Menu';
import Reservations from '@/containers/Reservations/Reservations';
import Login from '@/containers/Login/Login';
import Reports from '@/containers/Reports/Reports';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/orders',
      name: 'Orders',
      component: Orders,
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
    },
    {
      path: '/reservations',
      name: 'Reservations',
      component: Reservations,
    },
    {
      path: '/reports',
      name: 'Reports',
      component: Reports,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '*',
      redirect: 'orders',
    },
  ],
});
