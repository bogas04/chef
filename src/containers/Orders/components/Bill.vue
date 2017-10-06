<template>
  <div class="bill">
    <table>
      <thead>
        <tr>
          <th>Items</th>
          <th>Quantity</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tr v-for="item in order.items" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.price }}</td>
      </tr>
      <tfoot>
        <tr>
          <td>Grand total</td>
          <td></td>
          <td>{{ total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import find from 'lodash/find';

export default {
  props: ['selectedOrder'],
  computed: {
    ...mapState({
      order(state) {
        const order = find(state.orders, o => o.id === this.selectedOrder);
        return {
          ...order,
          items: order.items.map(item => ({
            ...state.menu.items[item.itemId],
            quantity: item.quantity,
          })),
        };
      },
    }),
    total() {
      return this.order.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
  },
};
</script>

<style>
.bill {
  display: none;
}

@media print {
  body * {
    visibility: hidden;
  }
  .bill {
    display: block;
  }
  .bill,
  .bill * {
    visibility: visible;
  }
  .bill {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
