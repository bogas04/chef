<template>
  <div class="order">
    <div class="order-info">
      <div class="order-meta">
        <div>
          <span class="title">#{{ order.number }}</span><br/>
          <span>Placed
            <i>{{ time }}</i>
          </span>
        </div>
        <div class="inline">
          <chip>{{ order.status }}</chip>
          <chip color='#1565C0'>{{ order.type | snakeToString }}</chip>
        </div>
      </div>
      <div class="order-meta">
        <div class="table center" v-if="order.type === orderTypes.RESTAURANT">
          <app-icon name="dinner" width="24px" />
          <span>{{ order.table }}</span>
        </div>
      </div>
    </div>

    <hr>

    <div class="order-snippet">
      <span class="sub">Order</span>
      <span class="order-item" v-for="item in order.items" :key="item.title">{{ item.title }}
        <span class="item--quantity" v-if="item.quantity > 1">x {{ item.quantity }}</span>
      </span>
    </div>

    <div class="order-controls">
      <div class="control" @click="printOrder">
        <app-icon name="credit-card" width="30px" />
        <span>Bill</span>
      </div>
      <div class="control">
        <app-icon name="edit" width="30px" />
        <span>Edit</span>
      </div>
      <div class="control" v-if="!isFulfilled" @click="fulfillOrder">
        <app-icon name="user" width="30px" />
        <span>Fullfill</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex';
import { distanceInWordsToNow } from 'date-fns';
import { Chip } from '@/components';
import { ORDER_TYPES, ORDER_STATUS } from '@/constants';

export default {
  props: ['order'],
  components: {
    Chip,
  },
  data() {
    return {
      orderTypes: ORDER_TYPES,
    };
  },
  methods: {
    printOrder() {
      this.$emit('update:selectOrder', this.order.id);
      Vue.nextTick(window.print);
    },
    fulfillOrder() {
      this.updateOrder({ id: this.order.id, status: ORDER_STATUS.FULFILLED });
    },
    ...mapActions(['updateOrder']),
  },
  computed: {
    time() {
      return distanceInWordsToNow(this.order.timestamp);
    },
    isFulfilled() {
      return this.order.status === ORDER_STATUS.FULFILLED;
    },
  },
};
</script>

<style scoped lang="scss">
@import "~styles/colors.scss";

.order {
  width: 280px;
  height: 360px;
  margin: 8px;
  padding: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

.order:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.order-info {
  display: flex;
  flex-direction: column;
  min-height: 100px;
}

.title {
  color: #616161;
  font-size: 18px;
}

.inline {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.order-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.table {
  color: $success-color;
}

.table>span {
  margin-left: 2px;
}

.user {
  color: #2e2e2e;
}

hr {
  margin: 8px 0;
}

.order-snippet {
  display: flex;
  flex-direction: column;
  padding: 4px;
  flex-grow: 1;
}

.order-controls {
  display: flex;
  height: 48px;
  align-items: center;
  visibility: hidden;
}

.order:hover .order-controls {
  visibility: visible;
}

.control {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 36px;
  cursor: pointer;
}

.control>span,
.control>.svg-icon {
  font-size: 12px;
  height: 16px;
  color: #757575;
  text-transform: uppercase;
}

.control:hover>span,
.control:hover>.svg-icon {
  color: $info-color;
}

.sub {
  text-transform: uppercase;
  color: $primary-color-dark;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 12px;
}

.order-item {
  padding: 2px 0;
}

.item--quantity {
  color: $success-color;
  margin-left: 4px;
}
</style>
