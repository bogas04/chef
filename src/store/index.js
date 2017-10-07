import Vue from 'vue';
import Vuex from 'vuex';
import { fetchMenu, fetchOrders, fetchUsers, fetchReservations } from '@/api';
import menuStore from './menuStore';
import orderStore from './orderStore';
import reservationStore from './reservationStore';
import userStore from './userStore';

Vue.use(Vuex);

const defaultStore = {
  user: {},
  orders: [],
  menu: {},
  reservations: [],
  users: {},
};

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
  state: { ...defaultStore },
  modules: {
    user: userStore,
    orders: orderStore,
    menu: menuStore,
    reservations: reservationStore,
  },
  mutations: {
    setData(state, payload) {
      state.menu = payload.menu;
      state.orders = payload.orders;
      state.users = payload.users;
      state.reservations = payload.reservations;
    },
    clearData(state) {
      state.menu = {};
      state.reservations = [];
      state.orders = [];
    },
  },
  getters: {
    totalRevenue(state) {
      // FIXME: Use sub-getter for order total?
      return state.orders.reduce((totalAmount, order) => { // eslint-disable-line
        const orderTotal = order.items.reduce((amount, item) =>
          amount + (state.menu.items[item.itemId].price * item.quantity), 0);
        return totalAmount + orderTotal;
      }, 0);
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
