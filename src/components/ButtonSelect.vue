<template>
  <div class="button-select">
    <div :class="{ option, selected: option.value === selectedOption }" v-for="option in options" :key="option.value" @click="select(option)">
      {{ option.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['options'],
  data() {
    return {
      selectedOption: null,
    };
  },
  methods: {
    select(option) {
      this.selectedOption = option.value;
      this.$emit('update:option', option.value);
    },
  },
};
</script>

<style scoped>
.button-select {
  display: flex;
  margin: 0 8px;
}

.option {
  padding: 0 8px;
  flex-grow: 1;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  text-transform: capitalize;
  text-align: center;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  border: 1px solid #BDBDBD;
}

.option:first-child {
  border-radius: 4px 0 0 4px;
}

.option:last-child {
  border-radius: 0 4px 4px 0;
}

.option:hover {
  color: #FF5722;
  cursor: pointer;
}

.option.selected {
  color: #fff;
  background: #FF5722;
  border-color: #FF5722;
}
</style>
