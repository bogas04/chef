<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { AppHeader } from '@/components';
import log from '@/utils/log';

export default {
  name: 'app',
  components: {
    AppHeader,
  },
  created() {
    if (!this.isAuthenticated) {
      this.getUser()
        .then(() => log('Session present'))
        .catch(() => log('Session absent'));
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  methods: {
    ...mapActions(['getUser', 'fetchData']),
  },
  watch: {
    isAuthenticated(value) {
      if (value) {
        this.fetchData();
        this.$router.replace('/app/orders');
      } else {
        this.$router.replace('/login');
      }
    },
  },
};
</script>

<style src="@/styles/global.scss" lang="scss"></style>
