<template>
  <div class="order">
    <chip>Fulfilled</chip>
    <chip>Restaurant</chip>
  </div>
</template>

<script>
import { Chip } from '@/components';

export default {
  components: {
    Chip,
  },
};
</script>

<style scoped>
.order {
  width: 280px;
  height: 360px;
  margin: 8px;
  padding: 8px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.order:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
</style>
