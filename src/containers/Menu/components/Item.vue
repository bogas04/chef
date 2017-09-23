<template>
  <div class="menu-item">
    <div class="flex-column">
      <span class="item-title">{{ item.title }}</span>
      <div class="tag-container">
        <span class="tag" v-for="tag in selectedTags" :key="tag">{{ tag }}</span>
      </div>
    </div>
    <app-icon class="edit-icon" name="edit" />
  </div>
</template>

<script>
import { MENU_ITEM_TAGS } from '@/constants';
import pickBy from 'lodash/pickBy';
import keys from 'lodash/keys';

export default {
  props: ['item'],
  computed: {
    selectedTags() {
      const tags = this.item.tags || {};
      return keys(pickBy(tags)).map(tag => MENU_ITEM_TAGS[tag]);
    },
  },
};
</script>

<style scoped>
.menu-item {
  width: 240px;
  height: 56px;
  margin: 8px;
  padding: 12px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.item-title {
  font-size: 20px;
  margin-bottom: 4px;
}

.edit-icon {
  visibility: hidden;
  color: #757575;
}

.menu-item:hover>.edit-icon {
  visibility: visible;
}

.tag {
  font-size: 10px;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 4px;
  margin-bottom: 4px;
  background: #F4511E;
  color: #fff;
}
</style>
