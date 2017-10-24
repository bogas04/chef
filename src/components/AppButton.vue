<template>
  <button :class="{ btn: true, primary, disabled }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['primary', 'disabled'],
};
</script>

<style scoped lang="scss">
@import "~styles/colors", "~styles/mixins";

.btn {
  font-family: 'Lato';
  text-transform: uppercase;
  padding: 6px 12px;
  border: none;
  outline: none;
  background: none;
  color: #2e2e2e;
  cursor: pointer;
}

.btn.primary {
  @include box_shadow(2);
  color: #fff;
  background: $primary-color;
}

.btn.disabled {
  background: #E0E0E0;
  pointer-events: none;
}
</style>
