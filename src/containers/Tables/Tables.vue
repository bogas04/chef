<template>
  <main class="page">
    <div class="tables-container">
      <app-table v-for="(table, i) in tables" :key="i" :table="table" />
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import { AppTable } from './components';

export default {
  components: {
    AppTable,
  },
  computed: {
    ...mapState(['tables']),
  },
};
</script>

<style lang="scss" scoped>
.tables-container {
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
}
</style>
