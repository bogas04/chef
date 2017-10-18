import Vue from 'vue';
import Vuex from 'vuex';
import { getRestaurant } from '@/api';
import { toMap } from '@/utils/common';
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
  percentageTax: 12,
  address: '220, Baker street',
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
      state.menu = {
        items: toMap(payload.restaurant.menu, 'id'),
      };
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
          (amount, item) =>
            amount + (state.menu.items[item.itemId].price * item.quantity),
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
