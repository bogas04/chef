<template>
  <div class="dashboard">
    <app-header />
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { AppHeader } from '@/components';

export default {
  name: 'dashboard',
  components: {
    AppHeader,
  },
  created() {
    if (!this.isAuthenticated) {
      this.$router.replace('/login');
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
};
</script>
