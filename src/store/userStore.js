import Vue from 'vue';
import { login } from '@/api';
import { LOGIN_STATUS } from '@/constants';

const store = {
  state: {
    loginStatus: LOGIN_STATUS.SUCCESS,
    id: null,
    restaurant: null,
  },
  mutations: {
    setLoginStatus(state, { loginStatus, restaurant }) {
      Vue.set(state, 'loginStatus', loginStatus);

      if (loginStatus === LOGIN_STATUS.SUCCESS) {
        Vue.set(state, 'restaurant', restaurant);
      } else {
        Vue.set(state, 'restaurant', null);
      }
    },
  },
  actions: {
    async attemptLogin({ commit }, credentials) {
      commit({
        type: 'setLoginStatus',
        loginStatus: LOGIN_STATUS.REQUEST,
      });

      try {
        const { success = false, restaurant } = await login(credentials);

        commit({
          type: 'setLoginStatus',
          loginStatus: success ? LOGIN_STATUS.SUCCESS : LOGIN_STATUS.FAILED,
          restaurant,
        });
      } catch (e) {
        commit({
          type: 'setLoginStatus',
          loginStatus: LOGIN_STATUS.FAILED,
        });
      }
    },
  },
};

export default store;
