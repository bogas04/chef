<template>
  <div class="dashboard">
    <app-header />
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { AppHeader } from '@/components';

export default {
  name: 'dashboard',
  components: {
    AppHeader,
  },
};
</script>
