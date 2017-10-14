<template>
  <main class="menu">
    <div class="menu-header">
      <floating-button @click.native="newItemPopupVisible = true" tooltip="Add item" />
    </div>
    <div class="category-container" v-for="(items, category) in menu.categories" :key="category">
      <span class="category-header">{{ category }}</span>
      <div class="item-container">
        <item v-for="item in items" :key="item.id" :item="item" @click.native="handleEdit(item.id)" />
      </div>
    </div>

    <transition name="slide-fade">
      <floating-window v-if="newItemPopupVisible">
        <add-item-popup :itemPopupVisible.sync="newItemPopupVisible" />
      </floating-window>
      <floating-window v-if="editItemPopupVisible">
        <edit-item-popup :itemPopupVisible.sync="editItemPopupVisible" :itemId="editItemId" />
      </floating-window>
    </transition>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import groupBy from 'lodash/groupBy';
import { FloatingButton, FloatingWindow } from '@/components';
import { Item, AddItemPopup, EditItemPopup } from './components';

export default {
  components: {
    Item,
    FloatingButton,
    FloatingWindow,
    AddItemPopup,
    EditItemPopup,
  },
  data() {
    return {
      newItemPopupVisible: false,
      editItemPopupVisible: false,
      editItemId: null,
    };
  },
  methods: {
    handleEdit(itemId) {
      this.editItemPopupVisible = true;
      this.editItemId = itemId;
    },
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

<style scoped lang="scss">
@import "~styles/colors.scss";

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
  color: $primary-color;
}

.item-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
