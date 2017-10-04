import Vue from 'vue';
import { login } from '@/api';

const store = {
  mutations: {
    setLoginStatus(state, { loginStatus }) {
      Vue.set(state, 'isLoggedIn', loginStatus);
    },
  },
  actions: {
    async attemptLogin({ commit }, credentials) {
      try {
        const { success = false } = await login(credentials);

        commit({
          type: 'setLoginStatus',
          loginStatus: success,
        });
      } catch (e) {
        console.error('Could not login', e); // eslint-disable-line
      }
    },
  },
};

export default store;
