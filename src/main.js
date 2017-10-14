// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import * as svgicon from 'vue-svgicon';
import VeeValidate from 'vee-validate';
import '@/components/icons';
import VeeValidate from 'vee-validate';
import App from './App';
import router from './router';
import store from './store';

Vue.use(svgicon, {
  tagName: 'app-icon',
});

Vue.use(VeeValidate);

Vue.filter('snakeToString', (value) => {
  const str = value.replace('_', ' ');
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
});

Vue.filter('formatNumber', value => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
