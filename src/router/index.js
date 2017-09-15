import Vue from 'vue';
import Router from 'vue-router';
import Orders from '@/containers/Orders/Orders';
import Menu from '@/containers/Menu/Menu';

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
      path: '*',
      redirect: Orders,
    },
  ],
});
