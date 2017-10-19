<template>
  <span class="tooltip">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'AppTooltip',
};
</script>

<style scoped lang="scss">
@import '~styles/colors';

.tooltip {
  position: absolute;
  background: $primary-text-color;
  color: $primary-color-text;
  padding: 4px 12px; 
  border-radius: 4px;
  top: -36px;
  text-align: center;
}
</style>
