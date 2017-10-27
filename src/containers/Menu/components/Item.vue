<template>
  <div class="menu-item">
    <div class="flex-column">
      <span class="item--title">{{ item.title }}</span>
      <span class="item--info">
        <span>{{ item.description }}</span> &#8226;
        <span>{{ item.price }}</span>
      </span>
      <div class="tag-container">
        <span class="tag" v-for="tag in selectedTags" :key="tag">{{ tag }}</span>
      </div>
    </div>
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

<style scoped lang="scss">
@import '~styles/colors', '~styles/mixins';

.menu-item {
  @include box_shadow(2);
  width: 240px;
  margin: 8px;
  padding: 0.8em 1.6em;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.menu-item:hover {
  @include box_shadow(3);
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.item--title {
  font-size: 1.25rem;
  margin-bottom: 4px;
}

.item--info {
  font-size: 0.875rem;
}

.tag {
  font-size: 0.625rem;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 4px;
  margin-bottom: 4px;
  background: $primary-color;
  color: #fff;
}
</style>
