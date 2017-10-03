import Vue from 'vue';
import Vuex from 'vuex';
import { fetchMenu, fetchOrders, fetchUsers, fetchReservations, addItem, addOrder, addReservation } from '@/api';

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
    reservations: [],
  },
  mutations: {
    setData(state, payload) {
      state.menu = payload.menu;
      state.orders = payload.orders;
      state.users = payload.users;
      state.reservations = payload.reservations;
    },
    addOrder(state, payload) {
      state.orders.push(payload.order);
    },
    setMenuItem(state, payload) {
      Vue.set(state.menu.items, payload.id, payload);
    },
    addReservation(state, payload) {
      state.reservations.push(payload.reservation);
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
    async addMenuItem({ commit }, _item) {
      const item = await addItem(_item);

      commit({
        type: 'setMenuItem',
        item,
      });
    },
    async addOrder({ commit }, _order) {
      const order = await addOrder(_order);

      commit({
        type: 'addOrder',
        order,
      });
    },
    async addReservation({ commit }, _reservation) {
      const reservation = await addReservation(_reservation);

      commit({
        type: 'addReservation',
        reservation,
      });
    },
  },
});
