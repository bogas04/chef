<template>
  <main class="menu">
    <item v-for="item in menu.items" :key="item.id" :item="item" />
  </main>
</template>

<script>
import { mapState } from 'vuex';
import { Item } from './components';

export default {
  components: {
    Item,
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
