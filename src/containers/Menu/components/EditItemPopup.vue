<template>
  <div class="edit-item-container">
    <header class="header">
     <span>Edit Item</span>
    </header>

    <div class="form-container">
      <div class="control-container">
        <label for="title">Title</label>
        <input type="text" class="control full" v-model="item.title" />
      </div>
      <div class="control-container">
        <label for="category">Category</label>
        <input type="text" class="control full" v-model="item.category" />
      </div>
      <div class="control-container">
        <label for="description">Description</label>
        <input type="text" class="control full" v-model="item.description" />
      </div>
      <div class="control-container inline">
        <label for="price">Price</label>
        <input type="number" class="control" v-model.number="item.price" />
      </div>
    </div>

    <div class="button-container">
      <app-button primary={true} @click.native="updateItem">Add</app-button>
      <app-button @click.native="dismiss">Discard</app-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { AppButton } from '@/components';

export default {
  props: ['itemId'],
  components: {
    AppButton,
  },
  methods: {
    dismiss() {
      this.$emit('update:itemPopupVisible', false);
    },
    updateItem() {
      this.updateMenuItem(this.item);
      this.dismiss();
    },
    ...mapActions([
      'updateMenuItem',
    ]),
  },
  computed: {
    ...mapState({
      item(state) {
        // Return item copy
        return { ...state.menu[this.itemId] };
      },
    }),
  },
};
</script>

<style scoped lang="scss">
@import "~styles/colors.scss";

.edit-item-container {
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
  font-size: 1rem;
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

.button-container {
  display: flex;
  flex-direction: row-reverse;
  padding: 8px;
}
</style>
