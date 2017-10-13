<template>
  <div class="add-item-container">
    <header class="header">
     <span>Add Item</span>
    </header>

    <div class="form-container">
      <div class="control-container">
        <label for="title">Title</label>
        <input type="text" class="control full" v-model="title" />
      </div>
      <div class="control-container">
        <label for="category">Category</label>
        <input type="text" class="control full" v-model="category" />
      </div>
      <div class="control-container">
        <label for="description">Description</label>
        <input type="text" class="control full" v-model="description" />
      </div>
      <div class="control-container inline">
        <label for="price">Price</label>
        <input type="number" class="control" v-model.number="price" />
      </div>
      <div class="control-container">
        <label for="tags">Tags</label>
        <div class="tag-container">
          <div
            v-for="(title, tag) in tags" :key="tag"
            :class="{ tag: true, selected: selectedTags[tag] }"
            @click='toggleTag(tag)'>
              {{ title }}
          </div>
        </div>
      </div>
    </div>

    <div class="button-container">
      <app-button primary={true} @click.native="addItem">Add</app-button>
      <app-button @click.native="dismiss">Discard</app-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex';
import mapValues from 'lodash/mapValues';
import { MENU_ITEM_TAGS } from '@/constants';
import { buildMenuItem } from '@/utils/order';
import { AppButton } from '@/components';

export default {
  components: {
    AppButton,
  },
  data() {
    return {
      tags: MENU_ITEM_TAGS,
      title: '',
      category: '',
      description: '',
      price: null,
      selectedTags: mapValues(MENU_ITEM_TAGS, () => false),
    };
  },
  methods: {
    toggleTag(tag) {
      Vue.set(this.selectedTags, tag, !this.selectedTags[tag]);
    },
    addItem() {
      const item = buildMenuItem({
        title: this.title,
        category: this.category,
        description: this.description,
        price: this.price,
        tags: { ...this.selectedTags },
      });
      this.addMenuItem(item);
      this.dismiss();
    },
    dismiss() {
      this.$emit('update:itemPopupVisible', false);
    },
    ...mapActions([
      'addMenuItem',
    ]),
  },
};
</script>

<style scoped lang="scss">
@import "~styles/colors.scss";

.add-item-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  height: 48px;
  padding: 0 12px;
  background: $primary-color;
  color: #fff;
  margin-bottom: 24px;
}

.header > span {
  line-height: 48px;
}

.form-container {
  padding: 4px;
  flex-grow: 1;
}

.control-container {
  padding: 4px;
  margin-bottom: 8px;
}

.control-container.inline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.control {
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #ededed;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  padding: 0 12px;
}

.control.full {
  width: 100%;
  margin-top: 8px;
}

.control-container.inline .control {
  width: 15%;
  text-align: center;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
}

.tag {
  font-size: 14px;
  border: 1px solid $background-color;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 4px;
  margin-bottom: 4px;
  color: $gray-color;
  cursor: pointer;
  user-select: none;
}

.tag.selected {
  border: none;
  color: #fff;
  background: $primary-color;
  border: 1px solid $primary-color;
}

.button-container {
  display: flex;
  flex-direction: row-reverse;
  padding: 8px;
}
</style>
