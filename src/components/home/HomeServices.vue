<template>
  <Container class="home-services">
    <section
      class="home-services__section"
      aria-describedby="webdev-section-title"
    >
      <WebDevIcon class="home-services__icon" />
      <h2 id="webdev-section-title" class="home-services__title">
        Développement<br />& intégration web
      </h2>
      <p>
        Nous prenons en charge toute la phase de
        <strong>développement</strong> de votre projet web quelle que soit sa
        nature : landing page, site vitrine, application web ou site e-commerce.
        Concrètement, nous <strong>transformons</strong> votre cahier des
        charges et vos maquettes en site web fonctionnel et accessible.
      </p>
      <p>
        Nous allons à l'essentiel en travaillant de manière
        <strong>itérative et transparente</strong>
        pour que vous puissiez voir évoluer votre projet au fil du
        développement. Nous nous assurons également que notre code est bien
        structuré, documenté, testé et performant pour assurer la
        <strong>qualité du produit</strong> livré.
      </p>
      <span class="home-services__bg-text" aria-hidden="true">inté web</span>
    </section>

    <section
      class="home-services__section home-services__section--quality"
      aria-describedby="audit-section-title"
    >
      <AuditIcon class="home-services__icon" />
      <h2 id="audit-section-title" class="home-services__title">
        Audits & conseils<br />
        en qualité web
      </h2>
      <p>
        Nous sommes <strong>certifiés</strong>
        <a href="https://www.opquast.com">Opquast</a> et avons une grande
        sensibilité pour la qualité web et l’expérience utilisateur.
      </p>
      <p>
        Nous pouvons vous proposer un audit de qualité web et vous aider à
        repérer les points d’amélioration sur votre projet.
      </p>
      <p>
        Nous pouvons aussi former votre équipe à l'accessibilité web pour une
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
    gap: $spacing * 4 $spacing * 3;
    position: relative;

    @media (max-width: $breakpoint-medium) {
      grid-template-columns: 1fr;
      gap: $spacing * 2;
    }

    & + & {
      margin-top: $spacing * 22;

      @media (max-width: $breakpoint-medium) {
        margin-top: $spacing * 10;
      }
    }

    &--quality {
      grid-template-columns: repeat(3, 1fr);

      @media (max-width: $breakpoint-medium) {
        grid-template-columns: 1fr;
      }
    }
  }

  &__icon {
    grid-row: 1;

    @media (max-width: $breakpoint-medium) {
      grid-row: initial;
      grid-column: initial;
    }
  }

  &__title {
    grid-column: 1 / span 2;
    grid-row: 2;

    @media (max-width: $breakpoint-medium) {
      grid-row: initial;
      grid-column: initial;
    }
  }

  p {
    line-height: 1.9;
    grid-row: 3;

    @media (max-width: $breakpoint-medium) {
      grid-row: initial;
      grid-column: initial;
      line-height: 1.7;
    }
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

    @media (max-width: $breakpoint-medium) {
      display: none;
    }
  }
}
</style>
