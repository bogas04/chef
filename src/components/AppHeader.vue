<template>
  <header class="app-header">
    <div class="tab-container">
      <router-link v-for="tab in tabs" :key="tab" :to="tab">
        <div :class="{ tab, active: active === tab }" @click='active = tab'>
          <span>{{ tab }}</span>
        </div>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      tabs: ['orders', 'menu', 'tables', 'reservations', 'delivery', 'inventory', 'reports'],
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

.tab.active {
  color: #FF5722;
  border-bottom: 1px solid #FF5722;
}
</style>
