<template>
  <main class="reservations">
    <div class="reservation-list">
      <reservation v-for="reservation in reservations" :key="reservation.id" :reservation="reservation"/>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import format from 'date-fns/format';
import { Reservation } from './components';

export default {
  components: {
    Reservation,
  },
  computed: {
    ...mapState({
      reservations(state) {
        return state.reservations.map(res => ({
          ...res,
          time: format(res.time, 'hh:MM aa'),
          user: state.users[res.user],
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
