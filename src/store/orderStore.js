import { addOrder } from '@/api';

const store = {
  mutations: {
    addOrder(state, { order }) {
      state.push(order);
    },
  },
  actions: {
    async addOrder({ commit }, _order) {
      const order = await addOrder(_order);

      commit({
        type: 'addOrder',
        order,
      });
    },
  },
};

export default store;
