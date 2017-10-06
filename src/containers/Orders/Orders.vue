<template>
  <main class="orders">
    <floating-button @click.native="orderPopupVisible = true" />

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
import { FloatingButton } from '@/components';
import { Order, CreateOrder, Bill } from './components';

export default {
  name: 'Orders',
  components: {
    Order,
    FloatingButton,
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
          items: order.items.map(item => ({
            ...state.menu.items[item.itemId],
            quantity: item.quantity,
          })),
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
