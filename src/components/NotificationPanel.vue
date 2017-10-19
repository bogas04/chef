<template>
  <transition name="slide-fade">
    <div class="panel" @blur="console.log('blur')">
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
}
</style>
