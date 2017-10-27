<template>
  <main class="orders">
    <invoice :selectedOrder="selectedOrder" v-if="selectedOrder" />

    <div class="orders-header" v-if="orders.length > 0">
      <button-select :options="orderTypes" :option.sync="filterType" />
      <button-select :options="orderStatues" :option.sync="filterStatus" />
    </div>

    <div class="order-container" v-if="filteredOrders.length > 0">
      <order v-for="order in filteredOrders" :key="order.id" :order="order" :selectOrder.sync="selectedOrder"
      />
    </div>

    <empty-placeholder v-else icon="salad" title="No Orders" subtitle="Click the add order button to add a new order" />

    <floating-button @click.native="orderPopupVisible = true" tooltip="Add Order" />

    <transition name="slide-fade">
      <create-order v-if="orderPopupVisible" :orderPopupVisible.sync="orderPopupVisible"
      />
    </transition>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import { FloatingButton, ButtonSelect, EmptyPlaceholder } from '@/components';
import { ORDER_TYPES, ORDER_STATUS } from '@/constants';
import { Order, CreateOrder, Invoice } from './components';

export default {
  name: 'Orders',
  components: {
    Order,
    FloatingButton,
    CreateOrder,
    Invoice,
    ButtonSelect,
    EmptyPlaceholder,
  },
  data() {
    return {
      orderPopupVisible: false,
      selectedOrder: null,
      filterType: ORDER_TYPES.RESTAURANT,
      orderTypes: [
        { title: 'restaurant', value: ORDER_TYPES.RESTAURANT },
        { title: 'take away', value: ORDER_TYPES.TAKE_AWAY },
        { title: 'delivery', value: ORDER_TYPES.DELIVERY },
      ],
      filterStatus: ORDER_STATUS.INIT,
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
          if (order.status !== this.filterStatus) return false;
        }
        return true;
      });
    },
    ...mapState({
      orders(state) {
        // FIXME: Avoid making array copy
        return [...state.orders].map(order => ({
          ...order,
          items: order.items.map(item => ({
            ...state.menu[item.itemId],
            quantity: item.quantity,
          })),
        }));
      },
    }),
  },
};
</script>

<style scoped lang="scss">
.order-container {
  display: flex;
  flex-wrap: wrap;
}

.orders-header {
  display: flex;
  margin: 16px 4px 8px 4px;
}
</style>
