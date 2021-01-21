<template>
  <section
    class="container container--medium services-section"
    aria-labelledby="services-section"
  >
    <h2 id="services-section">Prestations et services</h2>

    <section class="webdev-section" aria-labelledby="webdev-section">
      <h3 id="webdev-section" class="webdev-section__title">
        Développement et intégration web
      </h3>

      <p>
        Nous pouvons prendre en charge toute la
        <strong>phase de développement de votre projet web</strong>
        quelle que soit sa nature : landing page, site vitrine, application web
        ou site e-commerce. Concrètement, on transforme votre cahier des charges
        et vos maquettes en
        <strong>site web fonctionnel, accessible et utilisable</strong>.
      </p>

      <!-- TODO: alt text -->
      <img src="@/assets/img/webdev.svg" alt="" class="illustration" />

      <p>
        D’un point de vue pratique : on
        <strong>travaille de manière très simple</strong>
        avec un kanban et on intègre les tâches de manière continue pour que nos
        clients puissent voir évoluer leur projet au fil du développement. On
        s’assure également que
        <strong>
          notre code est bien structuré, documenté, testé et performant
        </strong>
        pour assurer la qualité du produit livré et donner à nos clients les
        clefs pour faire évoluer leur projet.
      </p>
    </section>

    <section aria-labelledby="audit-section" class="audit-section">
      <h3 id="audit-section" class="audit-section__title">
        Audits et conseil<br />
        en qualité web
      </h3>

      <p class="audit-section__paragraph">
        Nous sommes tous les deux certifiés
        <a href="https://www.opquast.com/certification/">Opquast</a> et nous
        avons une grande sensibilité pour la qualité web et l’expérience
        utilisateur. Nous pouvons intervenir pour proposer un
        <strong>audit de qualité web</strong>
        et vous aider à repérer les points d’amélioration sur votre projet et
        aussi les corriger pour une mise en conformité. Nous pouvons aussi
        <strong>
          former votre équipe de développement pour une montée en
          compétence</strong
        >.
      </p>

      <!-- TODO: alt text -->
      <img src="@/assets/img/webdev.svg" alt="" class="illustration" />
    </section>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection'
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.services-section {
  margin: 0 auto;
}

.illustration {
  height: 20rem;
  width: 22.5rem;

  @media (max-width: 1200px) {
    align-self: center;
    height: unset;
    max-width: 22.5rem;
    width: 100%;
  }
}

.webdev-section {
  display: grid;
  grid-template-columns: 1fr min-content;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }

  h3 {
    align-items: center;
    color: $color-purple;
    display: flex;
  }

  .illustration {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }

  p:nth-of-type(2) {
    grid-column: 1 / 3;
  }
}

.audit-section {
  display: grid;
  grid-template-columns: min-content 1fr;
  margin-top: 5rem;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }

  h3 {
    color: $color-purple;
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    br {
      @media (max-width: 1200px) {
        display: none;
      }
    }
  }

  .illustration {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
}
</style>
