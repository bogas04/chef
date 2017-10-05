import Vue from 'vue';
import { login } from '@/api';
import { LOGIN_STATUS } from '@/constants';

const store = {
  state: {
    loginStatus: LOGIN_STATUS.LOGGED_OUT,
    id: null,
    restaurant: null,
  },
  mutations: {
    setLoginStatus(state, { loginStatus, user }) {
      Vue.set(state, 'loginStatus', loginStatus);

      if (loginStatus === LOGIN_STATUS.SUCCESS) {
        Vue.set(state, 'restaurant', user.restaurant);
        Vue.set(state, 'id', user.id);
      } else {
        Vue.set(state, 'restaurant', null);
        Vue.set(state, 'id', null);
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
        const user = await login(credentials);

        commit({
          type: 'setLoginStatus',
          loginStatus: LOGIN_STATUS.SUCCESS,
          user,
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
