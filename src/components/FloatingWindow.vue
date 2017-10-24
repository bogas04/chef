<template>
  <div class="floating-window">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@import "~styles/mixins";

.floating-window {
  @include box_shadow(2);
  position: absolute;
  right: 8px;
  top: 8px;
  bottom: 8px;
  width: 480px;
  background: #fafafa;
  border-radius: 2px;
}
</style>
