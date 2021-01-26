<template>
  <component :is="tag" class="hero">
    <div class="hero__content container container--medium">
      <slot />
    </div>
  </component>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div'
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.hero {
  background-color: $color-purple;

  &__content {
    color: $color-white;
    margin: 0 auto;
  }
}
</style>
