<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';

export default {
  name: 'app',
  components: {
    AppHeader,
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
</style>
