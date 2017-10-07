<template>
  <main class="reports">
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
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'totalOrders',
      'openOrders',
      'fulfilledOrders',
    ]),
  },
};
</script>

<style scoped>
.reports {
  width: 100%;
  padding-top: 4px; 
}

.number-reports {
  display: flex;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.number-report {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 12px;
  border: 1px solid #ededed;
}

.report--title {
  text-transform: uppercase;
  font-size: 14px;
  color: #BDBDBD;
}

.report--number {
  font-size: 32px;
  font-weight: lighter;
}
</style>
