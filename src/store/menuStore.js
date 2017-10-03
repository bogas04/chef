import Vue from 'vue';
import { addItem } from '@/api';

const store = {
  mutations: {
    setMenuItem(state, { item }) {
      Vue.set(state.items, item.id, item);
    },
  },
  actions: {
    async addMenuItem({ commit }, _item) {
      const item = await addItem(_item);

      commit({
        type: 'setMenuItem',
        item,
      });
    },
  },
};

export default store;
