import Vue from 'vue';
import Router from 'vue-router';
import Orders from '@/containers/Orders/Orders';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Orders',
      component: Orders,
    },
  ],
});
