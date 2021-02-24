<template>
  <div :class="['container', `container--${size}`, `container--${alignment}`]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    alignment: {
      type: String,
      validator: value => ['left', 'center'].includes(value),
      default: 'center'
    },
    size: {
      type: String,
      validator: value => ['large', 'medium', 'small'].includes(value),
      default: 'medium'
    }
  }
}
</script>

<style lang="scss">
.container {
  &--left {
    margin: 0;
  }

  &--center {
    margin: 0 auto;
  }

  &--small {
    max-width: $container-width-small;
  }

  &--medium {
    max-width: $container-width-medium;
  }

  &--large {
    max-width: $container-width-large;
  }
}
</style>
