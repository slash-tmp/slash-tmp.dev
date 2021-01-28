<template>
  <section
    class="manifesto container--medium"
    aria-labelledby="manifesto-section-title"
  >
    <h2 id="manifesto-section-title">De la qualité web ?</h2>
    <div class="manifesto__paper-wrapper">
      <!-- Background text -->
      <div
        class="manifesto__paper-background background-text"
        aria-hidden="true"
      >
        qua<br />lité<br />web
      </div>

      <!-- Manifest paper -->
      <div class="manifesto__paper">
        <p>
          La qualité web, c’est ce qui nous anime, c’est un peu notre fer de
          lance.
        </p>
        <p>
          Un site de qualité, c’est un site qui propose une
          <strong>
            expérience optimale pour toutes et tous en répondant aux besoins des
            utilisateurs et utilisatrices</strong
          >. C’est une compétence pluridisciplinaire qui passe par le code, le
          design, la rédaction, la gestion de projet… Comme définie par Élie
          Sloïm :
        </p>

        <figure class="manifesto__quality-quote">
          <blockquote>
            <p>
              La qualité web représente l’aptitude d’un service en ligne à
              satisfaire des exigences explicites ou implicites.
            </p>
          </blockquote>
          <figcaption class="manifesto__quality-quote-source">
            <cite>Livre Opquast</cite>
          </figcaption>
        </figure>

        <p>
          Alors pourquoi la qualité web ? Déjà parce que ça semble être une
          évidence de pouvoir consulter et utiliser un site de la meilleure des
          manières possibles. Mais aussi parce qu’<strong
            >un site qui ne respecte pas ces principes peut coûter cher, très
            cher</strong
          >. On parle de “non-qualité” et cela représente l’ensemble des coûts
          causés par l’absence de qualité dans un projet : déréferencement dans
          les moteurs de recherche, ventes non réalisées sur un site e-commerce,
          retard dans le traitement des réclamations…
        </p>

        <p>
          Autant de raisons qui nécessitent de s’intéresser et d’investir dans
          la qualité web !
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'QualitySection'
}
</script>

<style lang="scss">
.manifesto {
  display: grid;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 800px) {
    padding: 0 0.5rem;
  }

  &__paper-wrapper {
    display: flex;
    justify-content: flex-end;
    justify-self: flex-end;
    position: relative;
  }

  &__paper-background {
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateX(-90%) translateY(-50%);

    @media (max-width: 1200px) {
      display: none;
    }
  }

  &__paper {
    background-color: $color-white;
    border-radius: 1rem;
    border: 1px solid #bdbdbd;
    box-shadow: 1rem 1rem 2.5rem rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    display: grid;
    font-size: 1.2rem;
    gap: 1.5rem;
    max-width: 45rem;
    padding: 5rem 2.5rem;
    position: relative;

    @media (max-width: 800px) {
      font-size: 1rem;
      padding: 2rem 0.5rem;
    }
  }

  &__quality-quote * {
    display: inline;
  }

  &__quality-quote-source {
    white-space: nowrap;

    &::before {
      content: '— ';
    }
  }
}
</style>
