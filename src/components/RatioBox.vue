<template>
  <div class="ratio-box" :style="{ '--ratio-box-padding': padding }">
    <div class="ratio-box__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatioBox',
  props: {
    ratio: {
      type: Number,
      required: false,
      default: 1
    }
  },
  computed: {
    padding() {
      return `${(1 / this.ratio) * 100}%`
    }
  }
}
</script>

<style lang="scss">
.ratio-box {
  position: relative;

  &::before {
    display: block;
    content: '';
    width: 100%;
    padding-top: var(--ratio-box-padding);
  }

  &__content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
