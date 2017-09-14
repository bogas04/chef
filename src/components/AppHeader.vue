<template>
  <header class="app-header">
    <div class="tab-container">
      <div :class="{ tab, active: active === tab }" v-for="tab in tabs" :key="tab" @click='active = tab'>
        <span>{{ tab }}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      tabs: ['orders', 'menu', 'tables', 'reservations', 'delivery', 'reports'],
      active: 'orders',
    };
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

.tab {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px;
  text-transform: uppercase;
  color: #424242;
}

.tab.active {
  color: #FF5722;
  border-bottom: 1px solid #FF5722;
}
</style>
