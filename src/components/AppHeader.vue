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
        <app-icon name="notification" width="24" height="24" @click.native="toggleNotificationPanel"
        />
        <div class="badge" v-if="hasUnreadNotifications">⚫️</div>
        <notification-panel v-if="notificationPanelOpen">
          <div class="no-notification">😁 <br/> All caught up</div>
        </notification-panel>
      </div>
      <div class="control">
        <app-icon name="user" width="24" height="24" @click.native="userPanelOpen = !userPanelOpen"
        />
        <notification-panel v-if="userPanelOpen">
          <div class="user__setting" @click="logout">Log out</div>
        </notification-panel>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex';
import NotificationPanel from './NotificationPanel';

export default {
  name: 'AppHeader',
  components: {
    NotificationPanel,
  },
  data() {
    return {
      tabs: [
        { title: 'orders', icon: 'groceries' },
        { title: 'menu', icon: 'vegetables' },
        { title: 'tables', icon: 'store' },
        { title: 'reservations', icon: 'restaurant' },
        { title: 'delivery', icon: 'food-stall', disabled: true },
        { title: 'inventory', icon: 'stew', disabled: true },
        { title: 'reports', icon: 'salad' },
      ],
      active: 'orders',
      notificationPanelOpen: false,
      userPanelOpen: false,
      hasUnreadNotifications: true,
    };
  },
  methods: {
    toggleNotificationPanel() {
      this.notificationPanelOpen = !this.notificationPanelOpen;
      if (this.notificationPanelOpen) {
        this.hasUnreadNotifications = false;
      }
    },
    ...mapActions(['logout']),
  },
};
</script>

<style scoped lang="scss">
@import "~styles/colors.scss";
@import "~styles/mixins.scss";

.app-header {
  width: 100%;
  height: 56px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include box_shadow(1);
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
    position: relative;

    .svg-icon {
      cursor: pointer;
    }
  }
}

.no-notification {
  width: 180px;
  padding: 16px;
  color: grey;
  font-size: 1.2rem;
  text-align: center;
}

.badge {
  position: absolute;
  color: $primary-color-light;
  right: 10px;
  bottom: -8px;
}

.user__setting {
  cursor: pointer;
  white-space: nowrap;
  padding: 8px 24px;
}

.item {
  padding: 8px 12px;
  max-width: 400px;
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

  .icon {
    margin-right: 8px;
  }
}

.tab:hover {
  color: $primary-color;
}

.tab.disabled:hover {
  color: #424242;
  cursor: default;
}

.active-tab .tab {
  color: $primary-color;
  border-bottom: 1px solid $primary-color;
}
</style>
