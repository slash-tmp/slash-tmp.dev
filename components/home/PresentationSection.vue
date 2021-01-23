<template>
  <div class="presentation-section">
    <section
      class="presentation-section__section container container--medium flow"
    >
      <h1 class="presentation-section__title">
        <!-- &shy; => This is a soft hyphen, only appearing when the word is wrapped. -->
        Dévelop&shy;pement et qualité&nbsp;web
      </h1>
      <p>
        Bonjour ! Nous c’est Adrien et Quentin. On est 2 développeurs web très
        attachés à la qualité web et à l’expérience utilisateur.
      </p>
      <p>
        Et c’est pour ça qu’on a créé “/tmp” (ça se prononce “slash tmp”) : un
        petit studio de développement où on code des sites et on fait de la
        qualité web.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PresentationSection'
}
</script>

<style lang="scss">
.presentation-section {
  margin: auto;
}
</style>

<style lang="scss">
@import '@/assets/scss/variables';

.presentation-section {
  background-color: $color-purple;
  color: $color-white;
  font-size: 1.5rem;

  --flow: 3rem;

  &__title {
    font-size: 3.5em;
    color: inherit;
    line-height: 1.2;

    @media (max-width: 1200px) {
      font-size: 3em;
    }

    @media (max-width: 900px) {
      font-size: 2.5em;
    }
  }

  &__section {
    margin: 0 auto;
  }

  @media (max-width: 1200px) {
    font-size: 1.2rem;

    --flow: 2.5rem;
  }

  @media (max-width: 900px) {
    font-size: 1rem;

    --flow: 2rem;
  }
}
</style>
