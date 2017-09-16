<template>
  <img :src="src" alt="icon" class="icon" />
</template>

<script>
import * as icons from '@/assets/icons';

export default {
  props: ['type'],
  data() {
    return {
      src: '',
    };
  },
  mounted() {
    this.src = icons[this.type];
  },
};
</script>

<style>
.icon {
  width: 24px;
  height: 24px;
}
</style>
