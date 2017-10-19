<template>
  <transition name="slide-fade">
    <div class="panel">
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
  position: absolute;
  right: 0px;
  background: #fff;
  min-width: 150px;
  min-height: 100px;
}
</style>
