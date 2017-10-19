const store = {
  state: [{
    occupied: false,
    capacity: 4,
    number: 'A-1',
  }, {
    occupied: true,
    capacity: 4,
    number: 'A-2',
  }],
  getters: {
    tableCount: state => state.length,
  },
};

export default store;
