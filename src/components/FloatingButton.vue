<template>
  <div class="add-button">
    <span>+</span>
  </div>
</template>

<style scoped lang="scss">
@import "~styles/colors.scss";

.add-button {
  position: absolute;
  bottom: 32px;
  right: 32px;
  font-size: 2rem;
  width: 56px;
  height: 56px;
  color: #fff;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: $primary-color;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

.add-button:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.add-button>span {
  line-height: 56px;
}
</style>
