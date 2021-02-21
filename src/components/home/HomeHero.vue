<template>
  <section class="home-hero">
    <Container>
      <h1 class="home-hero__title">
        Petit studio —<br />
        <span class="home-hero__title-highlight"
          >développement
          <span class="home-hero__title-highlight--skip">&</span> qualité
          web</span
        >.
      </h1>

      <p class="home-hero__description">
        Bonjour ! Nous c’est
        <span class="home-hero__description-name">Adrien</span> &
        <span class="home-hero__description-name">Quentin</span>, deux
        développeurs web très attachés à la qualité web et à l’expérience
        utilisateur.<br />C’est pour ça qu’on a créé <strong>/tmp</strong> — ça
        se prononce "<strong>slash tmp</strong>".
      </p>
    </Container>
  </section>
</template>

<script>
export default {
  name: 'HomeHero'
}
</script>

<style lang="scss">
.home-hero {
  color: $color-text-light;
  padding: 0 $spacing * 2;

  &__title {
    margin-bottom: $spacing * 4;
  }

  &__title-highlight {
    @include text-gradient;

    &--skip {
      -webkit-text-fill-color: $color-text-light;
      -moz-text-fill-color: $color-text-light;
    }
  }

  &__description {
    font-size: $font-size-medium;
  }

  &__description-name {
    text-decoration: underline;
  }
}
</style>
