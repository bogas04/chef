import { addOrder, updateOrder } from '@/api';
import { ORDER_STATUS } from '@/constants';

const store = {
  mutations: {
    addOrder(state, { order }) {
      state.push(order);
    },
    updateOrderStatus(state, order) {
      const orderIndex = state.findIndex(o => o.id === order.id);
      state[orderIndex].status = order.status; // eslint-disable-line
    },
  },
  getters: {
    totalOrders: state => state.length,
    openOrders: state => state.filter(order => order.status === ORDER_STATUS.INIT).length,
    fulfilledOrders: state => state.filter(order => order.status === ORDER_STATUS.FULFILLED).length,
  },
  actions: {
    async addOrder({ commit }, _order) {
      const order = await addOrder(_order);

      commit({
        type: 'addOrder',
        order,
      });
    },
    updateOrder({ commit }, order) {
      commit({
        type: 'updateOrderStatus',
        id: order.id,
        status: order.status,
      });

      // FIXME: Rollback in case of failure
      updateOrder(order);
    },
  },
};

export default store;
