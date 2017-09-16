<template>
  <header class="app-header">
    <div class="tab-container">
      <router-link v-for="tab in tabs" :key="tab.title" :to="tab.title">
        <div :class="{ tab, active: active === tab.title }" @click='active = tab.title'>
          <app-icon :type='tab.icon' />
          <span>{{ tab.title }}</span>
        </div>
      </router-link>
    </div>
  </header>
</template>

<script>
import { Icon } from '@/components';

export default {
  name: 'AppHeader',
  data() {
    return {
      tabs: [
        { title: 'orders', icon: 'groceries' },
        { title: 'menu', icon: 'vegetables' },
        { title: 'tables', icon: 'store' },
        { title: 'reservations', icon: 'restaurant' },
        { title: 'delivery', icon: 'foodStall' },
        { title: 'inventory', icon: 'stew' },
        { title: 'reports', icon: 'salad' },
      ],
      active: 'orders',
    };
  },
  components: {
    AppIcon: Icon,
  },
};
</script>

<style scoped>
.app-header {
  width: 100%;
  height: 56px;
  background: #fff;
}

.tab-container {
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}

a {
  text-decoration: none;
}

.tab {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px;
  text-transform: uppercase;
  color: #424242;
}

.tab > img {
  margin-right: 8px;
}

.tab.active {
  color: #FF5722;
  border-bottom: 1px solid #FF5722;
}
</style>
