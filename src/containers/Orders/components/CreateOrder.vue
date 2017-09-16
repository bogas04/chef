<template>
  <div class="create-order">
    <header>
      <span>Create Order</span>
    </header>

    <div class="control-container">
      <app-button primary={true}>create</app-button>
      <app-button @click.native="dismiss">discard</app-button>
    </div>
  </div>
</template>

<script>
import { Button } from '@/components';

export default {
  components: {
    AppButton: Button,
  },
  methods: {
    dismiss() {
      this.$emit('update:orderPopupVisible', false);
    },
  },
};
</script>

<style scoped>
.create-order {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  right: 8px;
  top: 8px;
  bottom: 8px;
  width: 480px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 4px;
}

header {
  height: 36px;
  background: #FF5722;
  color: #fff;
  padding: 4px;
  border-radius: 4px;
}

header > span {
  line-height: 36px;
  margin-left: 12px;
}

.control-container {
  display: flex;
  flex-direction: row-reverse;
  padding: 12px 4px;
}
</style>
