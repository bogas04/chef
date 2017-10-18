<template>
  <header class="registration__header">
    <div :class="{ tab: true, 'tab--active': index === activeSectionIndex }" v-for="(section, index) in sections"
      :key="section.title">
      <div class="tab__number">
        <span>{{ index + 1 }}</span>
      </div>
      <div class="tab__info">
        <span class="tab__title">{{ section.title }}</span><br />
        <span class="tab__subtitle">{{ section.subtitle }}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ['activeSectionIndex'],
  data() {
    return {
      sections: [
        { title: 'About', subtitle: 'Tell us about yourself' },
        { title: 'Restaurant', subtitle: 'About the restaurant' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/colors.scss';

.tab {
  display: flex;
  align-items: center;
  flex-basis: 10%;
  border-right: 1px solid rgba(0, 0, 0, 0.15);
  padding: 0 16px;

  .tab__number {
    font-size: 1.4rem;
    background: $secondary-text-color;
    color: #fff;
    width: 32px;
    height: 32px;
    text-align: center;
    border-radius: 50%;
    margin-right: 12px;

    span {
      line-height: 32px;
    }
  }

  .tab__title {
    font-size: 1rem;
  }

  .tab__subtitle {
    font-size: 0.9rem;
    color: $secondary-text-color;
  }
}

.tab.tab--active {
  .tab__number {
    background: $primary-color;
  }

  .tab__subtitle {
    color: $primary-color;
  }

  .tab__title {
    color: $primary-color-dark;
  }
}

.registration__header {
  height: 92px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: #fff;
  display: flex;
}
</style>

