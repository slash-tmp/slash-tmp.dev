<template>
  <article>
    <Hero tag="header">
      <h1>Page introuvable</h1>
    </Hero>

    <ErrorSection :code="error.statusCode" />
  </article>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: Object
  }
}
</script>
