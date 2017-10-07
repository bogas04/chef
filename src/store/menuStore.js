import Vue from 'vue';
import { addItem, updateItem } from '@/api';

const { log } = console;

const store = {
  state: {
    items: {},
    categories: [],
  },
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
    async updateMenuItem({ commit }, item = {}) {
      if (!item.id) return;

      try {
        await updateItem(item);

        commit({
          type: 'setMenuItem',
          item,
        });
      } catch (error) {
        log('Error: Could not update item');
      }
    },
  },
};

export default store;
