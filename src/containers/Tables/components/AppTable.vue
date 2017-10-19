<template>
  <div :class="{ table: true, occupied: table.occupied }">
    <span class="table__number">#{{ table.number }}</span><br />
    <span class="table__capacity">For: {{ table.capacity }}</span>
  </div>
</template>

<script>
export default {
  props: ['table'],
};
</script>

<style lang="scss" scoped>
@import '~styles/colors';
@import '~styles/mixins';

.table {
  width: 160px;
  height: 100px;
  border-left: 4px solid #81C784;
  background: #fff;
  margin: 4px;
  padding: 4px;
  @include box_shadow(1);

  .table__number {
    color: $secondary-text-color;
  }
}

.table.occupied {
  border-color: #E57373;
}
</style>

