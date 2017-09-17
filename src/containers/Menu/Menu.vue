<template>
  <main class="menu">
    <div class="menu-header">
      <app-button primary={true}>Add Item</app-button>
    </div>
    <div class="category-container" v-for="(items, category) in menu.categories" :key="category">
      <span class="category-header">{{ category }}</span>
      <div class="item-container">
        <item v-for="item in items" :key="item.id" :item="item" />
      </div>
    </div>

    <transition name="slide-fade">
      <floating-window>
        <add-item-popup />
      </floating-window>
    </transition>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import groupBy from 'lodash/groupBy';
import { Button, FloatingWindow } from '@/components';
import { Item, AddItemPopup } from './components';

export default {
  components: {
    Item,
    AppButton: Button,
    FloatingWindow,
    AddItemPopup,
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
.menu-header {
  padding: 8px;
  display: flex;
  flex-direction: row-reverse;
}

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
