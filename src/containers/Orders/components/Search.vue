<template>
  <div class="search-container">
    <div class="input">
      <app-icon name="search" width="24" height="24" />
      <input class="control__input" v-model="query" type="text" placeholder="Search for items to add..."
        tabindex="2" autofocus ref="search" />
    </div>
    <div class="results" v-if="results.length">
      <div class="result" v-for="(option, index) in results" :key="option.value" tabindex="2"
        @click="selectOption(option.value)" @keyup.enter="selectOption(option.value)">
        <span>{{ option.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Fuse from 'fuse.js';

export default {
  props: ['options'],
  data() {
    return {
      query: '',
    };
  },
  methods: {
    selectOption(value) {
      this.query = '';
      this.$emit('selectItem', value);
      this.$refs.search.focus();
    },
  },
  computed: {
    results() {
      const fuse = new Fuse(this.options, { keys: ['text'] });
      return fuse.search(this.query);
    },
  },
};
</script>

<style scoped lang="scss">
@import '~styles/colors.scss';

.search-container {
  display: flex;
}

.input {
  border-radius: 4px;
  border: 1px solid $divider-color;
  font-size: 1rem;
  margin: 12px;
  padding: 4px 12px;
  height: 32px;
  flex-grow: 1;
  width: 100%;
  border: 1px solid $divider-color;
  border-radius: 4px;
  color: $primary-text-color;

  .control__input {
    outline: none;
    height: 100%;
    font-size: 1rem;
    padding-left: 8px;
    border: none;
  }
}

.results {
  position: absolute;
  min-height: 48px;
  left: 12px;
  right: 12px;
  margin-top: 56px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
}

.result {
  height: 48px;
  padding: 0 12px;
}

.result>span {
  line-height: 48px;
}
</style>
