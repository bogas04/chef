<template>
  <main class="page">
    <div class="container">
      <div class="form-container">
        <div class="control-container">
          <label>Username</label>
          <input type="text" class="control full" v-model="username" />
        </div>
        <div class="control-container">
          <label>Password</label>
          <input type="password" class="control full" v-model="password" @keyup.enter="login" />
        </div>
        <div class="control-container">
          <app-button primary={true} @click.native="login">Sign in</app-button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import { AppButton } from '@/components';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  components: {
    AppButton,
  },
  methods: {
    login() {
      this.attemptLogin({ username: this.username, password: this.password });
    },
    ...mapActions(['attemptLogin']),
  },
};
</script>

<style scoped lang="scss">
@import "~styles/colors.scss";

.page {
  height: 100%;
  width: 100%;
  background: $primary-color;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 400px;
  padding: 64px 24px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius: 6px;
}

.form-container {
  padding: 4px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: space-around;
}

.control-container {
  padding: 4px;
  margin-bottom: 8px;
  font-size: 20px;
}

.control {
  height: 48px;
  box-sizing: border-box;
  border: 1px solid $divider-color;
  border-radius: 4px;
  outline: none;
  font-size: 20px;  
  padding: 0 12px;
}

.control.full {
  width: 100%;
  margin-top: 8px;
}

.btn {
  font-size: 16px;
  text-transform: capitalize;
}

.control-container {
  align-self: flex-end;
}
</style>
