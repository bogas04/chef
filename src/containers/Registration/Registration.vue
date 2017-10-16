<template>
  <main class="registration page">
    <registration-header />
    <section></section>
    <section></section>
  </main>
</template>

<script>
import { RegistrationHeader } from './components';

export default {
  components: {
    RegistrationHeader,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/colors.scss';

.page {
  height: 100%;
  width: 100%;
}
</style>
