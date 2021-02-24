<template>
  <Container class="home-services">
    <section class="home-services__section">
      <WebDevIcon class="home-services__icon" />
      <h2 class="home-services__title">Développement<br />& intégration web</h2>
      <p>
        Nous prenons en charge toute la phase de
        <strong>développement</strong> de votre projet web quelle que soit sa
        nature : landing page, site vitrine, application web ou site e-commerce.
        Concrètement, on <strong>transforme</strong> votre cahier des charges et
        vos maquettes en site web fonctionnel, accessible et utilisable.
      </p>
      <p>
        On travaille de <strong>manière simple</strong> avec un kanban et on
        intègre les tâches de manière continue pour que nos clients puissent
        voir évoluer leur projet au fil du développement. On assure également
        que notre code est bien structuré, documenté, testé et performant pour
        assurer la <strong>qualité du produit</strong> livré.
      </p>
      <span class="home-services__bg-text" aria-hidden="true">inté web</span>
    </section>

    <section class="home-services__section home-services__section--quality">
      <WebDevIcon class="home-services__icon" />
      <h2 class="home-services__title">
        Audits & conseils<br />
        en qualité web
      </h2>
      <p>
        Nous sommes <strong>certifiés</strong>
        <a href="https://www.opquast.com">Opquast</a> et nous avons une grande
        sensibilité pour la qualité web et l’expérience utilisateur.
      </p>
      <p>
        Nous pouvons vous proposer un audit de qualité web et vous aider à
        repérer les points d’amélioration sur votre projet.
      </p>
      <p>
        Nous pouvons aussi former votre équipe projet de développement pour une
        montée en compétence.
      </p>
      <span class="home-services__bg-text" aria-hidden="true">conseils</span>
    </section>
  </Container>
</template>

<script>
export default {
  name: 'HomeServices'
}
</script>

<style lang="scss">
.home-services {
  --outline-color: #{$color-text-dark};

  color: $color-text-dark;
  padding: 0 $spacing * 2;

  &__section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing * 4 $spacing * 5;
    position: relative;

    & + & {
      margin-top: $spacing * 22;
    }

    &--quality {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__icon {
    grid-row: 1;
  }

  &__title {
    grid-column: 1 / span 2;
    grid-row: 2;
  }

  p {
    line-height: 1.9;
    grid-row: 3;
  }

  &__bg-text {
    font-family: $font-family-sans-serif;
    font-size: $font-size-normal * 8;
    font-weight: $font-weight-bold;
    left: 0;
    opacity: $opacity-background-text;
    position: absolute;
    text-transform: uppercase;
    top: 75%;
    z-index: -1;
  }
}
</style>
