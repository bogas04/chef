<template>
  <main class="orders">
    <div class="orders-header">
      <app-button primary={true} @click.native="orderPopupVisible = true">Create Order</app-button>
    </div>

    <div class="order-container">
      <order v-for="order in orders" :key="order.id" :order="order" />
    </div>

    <transition name="slide-fade">
      <create-order v-if="orderPopupVisible" :orderPopupVisible.sync="orderPopupVisible" />
    </transition>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import { Button } from '@/components';
import { Order, CreateOrder } from './components';

export default {
  name: 'Orders',
  components: {
    Order,
    AppButton: Button,
    CreateOrder,
  },
  data() {
    return {
      orderPopupVisible: false,
    };
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
  padding: 8px;
}
</style>
