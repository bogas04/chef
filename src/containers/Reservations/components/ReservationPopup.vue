<template>
  <div class="reservation-container">
    <header class="header">
      <span>New Reservation</span>
    </header>

    <div class="form-container">
      <div class="control-container">
        <label for="name">Name</label>
        <input type="text" class="control full" v-model="name" />
      </div>
      <div class="control-container inline">
        <label for="time">Time</label>
        <input type="time" class="control full time" v-model="time" />
      </div>
      <div class="control-container inline">
        <label for="people">People</label>
        <input type="number" class="control full" v-model="number" />
      </div>
    </div>

    <div class="button-container">
      <app-button primary={true} @click.native="create">Add</app-button>
      <app-button @click.native="dismiss">Discard</app-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { AppButton } from '@/components';

export default {
  components: {
    AppButton,
  },
  data() {
    return {
      name: '',
      time: '',
      number: 0,
    };
  },
  methods: {
    create() {
      const time = new Date();
      const [hours, minutes] = this.time.split(':');

      time.setHours(hours);
      time.setMinutes(minutes);

      this.addReservation({
        name: this.name,
        people: this.number,
        time,
      });

      this.dismiss();
    },
    dismiss() {
      this.$emit('update:reservationPopupVisible', false);
    },
    ...mapActions(['addReservation']),
  },
};
</script>

<style scoped lang="scss">
.reservation-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  height: 48px;
  padding: 0 12px;
  background: #F4511E;
  color: #fff;
  margin-bottom: 24px;
}

.header>span {
  line-height: 48px;
}

.form-container {
  padding: 4px;
  flex-grow: 1;
}

.control-container {
  padding: 4px;
  margin-bottom: 8px;
}

.control-container.inline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.control {
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #ededed;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  padding: 0 12px;
}

.control.full {
  width: 100%;
  margin-top: 8px;
}

.control-container.inline .control {
  width: 15%;
  text-align: center;
}

.control-container.inline .control.time {
  width: 20%;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
}

.button-container {
  display: flex;
  flex-direction: row-reverse;
  padding: 8px;
}
</style>
