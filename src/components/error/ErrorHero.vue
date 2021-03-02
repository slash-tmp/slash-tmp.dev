<template>
  <section class="error-hero">
    <Container>
      <h1>{{ title }}</h1>
    </Container>
  </section>
</template>

<script>
export default {
  name: 'ErrorHero',
  props: {
    title: {
      type: String,
      default: 'Page introuvable',
      required: false
    }
  }
}
</script>

<style lang="scss">
.error-hero {
  @include dark-background;

  color: $color-text-light;
  padding: $spacing * 8 $spacing * 2 $spacing * 15;

  @media (max-width: $breakpoint-medium) {
    padding: $spacing * 8 $spacing * 2 $spacing * 10;
  }
}
</style>
