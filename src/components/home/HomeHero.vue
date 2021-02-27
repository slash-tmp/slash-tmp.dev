<template>
  <section class="home-hero">
    <Container class="home-hero__container">
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
      <picture v-if="highlighted === 'adrien'">
        <source
          srcset="@/assets/img/adrien.jpg?resize&size=250&format=webp"
          type="image/webp"
        />
        <source
          srcset="@/assets/img/adrien.jpg?resize&size=250"
          type="image/jpeg"
        />
        <img
          class="home-hero__avatar home-hero__avatar--adrien"
          src="@/assets/img/adrien.jpg?resize&size=250"
          alt="Adrien"
        />
      </picture>

      <picture v-if="highlighted === 'quentin'">
        <source
          srcset="@/assets/img/quentin.jpg?resize&size=250&format=webp"
          type="image/webp"
        />
        <source
          srcset="@/assets/img/quentin.jpg?resize&size=250"
          type="image/jpeg"
        />
        <img
          class="home-hero__avatar home-hero__avatar--quentin"
          src="@/assets/img/quentin.jpg?resize&size=250"
          alt="Quentin"
        />
      </picture>
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

  &__container {
    position: relative;
  }

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

  &__avatar {
    --avatar-size: #{$spacing * 20};

    border: $spacing solid $color-text-light;
    border-radius: 50%;
    height: var(--avatar-size);
    width: var(--avatar-size);
    position: absolute;
    z-index: 1;

    @media (max-width: $breakpoint-medium) {
      --avatar-size: #{$spacing * 10};

      border-width: $spacing / 2;
    }

    &--adrien {
      top: $spacing * 22;
      left: $spacing * -8;

      @media (max-width: $breakpoint-large) {
        left: $spacing;
      }

      @media (max-width: $breakpoint-medium) {
        top: $spacing * 10;
      }

      @media (max-width: $breakpoint-small) {
        top: initial;
        bottom: $spacing * 10;
      }
    }

    &--quentin {
      top: $spacing * -6;
      left: $spacing * 40;

      @media (max-width: $breakpoint-medium) {
        left: initial;
        right: $spacing * 4;
      }

      @media (max-width: $breakpoint-small) {
        top: $spacing * 4;
        right: $spacing * -1;
      }
    }
  }
}
</style>
