import Vue from 'vue';
import Vuex from 'vuex';
import { fetchMenu, fetchOrders } from '@/api';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
  state: {
    orders: [],
    menu: {
      items: {},
      categories: [],
    },
  },
  mutations: {
    setData(state, payload) {
      state.menu = payload.menu;
      state.orders = payload.orders;
    },
  },
  actions: {
    async fetchData({ commit }) {
      const menu = await fetchMenu();
      const orders = await fetchOrders();

      commit({
        type: 'setData',
        menu,
        orders,
      });
    },
  },
});
