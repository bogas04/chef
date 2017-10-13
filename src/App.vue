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

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:300,400');

$primary-color-dark:   #E64A19;
$primary-color:        #FF5722;
$primary-color-light:  #FFCCBC;
$primary-color-text:   #FFFFFF;
$accent-color:         #FF9800;
$primary-text-color:   #212121;
$secondary-text-color: #757575;
$divider-color:        #BDBDBD;

html {
  box-shadow: border-box;
  font-size: 100%;
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  user-select: none;
}

body {
  background: #EEEEEE;
}

#app {
  height: 100vh;
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-l eave-to {
  opacity: 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
