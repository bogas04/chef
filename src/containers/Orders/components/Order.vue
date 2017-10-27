<template>
  <div class="order">
    <div class="order-info">
      <div class="order-meta">
        <div>
          <span class="title">#{{ order.number }}</span><br/>
          <span class="meta__time">{{ time }}</span>
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
      return distanceInWordsToNow(this.order.created);
    },
    isFulfilled() {
      return this.order.status === ORDER_STATUS.FULFILLED;
    },
  },
};
</script>

<style scoped lang="scss">
@import '~styles/colors', '~styles/mixins';

.order {
  @include flex_container($direction: column);
  @include box_shadow(2);
  width: 280px;
  height: 360px;
  margin: 0 0.4em 0.4em 0;
  padding: 0.4em;
  background: #fff;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:first-child {
    margin-left: 0.4em;
  }

  &:hover {
    @include box_shadow(4);
  }
}

.center {
  @include flex_container($justify: center, $align: center);
}

.order-info {
  @include flex_container($direction: column, $align: stretch);
  min-height: 100px;
  width: 100%;
}

.title {
  color: #616161;
  font-size: 1.125rem;
}

.inline {
  @include flex_container($direction: column, $align: flex-end);
}

.order-meta {
  @include flex_container($justify: space-between, $align: center);
  margin-bottom: 8px;

  .meta__time {
    color: $primary-color-light;
  }
}

.table {
  color: $success-color;

  .span {
    margin-left: 2px;
  }
}

hr {
  margin: 8px 0;
}

.order-snippet {
  @include flex_container($direction: column);
  width: 100%;
  padding: 4px;
  flex-grow: 1;
  overflow-y: auto;
}

.order-controls {
  @include flex_container($align: center);
  height: 48px;
  width: 100%;
  visibility: hidden;

  .control {
    @include flex_container($justify: center, $align: center);
    flex-grow: 1;
    height: 36px;
    cursor: pointer;

    span,
    .svg-icon {
      font-size: 0.75rem;
      height: 16px;
      color: $secondary-text-color;
      text-transform: uppercase;
    }

    &:hover {
      span,
      .svg-icon {
        color: $info-color;
      }
    }
  }
}

.order:hover .order-controls {
  visibility: visible;
}

.sub {
  text-transform: uppercase;
  color: $primary-color-dark;
  font-size: 0.75rem;
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
