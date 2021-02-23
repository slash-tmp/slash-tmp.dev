<template>
  <section class="legal-hero">
    <Container>
      <h1>Mentions légales</h1>
    </Container>
  </section>
</template>

<script>
export default {
  name: 'LegalHero'
}
</script>

<style lang="scss">
.legal-hero {
  background: $gradient-background-dark;
  color: $color-text-light;
  padding: $spacing * 8 $spacing * 2 $spacing * 15;
}
</style>
