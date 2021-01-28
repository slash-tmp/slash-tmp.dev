<template>
  <article>
    <Hero tag="header">
      <h1>{{ error.statusCode === 404 ? 'Page introuvable' : 'Erreur' }}</h1>
    </Hero>

    <ErrorSection :code="error.statusCode" />
  </article>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: Object,
      default: () => {
        return { statusCode: 404 }
      }
    }
  }
}
</script>
