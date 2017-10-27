<template>
  <transition name="slide-fade">
    <div class="panel" @blur="console.log('blur')">
      <div class="triangle" />
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
@import '~styles/mixins';

.panel {
  @include box_shadow(2);
  min-width: 420px;
  position: absolute;
  top: 52px;
  right: 0px;
  background: #fff;
}

.triangle {
  @include css_triangle($color: #FFF, $direction: up);
  right: 18px;
  top: -8px;
}
</style>
