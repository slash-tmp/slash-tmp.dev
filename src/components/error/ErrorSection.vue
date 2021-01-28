<template>
  <section class="error container container--small flow">
    <p>
      <template v-if="code === 404">
        La page que vous cherchez n’existe pas ou a été supprimée
      </template>
      <template v-else>
        Une erreur est survenue dans le traitement de la page
      </template>
      (code d'erreur <code>{{ code }}</code
      >). Voici le lien de la <nuxt-link to="/">page d'accueil</nuxt-link> pour
      retrouver votre chemin.
    </p>

    <p>
      Si vous ne trouvez pas le contenu que vous cherchez, n’hésitez pas à nous
      écrire :
      <a href="mailto:contact@slash-tmp.dev">contact@slash-tmp.dev</a>.
    </p>
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
.error {
  margin: 0 auto;
}
</style>
