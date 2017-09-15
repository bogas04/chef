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

<style scoped>
.btn {
  text-transform: uppercase;
  padding: 6px 12px;
  border: none;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  outline: none;
}

.btn.primary {
  color: #fff;
  background: #FF5722;
}

.btn.disabled {
  background: #E0E0E0;
  pointer-events: none;
}
</style>
