<template>
  <div class="error-page">
    <Container>
      <h1 class="error-page__title">Une erreur est survenue</h1>

      <p>
        Vous pouvez nous contacter à l'adresse email suivante :
        <a href="mailto:contact@slash-tmp.dev">contact@slash-tmp.dev</a>.
      </p>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage'
}
</script>

<style lang="scss">
.error-page {
  padding: $spacing * 10 $spacing * 2;

  &__title {
    margin-bottom: $spacing * 4;
  }
}
</style>
