<template>
  <main class="page">
    <div class="header">
      <app-icon class="icon" name='stew' width="64" height="64" />
      <h1 class="title">Chef</h1>
      <h2 class="subtitle">The modern restaurant dashboard</h2>
    </div>
    <div class="container">
      <div class="form-container">
        <div class="control">
          <label class="control__label">Username</label>
          <div :class="{ input: true, error: errors.has('username') }">
            <app-icon name="user" class="icon" width="24" height="24"></app-icon>
            <input type="text" class="control__input" v-model="username" name="username" v-validate="'required'"
            />
          </div>
          <h6 class="error" v-show="errors.has('username')">Provide username</h6>
        </div>
        <div class="control">
          <label class="control__label">Password</label>
          <div :class="{ input: true, error: errors.has('password') }">
            <app-icon name="password" class="icon" width="24" height="24"></app-icon>
            <input type="password" class="control__input" v-model="password" name="password"
              v-validate="'required'" @keyup.enter="login" />
          </div>
          <h6 class="error" v-show="errors.has('password')">Provide password</h6>
        </div>
        <div>
          <app-button :class="{ inactive: errors.items.length || attemptingLogin }" primary={true}
            @click.native="login">{{ attemptingLogin ? 'Signing in...' : 'Sign in'}}</app-button>
        </div>
        <div class="other-options">
          <div class="option">
            <router-link class="option__link" to="forgot-password">Forgot password?</router-link>
          </div>
          <div class="option">
            <router-link class="option__link" to="registration">Register</router-link>
          </div>
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
        await this.attemptLogin({
          username: this.username,
          password: this.password,
        });
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
@import '~styles/colors', '~styles/mixins', '~styles/underline_mixin';

.page {
  @include flex_container($direction: column, $align: center);
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url('./login-bg.jpg');
  background-size: cover;
}

.header {
  @include flex_container($direction: column, $justify: center, $align: center);
  flex-basis: 30%;
  color: #fff;
  align-items: center;
  text-shadow: 2px 2px #000;
  font-size: 1.5rem;

  .title,
  .subtitle {
    color: $primary-color-text;
    text-align: center;
  }

  .title {
    font-size: 1.6em;
  }

  .subtitle {
    font-size: 1.2em;
  }
}

.container {
  @include box_shadow(3);
  width: 400px;
  padding: 32px 24px;
  padding-bottom: 0;
  background: #fff;
  border-radius: 6px;
}

.form-container {
  padding: 4px;
  display: flex;
  flex-direction: column;
}

.error {
  color: $danger-color;
  font-weight: 400;
}

.control {
  font-size: 1.25rem;
  min-height: 96px;
  margin-bottom: 8px;

  .control__label {
    display: block;
    margin-bottom: 4px;
  }

  .input {
    height: 48px;
    width: 100%;
    border: 1px solid $divider-color;
    box-sizing: border-box;
    border-radius: 4px;
    padding-left: 8px;

    .control__input {
      outline: none;
      height: 100%;
      font-size: 1.25rem;
      padding-left: 8px;
      border: none;
    }
  }

  .input.error {
    border-color: $danger-color;
  }
}

.btn {
  @include box_shadow(2);
  width: 100%;
  font-size: 1.25rem;
  height: 48px;
  text-transform: capitalize;
  box-sizing: border-box;
  border-radius: 4px;
}

.btn.primary:hover {
  background: $primary-color-dark;
}

.btn.inactive {
  pointer-events: none;
  opacity: 0.75;
}

.other-options {
  @include flex_container($align: center);
  height: 64px;

  .option {
    flex-basis: 50%;
    text-align: center;

    .option__link {
      @include link-underline(#fff,
      #0d47a1,
      #0d47a1);
    }
  }
}
</style>
