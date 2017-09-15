<template>
  <div class="menu-item">
    <span class="item-title">{{ item.title }}</span>
  </div>
</template>

<script>
export default {
  props: ['item'],
};
</script>

<style scoped>
.menu-item {
  width: 280px;
  height: 180px;
  margin: 8px;
  padding: 8px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.item-title {
  font-size: 20px;
}
</style>
