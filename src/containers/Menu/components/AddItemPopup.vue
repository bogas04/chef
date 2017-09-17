<template>
  <div class="add-item-container">
    <header class="header">
     <span>Add Item</span>
    </header>

    <div class="form-container">
      <div class="control-container">
        <label for="title">Title</label>
        <input type="text" class="control full" />
      </div>
      <div class="control-container">
        <label for="category">Category</label>
        <input type="text" class="control full" />
      </div>
      <div class="control-container">
        <label for="description">Description</label>
        <input type="text" class="control full" />
      </div>
      <div class="control-container inline">
        <label for="price">Price</label>
        <input type="number" class="control" />
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
      <app-button primary={true}>Add</app-button>
      <app-button>Discard</app-button>
    </div>
  </div>
</template>

<script>
import { MENU_ITEM_TAGS } from '@/constants';
import { Button } from '@/components';

export default {
  components: {
    AppButton: Button,
  },
  data() {
    return {
      tags: MENU_ITEM_TAGS,
      selectedTags: {},
    };
  },
  methods: {
    toggleTag(tag) {
      this.selectedTags[tag] = !this.selectedTags[tag];
    },
  },
};
</script>

<style scoped>
.add-item-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  height: 48px;
  padding: 0 12px;
  background: #F4511E;
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
  border: 1px solid #ededed;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 4px;
  margin-bottom: 4px;
  color: #9E9E9E;
  cursor: pointer; 
}

.tag.selected {
  border: none;
  color: #fff;
  background: #F4511E;
}

.button-container {
  display: flex;
  flex-direction: row-reverse;
  padding: 8px;
}
</style>
