<template>
  <div class="order">
    <div class="order-info">
      <div class="order-meta">
        <div>
          <span class="title">#{{ order.number }}</span><br/>
          <span>Placed <i>{{ time }}</i></span>
        </div>
        <div class="inline">
          <chip>{{ order.status }}</chip>
          <chip color='#1565C0'>{{ order.type }}</chip>
        </div>
      </div>
      <div class="order-meta">
        <div class="table center">
          <app-icon name="dinner" width="24px"/>
          <span>{{ order.table }}</span>
        </div>
        <div class="user center">
          <app-icon name="user" width="24px"/>
          <span>{{ order.user.name }}</span>
        </div>      
      </div>
    </div>
    
    <hr>
    
    <div class="order-snippet">
      <span class="sub">Order</span>
      <span class="order-item" v-for="item in order.items" :key="item.title">{{ item.title }}</span>
    </div>

    <div class="order-controls">
      <div class="control">
        <app-icon name="credit-card" width="24px" color="#757575" />
        <span>Payment</span>
      </div>
      <div class="control">
        <app-icon name="edit" width="24px" color="#757575" />
        <span>Edit</span>
      </div>
    </div>
  </div>
</template>

<script>
import { distanceInWordsToNow } from 'date-fns';
import { Chip } from '@/components';

export default {
  props: ['order'],
  components: {
    Chip,
  },
  computed: {
    time() {
      return distanceInWordsToNow(this.order.timestamp);
    },
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
  color: #2E7D32;
}

.table > span {
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
  justify-content: space-around;
  align-items: center;
  visibility: hidden;
}

.order:hover .order-controls {
  visibility: visible;
}

.control {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.control > span {
  font-size: 14px;
  margin-top: 4px;
  color: #757575;
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
