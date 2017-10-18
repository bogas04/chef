<template>
  <main class="reservations">
    <div class="reservation-list" v-if="sortedReservations.length > 0">
      <reservation v-for="reservation in sortedReservations" :key="reservation.id" :reservation="reservation" />
    </div>

    <empty-placeholder v-else icon="restaurant" title="No Reservations" subtitle="Click the add reservation button to add a new reservation" />
    
    <floating-button @click.native="reservationPopupVisible = true" tooltip="Add Reservation" />

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
import { FloatingButton, FloatingWindow, EmptyPlaceholder } from '@/components';
import { Reservation, ReservationPopup } from './components';

export default {
  components: {
    Reservation,
    FloatingButton,
    FloatingWindow,
    ReservationPopup,
    EmptyPlaceholder,
  },
  data() {
    return {
      reservationPopupVisible: false,
    };
  },
  computed: {
    sortedReservations() {
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
