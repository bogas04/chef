import Vue from 'vue';
import Router from 'vue-router';
import Orders from '@/containers/Orders/Orders';
import Menu from '@/containers/Menu/Menu';
import Reservations from '@/containers/Reservations/Reservations';

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
      path: '*',
      redirect: Orders,
    },
  ],
});
