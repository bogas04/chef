<template>
  <header class="app-header">
    <div class="tab-container">
      <router-link v-for="tab in tabs" :key="tab.title" :to="tab.title" exact-active-class="active-tab">
        <div :class="{ tab, disabled: tab.disabled }">
          <app-icon class="icon" :name='tab.icon' width="24" height="24" />
          <span>{{ tab.title }}</span>
        </div>
      </router-link>
    </div>
    <div class="controls">
      <div class="control">
        <app-icon name="notification" width="24" height="24" />
      </div>
      <div class="control" @click="logout">
        <app-icon name="user" width="24" height="24" />
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AppHeader',
  data() {
    return {
      tabs: [
        { title: 'orders', icon: 'groceries' },
        { title: 'menu', icon: 'vegetables' },
        { title: 'tables', icon: 'store', disabled: true },
        { title: 'reservations', icon: 'restaurant' },
        { title: 'delivery', icon: 'food-stall', disabled: true },
        { title: 'inventory', icon: 'stew', disabled: true },
        { title: 'reports', icon: 'salad' },
      ],
      active: 'orders',
    };
  },
  methods: {
    ...mapActions(['logout']),
  },
};
</script>

<style scoped lang="scss">
@import "~styles/colors.scss";

.app-header {
  width: 100%;
  height: 56px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.tab-container {
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}

.controls {
  padding: 4px;
  margin-right: 8px;
  display: flex;

  .control {
    padding: 0 12px;
    color: $primary-text-color;
    cursor: pointer;
  }
}

.logout-control {
  padding: 6px 12px;
  color: $divider-color;
  font-size: 0.875rem;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid $divider-color;
  border-radius: 4px;
}

.logout-control:hover {
  border-color: rgb(21, 101, 192);
  color: rgb(21, 101, 192);
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

.tab:hover {
  color: $primary-color;
}

.tab.disabled:hover {
  color: #424242;
  cursor: default;
}

.tab>img {
  margin-right: 8px;
}

.icon {
  margin-right: 8px;
}

.active-tab .tab {
  color: $primary-color;
  border-bottom: 1px solid $primary-color;
}
</style>
