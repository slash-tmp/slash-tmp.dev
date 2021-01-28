<template>
  <section class="error container container--small flow">
    <p>
      La page que vous cherchez n’existe pas ou a été supprimée (code d'erreur
      <code>{{ code }}</code
      >). Voici le lien de la <nuxt-link to="/">page d'accueil</nuxt-link> pour
      vous guider.
    </p>

    <p>
      Si vous ne trouvez toujours pas le contenu que vous cherchez, n’hésitez
      pas à nous écrire :
      <a href="mailto:contact@slash-tmp.dev">contact@slash-tmp.dev</a>.
    </p>
  </section>
</template>

<script>
export default {
  name: 'ErrorSection',
  props: {
    code: Number
  }
}
</script>

<style lang="scss">
.error {
  margin: 0 auto;
}
</style>
