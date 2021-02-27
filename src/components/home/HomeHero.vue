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
        <span
          class="home-hero__description-name"
          @click="highlight('adrien', true)"
          @mouseover="highlight('adrien')"
          @mouseleave="resetHighlight"
          >Adrien</span
        >
        &
        <span
          class="home-hero__description-name"
          @click="highlight('quentin', true)"
          @mouseover="highlight('quentin')"
          @mouseleave="resetHighlight"
          >Quentin</span
        >, deux développeurs web très attachés à la qualité web et à
        l’expérience utilisateur.<br />C’est pour ça qu’on a créé
        <strong>/tmp</strong> — ça se prononce "<strong>slash tmp</strong>".
      </p>
      <p v-if="highlighted === 'adrien'">ADRIEN</p>
      <p v-if="highlighted === 'quentin'">QUENTIN</p>
    </Container>
  </section>
</template>

<script>
export default {
  name: 'HomeHero',
  data() {
    return {
      highlighted: null,
      highlightTimeout: null
    }
  },
  methods: {
    highlight(name, clear = false) {
      if (this.highlightTimeout) {
        clearTimeout(this.highlightTimeout)
      }
      if (clear) {
        this.highlightTimeout = setTimeout(() => {
          this.resetHighlight()
        }, 3000)
      }
      this.highlighted = name
    },
    resetHighlight() {
      this.highlighted = null
    }
  }
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

    @media (max-width: $breakpoint-medium) {
      font-size: $font-size-normal;
      line-height: 1.7;
    }
  }

  &__description-name {
    text-decoration: underline;
  }
}
</style>
