import Vue from 'vue';
import Vuex from 'vuex';
import keyBy from 'lodash/keyBy';
import { getRestaurant } from '@/api';
import menuStore from './menuStore';
import orderStore from './orderStore';
import reservationStore from './reservationStore';
import userStore from './userStore';
import tableStore from './tableStore';

Vue.use(Vuex);

const defaultStore = {
  user: {},
  percentageTax: 9,
  address: '220B, Baker street',
};

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
  state: { ...defaultStore },
  modules: {
    user: userStore,
    orders: orderStore,
    menu: menuStore,
    reservations: reservationStore,
    tables: tableStore,
  },
  mutations: {
    setData(state, payload) {
      state.menu = keyBy(payload.restaurant.menu, 'id');
      state.orders = payload.restaurant.orders;
      state.reservations = payload.restaurant.reservations;
      state.title = payload.restaurant.title;
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
      return state.orders.reduce((totalAmount, order) => {
        // eslint-disable-line
        const orderTotal = order.items.reduce(
          (amount, item) => amount + (state.menu[item.itemId].price * item.quantity),
          0,
        );
        return totalAmount + orderTotal;
      }, 0);
    },
  },
  actions: {
    async fetchData({ commit }) {
      const restaurant = await getRestaurant();

      commit({
        type: 'setData',
        restaurant,
      });
    },
  },
});
