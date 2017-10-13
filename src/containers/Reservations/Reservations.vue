<template>
  <main class="reservations">
    <div class="reservation-list">
      <reservation v-for="reservation in sortedReservatins" :key="reservation.id" :reservation="reservation" />
    </div>
    
    <floating-button @click.native="reservationPopupVisible = true" />

    <transition name="slide-fade">
      <floating-window v-if="reservationPopupVisible">
        <reservation-popup :reservationPopupVisible.sync="reservationPopupVisible" />
      </floating-window>
    </transition>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import format from 'date-fns/format';
import { FloatingButton, FloatingWindow } from '@/components';
import { Reservation, ReservationPopup } from './components';

export default {
  components: {
    Reservation,
    FloatingButton,
    FloatingWindow,
    ReservationPopup,
  },
  data() {
    return {
      reservationPopupVisible: false,
    };
  },
  computed: {
    sortedReservatins() {
      return this.reservations.sort((a, b) => a.time > b.time);
    },
    ...mapState({
      reservations(state) {
        return state.reservations.map(res => ({
          ...res,
          time: format(res.time, 'hh:mm aa'),
        }));
      },
    }),
  },
};
</script>

<style scoped lang="scss">
.reservation-list {
  margin: 8px;
  display: flex;
  flex-wrap: wrap;
}
</style>
