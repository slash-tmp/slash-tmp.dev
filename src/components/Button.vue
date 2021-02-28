<template>
  <component :is="as" class="button">
    <span class="button__content"><slot /></span>
  </component>
</template>

<script>
export default {
  name: 'Button',
  props: {
    as: {
      type: String,
      required: false,
      default: 'button'
    }
  }
}
</script>

<style lang="scss">
$border: 0.0625rem;

.button {
  /* TODO: make the button border a gradient */
  padding: $spacing * 2;
  border: 0.0625rem solid $color-accent-two;
  border-radius: 0.5rem;
  text-decoration: none;
  color: $color-text-light;
  position: relative;

  &__content {
    font-family: $font-family-sans-serif;
    font-weight: $font-weight-bold;
    position: relative;
    z-index: 1;

    @include text-gradient;
  }

  &::after {
    content: '';
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    position: absolute;
    background: $gradient-accent;
    opacity: 0;
    border-radius: 0.5rem;
    transition: opacity $transition-duration $transition-timing;
  }

  &:hover {
    border: none;
    padding: $spacing * 2 + 0.0625rem;

    &::after {
      opacity: 1;
    }
  }

  &:hover #{&}__content {
    @include text-fill-color(currentColor);
  }
}
</style>
