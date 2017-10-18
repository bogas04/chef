<template>
  <main class="registration page">
    <registration-header :activeSectionIndex="activeSectionIndex" />

    <section class="section" v-if="activeSectionIndex === 0">
      <div class="form-container">
        <div class="control">
          <label for="" class="control__label">Name</label>
          <input type="text" class="control__input" name="name" v-validate="'required'" v-model="username"
          />
          <h5 class="error" v-show="errors.has('name')">Provide name</h5>
        </div>
        <div class="control">
          <label for="" class="control__label">Email</label>
          <input type="text" class="control__input" name="email" v-validate="'required|email'"
            v-model="email" />
          <h5 class="error" v-show="errors.has('email')">Provide email</h5>
        </div>
        <div class="control">
          <label for="" class="control__label">Password</label>
          <input type="password" class="control__input" name="password" v-validate="'required'"
            v-model="password" />
          <h5 class="error" v-show="errors.has('password')">Provide password</h5>
        </div>
        <app-button :class="{ disabled: errors.items.length }" primary='true' @click.native="proceedSection">Next</app-button>
      </div>
    </section>
    <section class="section" v-else-if="activeSectionIndex === 1">
      <div class="form-container">
        <div class="control">
          <label for="" class="control__label">Restaurant title</label>
          <input type="text" class="control__input" name="restaurantTitle" v-validate="'required'"
            v-model="restaurantTitle" />
          <h5 class="error" v-show="errors.has('restaurantTitle')">Provide name</h5>
        </div>
        <div class="control">
          <label for="" class="control__label">Tax amount</label>
          <input type="number" class="control__input" name="restaurantTax" v-validate="'required'"
            v-model="restaurantTax" />
          <h5 class="error" v-show="errors.has('restaurantTax')">Provide tax details</h5>
        </div>
        <app-button :class="{ disabled: errors.items.length }" primary='true' @click.native="attemptRegistration">Finish</app-button>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import { AppButton } from '@/components';
import { RegistrationHeader } from './components';

export default {
  components: {
    AppButton,
    RegistrationHeader,
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      restaurantTitle: '',
      restaurantTax: 12,
      activeSectionIndex: 0,
    };
  },
  methods: {
    proceedSection() {
      this.activeSectionIndex += 1;
    },
    attemptRegistration() {
      if (!this.errors.items.length) {
        const credentials = {
          username: this.username,
          email: this.email,
          password: this.password,
          restaurantTitle: this.restaurantTitle,
        };

        this.register(credentials)
          .then(() => {
            this.$router.replace('login');
          });
      }
    },
    ...mapActions(['register']),
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/colors.scss';

.page {
  height: 100%;
  width: 100%;
}

.section {
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 108px);
}

.error {
  color: $danger-color;
  font-weight: 100;
  font-size: 1rem;
}

.form-container {
  display: flex;
  flex-direction: column;
}

.control {
  margin: 2px 8px 8px 8px;
  min-height: 90px;

  .control__label {
    font-size: 1.4rem;
    display: block;
    margin-bottom: 4px;
    font-weight: 300;
  }

  .control__input {
    font-size: 1.4rem;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 4px 8px;
  }
}

.btn {
  margin: 4px 8px;
  height: 24px;
}
</style>
