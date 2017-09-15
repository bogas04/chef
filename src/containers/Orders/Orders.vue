<template>
  <main class="orders">
    <div class="orders-header">
      <app-button primary={true}>Create Order</app-button>
    </div>
    <div class="order-container">
      <order v-for="order in orders" :key="order.id" :order="order" />
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import { Button } from '@/components';
import Order from './components';

export default {
  name: 'Orders',
  components: {
    Order,
    AppButton: Button,
  },
  computed: {
    ...mapState({
      orders(state) {
        return state.orders.map(order => ({
          ...order,
          user: state.users[order.user],
          items: order.items.map(id => state.menu.items[id]),
        }));
      },
    }),
  },
};
</script>

<style scoped>
.order-container {
  display: flex;
  flex-wrap: wrap;
}

.orders-header {
  display: flex;
  flex-direction: row-reverse;
  padding: 4px;
}
</style>
