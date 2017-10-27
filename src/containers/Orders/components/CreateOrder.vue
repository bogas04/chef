<template>
  <div class="create-order">
    <header>
      <span>Create Order</span>
    </header>

    <div class="order-info">
      <div class="type-control control">
        <div :class="{ type, selected: type === selectedType }" v-for="type in types" :key="type" @click='selectedType = type'>{{ type | snakeToString }}</div>
      </div>

      <div class="table-control control" v-if="selectedType === types.RESTAURANT">
        <span>Table</span>
        <input class="control__input" type="number" v-model="table" />
      </div>

      <search :options="options" @selectItem="addToSelectedItems" />

      <div class="items control">
        <span class="subheader" v-if="selectedItems.length">items</span>
        <div class="item" v-for="item in selectedItems" :key="item.id">
          <span class="item--title">{{ menu[item.id].title }}</span>

          <div class="quantity-control">
            <div class="quantity--decrease" @click="decreaseQuantity(item.id)">-</div>
            <span class="quantity--amount">{{ item.quantity }}</span>
            <div class="quantity--increase" @click="increaseQuantity(item.id)">+</div>
          </div>
        </div>
      </div>
    </div>

    <div class="button-container">
      <app-button primary={true} @click.native="createOrder">create</app-button>
      <app-button @click.native="dismiss">discard</app-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import find from 'lodash/find';
import reject from 'lodash/reject';
import { buildOrder, calculateTotal } from '@/utils/order';
import { AppButton } from '@/components';
import { ORDER_TYPES } from '@/constants';
import Search from './Search';

export default {
  components: {
    Search,
    AppButton,
  },
  data() {
    return {
      selectedItems: [],
      table: 1,
      types: ORDER_TYPES,
      selectedType: ORDER_TYPES.RESTAURANT,
    };
  },
  methods: {
    dismiss() {
      this.$emit('update:orderPopupVisible', false);
    },
    addToSelectedItems(id) {
      const item = find(this.selectedItems, { id });

      if (item) {
        item.quantity += 1;
      } else {
        this.selectedItems.push({ id, quantity: 1 });
      }
    },
    createOrder() {
      const order = buildOrder({
        number: this.totalOrders + 1,
        table: this.table,
        type: this.selectedType,
        items: [...this.selectedItems],
        total: calculateTotal(this.menu, this.tax, this.selectedItems),
      });

      this.addOrder(order);
      this.dismiss();
    },
    increaseQuantity(id) {
      const item = find(this.selectedItems, { id });
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(id) {
      const item = find(this.selectedItems, { id });

      if (item.quantity === 1) {
        this.selectedItems = reject(this.selectedItems, ['id', id]);
      } else {
        item.quantity -= 1;
      }
    },
    ...mapActions(['addOrder']),
  },
  computed: {
    ...mapState({
      menu: state => state.menu,
      tax: state => state.percentageTax,
      options(state) {
        return Object.values(state.menu).map(item => ({
          text: item.title,
          value: item.id,
        }));
      },
      totalOrders: state => state.orders.length,
    }),
  },
};
</script>

<style scoped lang="scss">
@import '~styles/colors', '~styles/mixins';

.create-order {
  @include box_shadow(2);
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 8px;
  top: 8px;
  bottom: 8px;
  width: 480px;
  background: #fafafa;
  border-radius: 2px;
}

header {
  height: 36px;
  background: $primary-color;
  color: #fff;
  padding: 4px;
  border-radius: 2px;
}

header > span {
  line-height: 36px;
  margin-left: 12px;
}

.order-info {
  flex-grow: 1;
  font-size: 1.25rem;
}

.table-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.control {
  padding: 4px 12px;
  margin: 12px 0;
}

.control__input {
  border-radius: 4px;
  outline: none;
  border: 1px solid $divider-color;
}

.type-control {
  display: flex;
  font-size: 1rem;
}

.type {
  flex-grow: 1;
  height: 48px;
  line-height: 48px;
  text-align: center;
  border: 1px solid #e0e0e0;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.type:first-child {
  border-radius: 4px 0 0 4px;
}

.type:last-child {
  border-radius: 0 4px 4px 0;
}

.type:hover {
  color: $primary-color;
  cursor: pointer;
}

.type.selected {
  color: #fff;
  background: $primary-color;
}

.divider {
  margin: 12px;
}

.table-control > input {
  height: 30px;
  width: 48px;
  font-size: 1.25rem;
  text-align: center;
}

.items {
  display: flex;
  flex-direction: column;
}

.item {
  font-size: 1.125rem;
  padding: 4px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quantity-control {
  display: flex;
  align-items: center;
}

.quantity--amount {
  width: 24px;
  text-align: center;
}

.quantity--decrease,
.quantity--increase {
  padding: 4px;
  width: 16px;
  text-align: center;
  background: #448aff;
  cursor: pointer;
  color: #fff;
}

.quantity--decrease:hover,
.quantity--increase:hover {
  background: #2962ff;
}

.quantity--decrease {
  border-radius: 4px 0 0 4px;
}

.quantity--increase {
  border-radius: 0 4px 4px 0;
}

.subheader {
  color: $primary-color-dark;
  font-size: 0.875rem;
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
