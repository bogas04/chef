<template>
<div class="button-container">
  <app-tooltip>{{ tooltip }}</app-tooltip>
  <div class="add-button">
    <span>+</span>
  </div>
</div>
</template>

<script>
import AppTooltip from './AppTooltip';

export default {
  props: ['tooltip'],
  components: {
    AppTooltip,
  },
};
</script>


<style scoped lang="scss">
@import '~styles/colors';
@import '~styles/mixins';

.button-container {
  position: absolute;
  bottom: 32px;
  right: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-container .tooltip {
  display: none;
}

.button-container:hover .tooltip {
  display: block;
}

.add-button {
  font-size: 2rem;
  width: 56px;
  height: 56px;
  color: #fff;
  border-radius: 50%;
  @include box_shadow(2);
  background: $primary-color;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.add-button:hover {
  @include box_shadow(3);
}

.add-button > span {
  line-height: 56px;
}
</style>
