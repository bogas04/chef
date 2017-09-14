<template>
  <main class="orders">
    <div class="order-container">
      <order  v-for="i in 10" :key='i' />
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
