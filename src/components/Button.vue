<template>
  <component :is="as" :class="['button', `button--${size}`]">
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
    },
    size: {
      type: String,
      validator: value => ['medium', 'small'].includes(value),
      default: 'medium'
    }
  }
}
</script>

<style lang="scss">
$border-width: 0.0625rem;

.button {
  --button-padding: #{$spacing * 2};

  /* TODO: make the button border a gradient */
  background: none;
  font: inherit;
  border: $border-width solid $color-accent-two;
  border-radius: 0.5rem;
  text-decoration: none;
  color: $color-text-light;
  position: relative;
  padding: var(--button-padding);

  &--small {
    --button-padding: #{$spacing};
  }

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
    padding: calc(var(--button-padding) + #{$border-width});

    &::after {
      opacity: 1;
    }
  }

  &:hover #{&}__content {
    @include text-fill-color(currentColor);
  }
}
</style>
