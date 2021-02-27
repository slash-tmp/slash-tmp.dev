<template>
  <section class="blog-hero">
    <Container>
      <h1 class="blog-hero__title">Blog</h1>
      <p>
        On y écrit des articles pour parler du studio, de développement web, de
        code, d'accessibilité et de qualité web. Comme on ne vous promet pas une
        fréquence régulière, vous pouvez vous abonner au flux de syndication aux
        différents formats :
        <a href="/feed.xml"
          ><span class="visually-hidden">flux de syndication au format</span
          >RSS</a
        >,
        <a href="/feed.atom"
          ><span class="visually-hidden">flux de syndication au format</span
          >Atom</a
        >
        et
        <a href="/feed.json"
          ><span class="visually-hidden">flux de syndication au format</span
          >JSON</a
        >.
      </p>
    </Container>
  </section>
</template>

<script>
export default {
  name: 'BlogHero'
}
</script>

<style lang="scss">
.blog-hero {
  background: $gradient-background-dark;
  color: $color-text-light;
  padding: $spacing * 8 $spacing * 2 $spacing * 15;

  @media (max-width: $breakpoint-medium) {
    padding: $spacing * 8 $spacing * 2 $spacing * 10;
  }

  &__title {
    margin-bottom: $spacing * 4;
  }
}
</style>
