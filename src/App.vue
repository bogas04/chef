<template>
  <div id="app">
    <app-header v-if="loggedIn" />
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AppHeader from '@/components/AppHeader';
import { LOGIN_STATUS } from '@/constants';
import log from '@/utils/log';

export default {
  name: 'app',
  components: {
    AppHeader,
  },
  created() {
    if (!this.loggedIn) {
      this.getUser()
        .then(() => log('Session present'))
        .catch(() => log('Session absent'));
    }
  },
  computed: {
    ...mapState({
      loggedIn(state) {
        return state.user.loginStatus === LOGIN_STATUS.SUCCESS;
      },
    }),
  },
  methods: {
    ...mapActions(['getUser', 'fetchData']),
  },
  watch: {
    loggedIn(value) {
      if (value) {
        this.fetchData();
        this.$router.replace('orders');
      } else {
        this.$router.replace('login');
      }
    },
  },
};
</script>

<style src="@/styles/global.scss" lang="scss"></style>
