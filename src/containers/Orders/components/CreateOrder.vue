<template>
  <div class="create-order">
    <header>
      <span>Create Order</span>
    </header>

    <div class="order-info">
      <div class="table-control">
        <span>Table</span>
        <input type="number" v-model="table" />
      </div>

      <hr class="divider" />

      <search :options="options" @selectItem="addToSelectedItems" />

      <div class="items">
        <span class="subheader" v-if="selectedItems.length">items</span>
        <span class="item" v-for="itemId in selectedItems" :key="itemId">{{ menu.items[itemId].title }}</span>
      </div>
    </div>

    <div class="button-container">
      <app-button primary={true} @click.native="createOrder">create</app-button>
      <app-button @click.native="dismiss">discard</app-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { buildOrder } from '@/utils/order';
import { Button } from '@/components';
import Search from './Search';

export default {
  components: {
    Search,
    AppButton: Button,
  },
  data() {
    return {
      selectedItems: [],
      table: 1,
    };
  },
  methods: {
    dismiss() {
      this.$emit('update:orderPopupVisible', false);
    },
    addToSelectedItems(id) {
      this.selectedItems.push(id);
    },
    createOrder() {
      const order = buildOrder({
        number: this.totalOrders + 1,
        table: this.table,
        items: [...this.selectedItems],
      });

      this.addOrder(order);
      this.dismiss();
    },
    ...mapMutations([
      'addOrder',
    ]),
  },
  computed: {
    ...mapState({
      menu: state => state.menu,
      options(state) {
        return Object.values(state.menu.items).map(item => ({ text: item.title, value: item.id }));
      },
      totalOrders: state => state.orders.length,
    }),
  },
};
</script>

<style scoped>
.create-order {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 8px;
  top: 8px;
  bottom: 8px;
  width: 480px;
  background: #FAFAFA;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 2px;
}

header {
  height: 36px;
  background: #FF5722;
  color: #fff;
  padding: 4px;
  border-radius: 2px;
}

header>span {
  line-height: 36px;
  margin-left: 12px;
}

.order-info {
  flex-grow: 1;
  font-size: 20px;
}

.table-control {
  display: flex;
  justify-content: space-between;
  padding: 4px 12px;
  margin: 12px 0;
  align-items: center;
}

.divider {
  margin: 12px;
}

.table-control>input {
  height: 30px;
  width: 48px;
  font-size: 20px;
  text-align: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.items {
  padding: 4px;
  margin: 12px;
  display: flex;
  flex-direction: column;
}

.item {
  font-size: 18px;
  padding: 4px 0;
}

.subheader {
  color: #B71C1C;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 8px;
}

.button-container {
  display: flex;
  flex-direction: row-reverse;
  padding: 12px 4px;
}
</style>
