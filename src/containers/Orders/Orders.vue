<template>
  <main class="orders">
    <div class="orders-header">
      <app-button primary={true} @click.native="orderPopupVisible = true">Create Order</app-button>
    </div>

    <bill :selectedOrder="selectedOrder" v-if="selectedOrder" />

    <div class="order-container">
      <order v-for="order in orders" :key="order.id" :order="order" :selectOrder.sync="selectedOrder" />
    </div>

    <transition name="slide-fade">
      <create-order v-if="orderPopupVisible" :orderPopupVisible.sync="orderPopupVisible" />
    </transition>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import { Button } from '@/components';
import { Order, CreateOrder, Bill } from './components';

export default {
  name: 'Orders',
  components: {
    Order,
    AppButton: Button,
    CreateOrder,
    Bill,
  },
  data() {
    return {
      orderPopupVisible: false,
      selectedOrder: null,
    };
  },
  computed: {
    ...mapState({
      orders(state) {
        // FIXME: Avoid making array copy
        return [...state.orders].map(order => ({
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
