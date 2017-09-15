<template>
  <div id="app">
    <app-header />
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AppHeader from '@/components/AppHeader';

export default {
  name: 'app',
  components: {
    AppHeader,
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions([
      'fetchData',
    ]),
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato');

* {
  margin: 0;
  padding: 0;
  box-shadow: border-box;
}

#app {
  background: #EEEEEE;
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
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
