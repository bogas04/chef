<template>
  <main class="orders">
    <bill :selectedOrder="selectedOrder" v-if="selectedOrder" />

    <div class="orders-header">
      <button-select :options="orderTypes" :option.sync="filterType" />
      <button-select :options="orderStatues" :option.sync="filterStatus" />
    </div>

    <div class="order-container">
      <order v-for="order in filteredOrders" :key="order.id" :order="order" :selectOrder.sync="selectedOrder" />
    </div>

    <floating-button @click.native="orderPopupVisible = true" />

    <transition name="slide-fade">
      <create-order v-if="orderPopupVisible" :orderPopupVisible.sync="orderPopupVisible" />
    </transition>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import { FloatingButton, ButtonSelect } from '@/components';
import { ORDER_TYPES, ORDER_STATUS } from '@/constants';
import { Order, CreateOrder, Bill } from './components';

export default {
  name: 'Orders',
  components: {
    Order,
    FloatingButton,
    CreateOrder,
    Bill,
    ButtonSelect,
  },
  data() {
    return {
      orderPopupVisible: false,
      selectedOrder: null,
      filterType: null,
      orderTypes: [
        { title: 'restaurant', value: ORDER_TYPES.RESTAURANT },
        { title: 'take away', value: ORDER_TYPES.TAKE_AWAY },
        { title: 'delivery', value: ORDER_TYPES.DELIVERY },
      ],
      filterStatus: null,
      orderStatues: [
        { title: 'open', value: ORDER_STATUS.INIT },
        { title: 'fulfilled', value: ORDER_STATUS.FULFILLED },
      ],
    };
  },
  computed: {
    filteredOrders() {
      return this.orders.filter((order) => {
        if (this.filterType) {
          if (order.type !== this.filterType) return false;
        }
        if (this.filterStatus) {
          if (order.staus !== this.filterStatus) return false;
        }
        return true;
      });
    },
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

.orders-header {
  display: flex;
  margin: 16px 4px 8px 4px;
}
</style>
