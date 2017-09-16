<template>
  <div class="create-order">
    <header>
      <span>Create Order</span>
    </header>

    <div class="order-info">
      <div class="table-control">
        <span>Table</span>
        <input type="text" />
      </div>

      <hr class="divider" />

      <div class="search-container">
        <input class="search" type="text" placeholder="Search for items to add..." />
      </div>

      <div class="items">
        <span class="subheader">items</span>
        <span class="item" v-for="item in items" :key="item">{{ item }}</span>
      </div>
    </div>

    <div class="button-container">
      <app-button primary={true}>create</app-button>
      <app-button @click.native="dismiss">discard</app-button>
    </div>
  </div>
</template>

<script>
import { Button } from '@/components';

export default {
  components: {
    AppButton: Button,
  },
  data() {
    return {
      items: ['BBQ Pork ribs', 'The Deli dog'],
    };
  },
  methods: {
    dismiss() {
      this.$emit('update:orderPopupVisible', false);
    },
  },
};
</script>

<style scoped>
.create-order {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 8px;
  top: 8px;
  bottom: 8px;
  width: 480px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 2px;
}

header {
  height: 36px;
  background: #FF5722;
  color: #fff;
  padding: 4px;
  border-radius: 2px;
}

header > span {
  line-height: 36px;
  margin-left: 12px;
}

.order-info {
  flex-grow: 1;
  font-size: 20px;
}

.table-control {
  display: flex;
  justify-content: space-between;
  padding: 4px 12px;
  margin: 12px 0;
  align-items: center;
}

.divider {
  margin: 12px;
}

.search-container {
  display: flex;
}

.search {
  flex-grow: 1;
  height: 30px;
  margin: 12px;
  padding: 4px 12px;
  border-radius: 4px;
  border: 1px solid #BDBDBD;
  font-size: 16px;
}

.table-control > input {
  height: 30px;
  width: 48px;
  font-size: 20px;
  text-align: center;
}

.items {
  padding: 4px;
  margin: 12px;
  display: flex;
  flex-direction: column;
}

.item {
  font-size: 18px;
  padding: 4px 0;
}

.subheader {
  color: #B71C1C;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 8px;
}

.button-container {
  display: flex;
  flex-direction: row-reverse;
  padding: 12px 4px;
}
</style>
