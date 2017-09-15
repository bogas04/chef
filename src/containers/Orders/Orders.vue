<template>
  <main class="orders">
    <div class="order-container">
      <order />
    </div>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import Order from './components';

export default {
  name: 'Orders',
  components: {
    Order,
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions([
      'fetchData',
    ]),
  },
};
</script>

<style scoped>
.order-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
