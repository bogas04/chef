<template>
  <main class="reports">
    <div class="reports-header">
      <button-select :options="options" />
    </div>
    <div class="number-reports">
      <div class="number-report">
        <span class="report--title">Total orders</span>
        <span class="report--number">{{ totalOrders }}</span>
      </div>
      <div class="number-report">
        <span class="report--title">Open orders</span>
        <span class="report--number">{{ openOrders }}</span>
      </div>
      <div class="number-report">
        <span class="report--title">Fulfilled orders</span>
        <span class="report--number">{{ fulfilledOrders }}</span>
      </div>
    </div>
    <div class="revenue-reports">
      <div class="number-report">
        <span class="report--title">Total Revenue</span>
        <span class="report--number">&#8377; {{ totalRevenue | formatNumber }}</span>
      </div>
      <div class="number-report">
        <span class="report--title">Footfall</span>
        <span class="report--number">40</span>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import { ButtonSelect } from '@/components';

export default {
  components: {
    ButtonSelect,
  },
  data() {
    return {
      options: [
        { title: 'Today', value: 'today' },
        { title: 'Last week', value: 'week' },
        { title: 'Last month', value: 'month' },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'totalOrders',
      'openOrders',
      'fulfilledOrders',
      'totalRevenue',
    ]),
  },
};
</script>

<style scoped lang="scss">
@import '~styles/colors.scss';

.reports {
  width: 100%;
  padding-top: 4px;
}

.reports-header {
  display: flex;
  margin: 8px 0;
}

.number-reports, .revenue-reports {
  display: flex;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.number-report {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 12px;
  border: 1px solid $divider-color;
}

.report--title {
  text-transform: uppercase;
  font-size: 0.875rem;
  color: $gray-color;
}

.report--number {
  font-size: 2rem;
  font-weight: lighter;
}
</style>
