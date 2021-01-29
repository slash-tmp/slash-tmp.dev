<template>
  <svg
    viewBox="0 0 1440 270"
    xmlns="http://www.w3.org/2000/svg"
    :class="['wave', { 'wave--reversed': reversed }]"
  >
    <path
      d="M1440 46.3L1360 51.6001C1280 57.3001 1120 67.3001 960 99.6001C800 131.3 640 185.3 480 179.6C320 174.3 160 110.3 80 78.3L0 46.3V270.3H80C160 270.3 320 270.3 480 270.3C640 270.3 800 270.3 960 270.3C1120 270.3 1280 270.3 1360 270.3H1440V46.3Z"
      class="wave__inner"
    />
    <path
      d="M1440 43.5L1360 48.8C1280 54.5 1120 57.3001 960 89.6001C800 121.3 640 158.3 480 152.6C320 147.3 160 79 80 47L0 15V270.3H80C160 270.3 320 270.3 480 270.3C640 270.3 800 270.3 960 270.3C1120 270.3 1280 270.3 1360 270.3H1440V43.5Z"
      class="wave__middle"
    />
    <path
      d="M1440 42.5C1391.18 42.5 1267 47.0578 1150 55.5C1134.41 56.6252 1102 59.0402 1065 63.1372C1028 67.2342 994.048 71.9266 960 78.8C800 110.5 640 139 480 133.3C320 128 160 64 80 32L0 0V270.3H80C160 270.3 320 270.3 480 270.3C640 270.3 800 270.3 960 270.3C1120 270.3 1280 270.3 1360 270.3H1440V42.5Z"
      class="wave__outer"
    />
  </svg>
</template>

<script>
export default {
  name: 'Wave',
  props: {
    reversed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.wave {
  display: block;

  &--reversed {
    transform: rotate(180deg);
  }

  &__inner {
    fill: $color-background;
  }
  &__middle {
    fill: rgba($color-background, 0.8);
  }
  &__outer {
    fill: rgba($color-background, 0.6);
  }
}
</style>
