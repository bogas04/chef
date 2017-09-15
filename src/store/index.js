import Vue from 'vue';
import Vuex from 'vuex';
import { fetchMenu, fetchOrders, fetchUsers } from '@/api';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
  state: {
    orders: [],
    menu: {
      items: {},
      categories: [],
    },
    users: {},
  },
  mutations: {
    setData(state, payload) {
      state.menu = payload.menu;
      state.orders = payload.orders;
      state.users = payload.users;
    },
  },
  actions: {
    async fetchData({ commit }) {
      const menu = await fetchMenu();
      const orders = await fetchOrders();
      const users = await fetchUsers();

      commit({
        type: 'setData',
        menu,
        orders,
        users,
      });
    },
  },
});
