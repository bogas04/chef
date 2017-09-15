<template>
  <main class="menu">
    <menu-item v-for="item in menu.items" :key="item.id" :item="item" />
  </main>
</template>

<script>
import { mapState } from 'vuex';
import { MenuItem } from './components';

export default {
  components: {
    MenuItem,
  },
  computed: {
    ...mapState([
      'menu',
    ]),
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  flex-wrap: wrap;
}
</style>
