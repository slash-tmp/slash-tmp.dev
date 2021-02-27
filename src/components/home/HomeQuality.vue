<template>
  <section class="home-quality">
    <Container>
      <div class="home-quality__definition">
        <QualityIcon />
        <h2 class="home-quality__title">Qualité web ?</h2>
        <p class="home-quality__description-start">
          Un site de qualité, c'est un site qui propose une
          <strong>expérience optimale</strong> pour toutes et tous en répondant
          aux <strong>besoins</strong> des utilisateurs et utilisatrices. C'est
          une compétence pluridisciplinaire qui passe par le code, le design, le
          contenu ou la gestion de projet.
        </p>
        <p class="home-quality__description-end">
          Cela semble être une évidence de pouvoir consulter et utiliser un site
          de la meilleure des manières possibles. Et pourtant, beaucoup de sites
          web présentent des manques à gagner qui peuvent coûter très cher. On
          parle de
          <strong>non-qualité</strong> et cela représente l'ensemble des coûts
          causés par l'<strong>absence de qualité</strong> dans un projet —
          déréferencement dans les moteurs de recherche, ventes non réalisées
          sur un site e-commerce, retard dans le traitement des réclamations…
          Autant de raisons qui nécessitent de s'intéresser et d'<strong
            >investir</strong
          >
          dans la <strong>qualité web</strong> !
        </p>
        <span class="home-quality__bg-text" aria-hidden="true"
          >qualité web</span
        >
      </div>
      <figure>
        <blockquote class="home-quality__quote">
          La qualité web représente l’aptitude d’un service en ligne à
          satisfaire des exigences explicites ou implicites.
        </blockquote>
        <figcaption>
          <span class="home-quality__quote-author">Élie Sloïm</span>,
          <a
            href="https://www.opquast.com/rendre-le-web-meilleur/qualite-web-le-livre/"
            ><cite class="home-quality__quote-source">livre Opquast</cite></a
          >
        </figcaption>
      </figure>
    </Container>
  </section>
</template>

<script>
export default {
  name: 'HomeQuality'
}
</script>

<style lang="scss">
.home-quality {
  color: $color-text-light;
  padding: 0 $spacing * 2;

  &__definition {
    align-items: end;
    display: grid;
    gap: $spacing * 2 $spacing * 5;
    grid-template-columns: 1fr 1fr;
    margin-bottom: $spacing * 20;
    position: relative;

    @media (max-width: $breakpoint-medium) {
      grid-template-columns: 1fr;
      margin-bottom: $spacing * 10;
    }

    p {
      line-height: 1.9;

      @media (max-width: $breakpoint-medium) {
        line-height: 1.7;
      }
    }
  }

  &__icon,
  &__title {
    grid-column: 1;
  }

  &__description-start {
    grid-column: 1;
  }

  &__description-end {
    grid-column: 2;
    grid-row: 1 / span 3;

    @media (max-width: $breakpoint-medium) {
      grid-column: initial;
      grid-row: initial;
    }
  }

  &__bg-text {
    font-family: $font-family-sans-serif;
    font-size: $font-size-normal * 6;
    font-weight: $font-weight-bold;
    left: 0;
    opacity: $opacity-background-text;
    position: absolute;
    text-transform: uppercase;
    top: 80%;
    pointer-events: none;

    @media (max-width: $breakpoint-medium) {
      display: none;
    }
  }

  &__quote {
    font-family: $font-family-sans-serif;
    font-size: $font-size-medium;
    font-weight: $font-weight-bold;
    margin-bottom: $spacing * 1.3;

    @media (max-width: $breakpoint-medium) {
      font-size: $font-size-normal;
    }
  }

  &__quote-author {
    font-weight: $font-weight-bold;
    padding-left: $spacing * 4 + $spacing * 2;
    position: relative;

    &::before {
      content: '';
      background: $gradient-accent;
      height: 1px;
      width: $spacing * 4;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    @media (max-width: $breakpoint-medium) {
      font-size: $font-size-small;
    }
  }

  &__quote-source {
    @media (max-width: $breakpoint-medium) {
      font-size: $font-size-small;
    }
  }
}
</style>
