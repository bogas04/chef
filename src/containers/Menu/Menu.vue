<template>
  <main class="menu">
    <div class="category-container" v-for="(items, category) in menu.categories" :key="category">
      <span class="category-header">{{ category }}</span>
      <div class="item-container">
        <item v-for="item in items" :key="item.id" :item="item" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import groupBy from 'lodash/groupBy';
import { Item } from './components';

export default {
  components: {
    Item,
  },
  computed: {
    ...mapState({
      menu({ menu }) {
        return {
          categories: groupBy(menu.items, item => item.category),
        };
      },
    }),
  },
};
</script>

<style scoped>
.category-container {
  padding: 18px 0;
}

.category-header {
  margin-left: 8px;
  text-transform: uppercase;
  color: #FF5722;
}

.item-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
