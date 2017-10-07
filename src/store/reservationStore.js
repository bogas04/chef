import { addReservation } from '@/api';

const store = {
  state: [],
  mutations: {
    addReservation(state, { reservation }) {
      state.push(reservation);
    },
  },
  actions: {
    async addReservation({ commit }, _reservation) {
      const reservation = await addReservation(_reservation);

      commit({
        type: 'addReservation',
        reservation,
      });
    },
  },
};

export default store;
