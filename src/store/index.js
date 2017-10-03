import Vue from 'vue';
import Vuex from 'vuex';
import { fetchMenu, fetchOrders, fetchUsers, fetchReservations, addItem } from '@/api';

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
      state.reservations = payload.reservations;
    },
    addOrder(state, payload) {
      state.orders.push(payload);
    },
    setMenuItem(state, payload) {
      Vue.set(state.menu.items, payload.id, payload);
    },
  },
  actions: {
    async fetchData({ commit }) {
      const [menu, orders, users, reservations] = await Promise.all([
        fetchMenu(),
        fetchOrders(),
        fetchUsers(),
        fetchReservations(),
      ]);

      commit({
        type: 'setData',
        menu,
        orders,
        users,
        reservations,
      });
    },
    async addMenuItem({ commit }, item) {
      const it = await addItem(item);

      commit({
        type: 'setMenuItem',
        item: it,
      });
    },
  },
});
