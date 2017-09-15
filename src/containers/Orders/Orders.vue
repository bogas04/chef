<template>
  <main class="orders">
    <div class="order-container">
      <order v-for="order in orders" :key="order.id" :order="order" />
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import Order from './components';

export default {
  name: 'Orders',
  components: {
    Order,
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
</style>
