import Vue from 'vue';
import Router from 'vue-router';
import Orders from '@/containers/Orders/Orders';
import Menu from '@/containers/Menu/Menu';
import Reservations from '@/containers/Reservations/Reservations';
import Login from '@/containers/Login/Login';

Vue.use(Router);

export default new Router({
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
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '*',
      redirect: Login,
    },
  ],
});
