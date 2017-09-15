<template>
  <div class="order">
    <div class="order-info">
      <div class="order-meta">
        <span class="title">#{{ order.number }}</span>
        <div class="inline">
          <chip>{{ order.status }}</chip>
          <chip>{{ order.type }}</chip>
        </div>
      </div>
      <span>Place {{ timestamp }}</span>
      <span>{{ order.user.name }}</span>
    </div>
    <hr>
    <div class="order-snippet">
      <span class="sub">Order</span>
      <span class="order-item" v-for="item in order.items" :key="item.title">{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
import { Chip } from '@/components';

export default {
  props: ['order'],
  components: {
    Chip,
  },
  data() {
    return {
      timestamp: '10 mins ago',
    };
  },
};
</script>

<style scoped>
.order {
  width: 280px;
  height: 360px;
  margin: 8px;
  padding: 8px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.order:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.order-info {
  display: flex;
  flex-direction: column;
}

.title {
  color: #616161;
  font-size: 18px;
}

.inline {
  display: flex;
}

.order-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

hr {
  margin: 8px 0;
}

.order-snippet {
  display: flex;
  flex-direction: column;
  padding: 4px;
}

.sub {
  text-transform: uppercase;
  color: #D32F2F;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 12px;
}

.order-item {
  padding: 2px 0;
}
</style>
