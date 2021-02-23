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
  background: $gradient-background-dark;
  color: $color-text-light;
  padding: $spacing * 8 $spacing * 2 $spacing * 15;
}
</style>
