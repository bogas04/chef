<template>
  <main class="page">
    <div class="container">
      <div class="form-container">
        <div class="control">
          <label class="control__label">Username</label>
          <input type="text" class="control__input" v-model="username" name="username" v-validate="'required'"
          />
          <h6 class="error" v-show="errors.has('username')">Provide username</h6>
        </div>
        <div class="control">
          <label class="control__label">Password</label>
          <input type="password" class="control__input" v-model="password" name="password"
            v-validate="'required'" @keyup.enter="login" />
          <h6 class="error" v-show="errors.has('password')">Provide password</h6>
        </div>
        <div>
          <app-button :class="{ disabled: errors.items.length || attemptingLogin }" primary={true}
            @click.native="login">{{ attemptingLogin ? 'Signing in...' : 'Sign in'}}</app-button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import { AppButton } from '@/components';
import log from '@/utils/log';

export default {
  data() {
    return {
      username: '',
      password: '',
      attemptingLogin: false,
    };
  },
  components: {
    AppButton,
  },
  methods: {
    async login() {
      this.attemptingLogin = true;

      try {
        await this.attemptLogin({ username: this.username, password: this.password });
      } catch (error) {
        log(error);
      }

      this.attemptingLogin = false;
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
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient( rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url('./login-bg.jpg');
  background-size: cover;
}

.container {
  width: 400px;
  padding: 32px 24px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 6px;
}

.form-container {
  padding: 4px;
  display: flex;
  flex-direction: column;
}

.error {
  color: $danger-color;
  font-style: italic;
}

.control {
  font-size: 1.25rem;
  min-height: 96px;
  margin-bottom: 8px;

  .control__label {
    display: block;
    margin-bottom: 4px;
  }

  .control__input {
    height: 48px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid $divider-color;
    border-radius: 4px;
    outline: none;
    font-size: 1.25rem;
    padding-left: 8px;
  }
}

.btn {
  width: 100%;
  font-size: 1.25rem;
  height: 48px;
  text-transform: capitalize;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.btn:hover {
  background: $primary-color-dark;
}

.btn.disabled {
  pointer-events: none;
  opacity: 0.75;
}
</style>
