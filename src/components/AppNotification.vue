<template>
  <div class="notification">
    <div class="bottom">
      <span class="title">{{ notification.title }}</span>
      <span class="timestamp">{{ timestamp }}</span>
    </div>
    <span class="description">{{ notification.description }}</span>
  </div>
</template>

<script>
import format from 'date-fns/format';

export default {
  props: ['notification'],
  computed: {
    timestamp() {
      return format(this.notification.created, 'hh:mm aa');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/colors', '~styles/mixins';

.notification {
  @include flex_container($direction: column, $justify: center);
  height: 56px;
  padding: 4px 12px;
  border-bottom: 1px solid $divider-color;
  
  .title {
    color: $primary-text-color;
  }
  .description {
    color: $secondary-text-color;
  }
  .bottom {
    @include flex_container($justify: space-between);
    width: 100%;
  }
}
</style>

