import Vue from 'vue';
import Vuex from 'vuex';
import { fetchMenu, fetchOrders, fetchUsers, fetchReservations } from '@/api';
import menuStore from './menuStore';
import orderStore from './orderStore';
import reservationStore from './reservationStore';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
  state: {
    user: { loggedIn: false },
    orders: [],
    menu: {
      items: {},
      categories: [],
    },
    users: {},
    reservations: [],
  },
  modules: {
    menu: menuStore,
    orders: orderStore,
    reservations: reservationStore,
  },
  mutations: {
    setData(state, payload) {
      state.menu = payload.menu;
      state.orders = payload.orders;
      state.users = payload.users;
      state.reservations = payload.reservations;
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
  },
});
