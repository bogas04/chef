<template>
  <main class="reservations">
    <div class="reservation-list">
      <reservation v-for="reservation in reservations" :key="reservation.id" :reservation="reservation" />
    </div>
    <floating-button /> 
    </main>
</template>

<script>
import { mapState } from 'vuex';
import format from 'date-fns/format';
import { FloatingButton } from '@/components';
import { Reservation } from './components';

export default {
  components: {
    Reservation,
    FloatingButton,
  },
  computed: {
    ...mapState({
      reservations(state) {
        return state.reservations.map(res => ({
          ...res,
          time: format(res.time, 'hh:MM aa'),
        }));
      },
    }),
  },
};
</script>

<style scoped>
.reservation-list {
  margin: 8px;
  display: flex;
  flex-wrap: wrap;
}
</style>
