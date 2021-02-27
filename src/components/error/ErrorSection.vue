<template>
  <section class="error-section">
    <Container>
      <Container size="small" alignment="left">
        <p class="error-section__description">
          <template v-if="code === 404">
            La page que vous cherchez n’existe pas ou a été supprimée
          </template>
          <template v-else>
            Une erreur est survenue dans le traitement de la page
          </template>
          (code d'erreur <code>{{ code }}</code
          >). Voici le lien de la
          <nuxt-link to="/">page d'accueil</nuxt-link> pour retrouver votre
          chemin.
        </p>

        <p class="error-section__description">
          Si vous ne trouvez pas le contenu que vous cherchez, n’hésitez pas à
          nous écrire :
          <a href="mailto:contact@slash-tmp.dev">contact@slash-tmp.dev</a>.
        </p>
      </Container>
    </Container>
  </section>
</template>

<script>
export default {
  name: 'ErrorSection',
  props: {
    code: {
      type: Number,
      default: 404
    }
  }
}
</script>

<style lang="scss">
.error-section {
  --outline-color: #{$color-text-dark};

  padding: $spacing * 10 $spacing * 2;

  @media (max-width: $breakpoint-medium) {
    padding: $spacing * 6 $spacing * 2;
  }

  &__description {
    & + & {
      margin-top: $spacing * 2;
    }
  }
}
</style>
