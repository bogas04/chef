<template>
  <div class="reservation">
    <div class="label-container">
      <div class="label">
        <span class="label-title">for</span>
        <span class="label-info">{{ reservation.people }}</span>
      </div>
      <div class="label">
        <span class="label-title">time</span>
        <span class="label-info">{{ reservation.time }}</span>
      </div>
    </div>
    <div class="user-info">
      <div>
        <app-icon name="user" width="24px" />
        <span>{{ reservation.user.name }}</span>
      </div>
      <app-button primary='true'>confirm</app-button>
    </div>
  </div>
</template>

<script>
import { AppButton } from '@/components';

export default {
  props: ['reservation'],
  components: {
    AppButton,
  },
};
</script>

<style scoped>
.reservation {
  background: #fff;
  padding: 8px 12px;
  margin: 4px;
  width: 300px;
  height: 140px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
}

.label-container {
  display: flex;
  justify-content: space-around;
  margin: 8px 0;
  flex-grow: 1;
}

.label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.label-title {
  text-transform: uppercase;
  color: #9B9B9B;
  font-size: 12px;
  font-weight: 800;
}

.label-info {
  margin-top: 4px;
  font-size: 24px;
  font-weight: 100;
}

.user-info {
  height: 36px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
