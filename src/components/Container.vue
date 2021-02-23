<template>
  <div :class="['container', `container--${size}`]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
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
  margin: 0 auto;

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
