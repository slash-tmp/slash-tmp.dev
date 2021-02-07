<template>
  <component :is="tag" class="hero">
    <div class="hero__content container container--medium">
      <slot />
    </div>
    <Wave />
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
.hero {
  --outline-color: #{$color-white};

  background-color: $color-purple;

  &__content {
    color: $color-white;
    margin: 0 auto;

    h1,
    h2,
    h3,
    h4 {
      color: inherit;
    }

    a {
      color: $color-white;
    }
  }
}
</style>
