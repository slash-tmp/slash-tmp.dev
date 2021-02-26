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

  &__content {
    font-family: $font-family-sans-serif;
    font-weight: $font-weight-bold;
  }

  &:hover {
    background: $gradient-accent;
    border: none;
    padding: $spacing * 2 + 0.0625rem;
  }

  &:not(:hover) #{&}__content {
    @include text-gradient;
  }
}
</style>
