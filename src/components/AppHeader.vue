<template>
  <header class="app-header">
    <div class="tab-container">
      <router-link v-for="tab in tabs" :key="tab.title" :to="tab.title" exact-active-class="active-tab">
        <div class="tab">
          <app-icon class="icon" :name='tab.icon' width="24" height="24" />
          <span>{{ tab.title }}</span>
        </div>
      </router-link>
    </div>
    <div class="controls">
      <span class="logout-control" @click="logout">Log out</span>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex';
import { LOGIN_STATUS } from '@/constants';

export default {
  name: 'AppHeader',
  data() {
    return {
      tabs: [
        { title: 'orders', icon: 'groceries' },
        { title: 'menu', icon: 'vegetables' },
        { title: 'tables', icon: 'store' },
        { title: 'reservations', icon: 'restaurant' },
        { title: 'delivery', icon: 'food-stall' },
        { title: 'inventory', icon: 'stew' },
        { title: 'reports', icon: 'salad' },
      ],
      active: 'orders',
    };
  },
  methods: {
    logout() {
      this.setLoginStatus({ loginStatus: LOGIN_STATUS.LOGGED_OUT });
      this.$router.replace('login');
    },
    ...mapMutations(['setLoginStatus']),
  },
};
</script>

<style scoped>
.app-header {
  width: 100%;
  height: 56px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tab-container {
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}

.controls {
  padding: 4px;
  margin-right: 8px;
}

.logout-control {
  padding: 6px 12px;
  color: #bdbdbd;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid #bdbdbd;
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
  color: #FF6E40;
}

.tab > img {
  margin-right: 8px;
}

.icon {
  margin-right: 8px;
}

.active-tab .tab {
  color: #FF5722;
  border-bottom: 1px solid #FF5722;
}
</style>
