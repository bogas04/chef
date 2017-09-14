<template>
  <main class="orders">
    <div class="order-container">
      <order />
    </div>
  </main>
</template>

<script>
import Order from './components';

export default {
  name: 'Orders',
  components: {
    Order,
  },
};
</script>

<style scoped>
.order-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
