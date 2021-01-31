<template>
  <footer class="footer">
    <Wave reversed />
    <div class="footer__wrapper container">
      <p class="footer__description">
        /tmp est un petit studio de développement où on code des sites et on
        fait de la qualité web.
      </p>

      <nuxt-link class="footer__legal" :to="{ name: 'mentions-legales' }">
        Mentions légales
      </nuxt-link>

      <span class="footer__hello">
        Passez une bonne {{ isNight ? 'nuit' : 'journée' }}
        <span role="img" :aria-label="isNight ? 'lune' : 'soleil'">
          {{ isNight ? '🌙' : '☀️' }}
        </span>
      </span>
    </div>
    <div class="footer__background background-text" aria-hidden="true">
      bonjour
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  data() {
    return {
      time: new Date().getHours()
    }
  },
  computed: {
    isNight() {
      return this.time > 22 || this.time < 7
    }
  }
}
</script>

<style lang="scss">
.footer {
  --outline-color: #{$color-white};

  background: $color-purple;

  &__wrapper {
    color: $color-white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    gap: 1rem;
    max-width: $container-medium;
    margin: 0 auto;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, auto);
      margin-top: 2rem;
    }
  }

  &__description {
    grid-column: 1;
    grid-row: 1;
    max-width: $container-small;

    @media (max-width: 600px) {
      grid-row: auto;
      grid-column: auto;
    }
  }

  &__legal {
    grid-column: 1;
    grid-row: 2;
    color: $color-white;
    justify-self: start;

    &:hover {
      text-decoration: none;
    }

    @media (max-width: 600px) {
      grid-row: auto;
      grid-column: auto;
    }
  }

  &__hello {
    grid-column: 2;
    grid-row: 2;
    justify-self: flex-end;

    @media (max-width: 600px) {
      grid-row: auto;
      grid-column: auto;
      justify-self: initial;
    }
  }

  &__background {
    right: 0;
    position: absolute;
    text-align: right;
    top: 6rem;
    transform: translateY(-100%);

    @media (max-width: 1200px) {
      display: none;
    }
  }
}
</style>
