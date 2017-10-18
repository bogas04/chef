<template>
  <div class="no-items">
      <app-icon :name="icon" width="150px" height="150px" />
      <h4>No Orders</h4>
      <h5 class="subtitle">Click the add order button to add a new order</h5>
    </div>
</template>

<script>
export default {
  props: ['icon', 'title', 'subtitle'],
};
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/colors.scss';

.no-items {
  @include center;
  color: $gray-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;

  .subtitle {
    font-weight: 100;
  }
}
</style>

